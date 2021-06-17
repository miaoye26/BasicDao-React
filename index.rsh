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
        setDeadline: Fun([], UInt)
      };

const Player_Voter =
      { ...Player,
        //display Voter's vote to whom, take in own address and set voted=true at front end
        voterWas: Fun([Address, UInt, UInt], Null),
        acceptWager: Fun([UInt, Bytes(1000), Bytes(1000)], Null) };

//const DEADLINE = 10;
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
        // const deadline = declassify(interact.setDeadline());
      });
      
      Pollster.publish(wager, aliceProposal, bobProposal, aliceAddr, bobAddr);
/*
        Voter.only(() => {
          const voted = false;
        })

        Voter.publish(voted);
*/
      //timeRemaining and keepGoing takes the deadline as input for makeDeadline
      const [ timeRemaining, keepGoing ] = makeDeadline(5);

        // paralleReduce function for running multiple voters at same time
    const [ forA, forB ] = parallelReduce([ 0, 0])
        .invariant(balance() == ((forA + forB) * wager) )
        .while( keepGoing() )
        .case(
          //PART_EXPR
          Voter,
          //PUBLISH_EXPR
          ( () => ({
            //? what are more predefined options for Publish Expr
            msg: declassify(interact.getVote(aliceProposal, bobProposal)),
            when: declassify(interact.shouldVote()),
          })),
          //PAY_EXPR,
          //? what is _ mean? 
          ( (_) => wager),
          //CONSENSUS_EXPR
          ( (VoteInt) => {
            const voter = this;
            // voters call voterWas function pass in self as voter 
            Voter.only(() => {
              //interact.voterWas(voter);
               interact.voterWas(voter, forA, forB);
          });
            // if voteInt=0, which is Alice, nA=1, nB=0, else nA=0 nB=1
            const [ nA, nB ] = VoteInt == 0 ? [1,0] : [0,1];
            //return total count forA and forB
            return [ forA + nA, forB + nB ];
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
          transfer(wager * forA).to(aliceAddr);
          transfer(wager * forB).to(bobAddr);
        }
        else{
        // set winner address, then transfer ballance
        const winner = outcome == ALICE_PROP ? aliceAddr : bobAddr;
        // concensus step with commit
        transfer(balance()).to(winner);
        }
        commit();

        //showOutcome(outcome, forA, forB)();

      exit(); });
