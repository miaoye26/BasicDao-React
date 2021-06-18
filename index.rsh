'reach 0.1';

const [isProp, ALICE_PROP, BOB_PROP, TIMEOUT, TIED ] = makeEnum(4);

const Player =
      { ...hasRandom,
        aliceProposal: Bytes(1000),
        bobProposal: Bytes(1000),
        //Check whether voter has voted or not
        shouldVote: Fun([], Bool),
        log: Fun([UInt], Null),
        findOutcome: Fun([UInt, UInt], UInt),
        getVote: Fun([Bytes(1000), Bytes(1000)], UInt),
        seeOutcome: Fun([UInt, UInt, UInt], Null)
       };

const Player_Pollster =
      { ...Player,
        wager: UInt,
        deadline: UInt,
        aliceAddr: Address,
        bobAddr: Address, 
        setDeadline: Fun([], UInt),
        DUDU: Token,
      };

const Player_Voter =
      { ...Player,
        //display Voter's vote to whom, take in own address and set voted=true at front end
        voterWas: Fun([Address, UInt, UInt], Null),
        acceptWager: Fun([UInt, Bytes(1000), Bytes(1000)], Bool) };

const DEADLINE = 15;

export const main =
  Reach.App(
    {},
    [Participant('Pollster', Player_Pollster), ParticipantClass('Voter', Player_Voter)],
    (Pollster, Voter) => {
      /*
      const informTimeout = () => {
         each([Pollster, Voter], () => {
            interact.informTimeout(); }); };

    //function defined for each Pllostart and voter show their outcomes
    const showOutcome = (which, forA, forB) => () => {
      each([Pollster, Voter], () => 
      interact.seeOutcome(which, forA, forB));
    };
*/
      Pollster.only(() => {
        const wager = declassify(interact.wager);
        const aliceProposal = declassify(interact.aliceProposal);
        const bobProposal = declassify(interact.bobProposal); 
        const aliceAddr = declassify(interact.aliceAddr);
        const bobAddr = declassify(interact.bobAddr);
        const DUDU = declassify(interact.DUDU); 
        // const deadline = declassify(interact.setDeadline());
      });
      
      Pollster.publish(wager, aliceProposal, bobProposal, aliceAddr, bobAddr, DUDU);

      //timeRemaining and keepGoing takes the deadline as input for makeDeadline
      const [ timeRemaining, keepGoing ] = makeDeadline(DEADLINE);

        // paralleReduce function for running multiple voters at same time
    const [ forA, forB ] = parallelReduce([ 0, 0])
        .invariant(balance(DUDU) == ((forA + forB) * wager) && balance() == 0 )
        //.invariant(balance() == ((forA + forB) * wager) )
        .while( keepGoing() )
        .paySpec([DUDU])
        .case(
          //PART_EXPR
          Voter,
          //PUBLISH_EXPR
          ( () => {
            //if(declassify(interact.shouldVote()){
              if (declassify(interact.acceptWager(wager, aliceProposal ,bobProposal)) ) 
              {
                return { 
                         //when: declassify(interact.shouldVote()), 
                         when: true,
                         msg: declassify(interact.getVote(aliceProposal, bobProposal)) 
                      }
              } else {
                return { when: false, msg: 4 }
              }
           // }

          }),
          //PAY_EXPR,
          //? what is _ mean? 
          //( (_) => wager),
          ( (_) => [0, [wager, DUDU]]),
          //CONSENSUS_EXPR
          ( (VoteInt) => {
            // if voteInt=0, which is Alice, nA=1, nB=0, else nA=0 nB=1
            const [ VforA, VforB ] = VoteInt == 0 ? [1,0] : [0,1];
            const [ Acount, Bcount] = [ forA + VforA, forB + VforB ];
            const voter = this;
            // voters call voterWas function pass in self as voter 
            Voter.only(() => {
              //interact.voterWas(voter);
               interact.voterWas(voter, Acount, Bcount);
               interact.log(Acount);
               interact.log(Bcount);
          });

            //return total count forA and forB
            return [ Acount, Bcount];
          }))
         .timeout(
           //DEADLINE
           timeRemaining(),
           //TIMEOUT_BLOCK
            () => { 
              //Race between all participants
              Anybody.publish();
              const result = forA == forB ? TIED : (forA > forB ? ALICE_PROP : BOB_PROP);
              // show final outcome
              Voter.only(() => {
                interact.seeOutcome(result, forA, forB);
                });
        
              Pollster.only(() => {
                  interact.seeOutcome(result, forA, forB);
                });
              //showOutcome(TIMEOUT, forA, forB)();
              return [ forA, forB ];
            });

             // set outcome base on who won
        const outcome = forA == forB ? TIED : (forA > forB ? ALICE_PROP : BOB_PROP);

        /*
        A transfer expression may also be written transfer(AMOUNT_EXPR, TOKEN_EXPR).to(ADDR_EXPR), 
        where TOKEN_EXPR is a Token, which transfers non-network tokens of the specified type.
        */

        if( forA == forB)
        {
          //Tie score divide funds
          //transfer(wager * forA).to(aliceAddr);
          //transfer(wager * forB).to(bobAddr);

          transfer(wager * forA, DUDU).to(aliceAddr);
          transfer(wager * forB, DUDU).to(bobAddr);
        }
        else{
        // set winner address, then transfer ballance
        const winner = outcome == ALICE_PROP ? aliceAddr : bobAddr;
        //transfer(balance()).to(winner);

        transfer(balance(DUDU), DUDU).to(winner);
        }
        commit();

      exit(); });
