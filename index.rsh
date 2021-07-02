'reach 0.1';

const [isProp, No_PROP, Yes_PROP, TIMEOUT, TIED ] = makeEnum(4);

const Player =
      { ...hasRandom,
        aliceProposal: Bytes(1000),
        projectName: Bytes(1000),
        //Check whether voter has voted or not
        shouldVote: Fun([], Bool),
        log: Fun([UInt], Null),
        findOutcome: Fun([UInt, UInt], UInt),
        getVote: Fun([Bytes(1000), Bytes(1000), Bool], UInt),
        seeOutcome: Fun([UInt, UInt, UInt], Null)
       };

const Player_Pollster =
      { ...Player,
        wager: UInt,
        deadline: UInt,
        aliceAddr: Address,
        bobAddr: Address, 
        DUDU: Token,
      };

const Player_Voter =
      { ...Player,
        isQuit: Fun([], Bool),
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
        const projectName = declassify(interact.projectName);
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
        const aliceProposal = declassify(interact.aliceProposal);
        //const bobProposal = declassify(interact.bobProposal); 
        const aliceAddr = declassify(interact.aliceAddr);
        //const bobAddr = declassify(interact.bobAddr);
        //const DUDU = declassify(interact.DUDU); 
      });
      
      Pollster.publish(wager, aliceProposal, projectName, aliceAddr, deadline);

      //timeRemaining and keepGoing takes the deadline as input for makeDeadline
      const [ timeRemaining, keepGoing ] = makeDeadline(deadline);

        // paralleReduce function for running multiple voters at same time
    const [ forYes, forNo, timeOut ] = parallelReduce([ 0, 0, false])
        //.invariant(balance(DUDU) == ((forA + forB) * wager) && balance() == 0 )
        .invariant(balance() == ((forYes + forNo) * wager) )
        .while( keepGoing() )
        //.paySpec([DUDU])
        .case(
          //PART_EXPR
          Voter,
          //PUBLISH_EXPR
          ( () => {
              if (declassify(interact.isQuit()) == false && 
                  declassify(interact.acceptWager(wager, aliceProposal, projectName)) 
                  && timeOut == false) 
              {
                return { 
                         //when: declassify(interact.shouldVote()), 
                         when: true,
                         msg: declassify(interact.getVote(aliceProposal, projectName, timeOut)) 
                      }
              } 
              else {
                return { when: false, msg: 4 }
              }
       
          }),
          //PAY_EXPR,
          ( (_) => wager),
          //( (_) => [0, [wager, DUDU]]),
          //CONSENSUS_EXPR
          ( (VoteInt) => {
            // if voteInt=0, which is Alice, nA=1, nB=0, else nA=0 nB=1
            const [ VforNo, VforYes ] = VoteInt == 0 ? [1,0] : [0,1];
            const [ Yescount, Nocount] = [ forYes + VforYes, forNo + VforNo ];
            const voter = this;
            //voters call voterWas function pass in self as voter 
            Voter.only(() => {
              //interact.voterWas(voter);
               interact.voterWas(voter, Yescount, Nocount);
               interact.log(Yescount);
               interact.log(Nocount);
          });
            //return total count forA and forB
            return [ Yescount, Nocount, false];
          }))
         .timeout(
           //DEADLINE
           timeRemaining(),
           //TIMEOUT_BLOCK
            () => { 
              //Race between all participants
              Anybody.publish();
              //const result = forYes == forNo ? TIED : (forYes > forNo ? Yes_PROP : No_PROP);
              const result = (forYes > forNo) ? Yes_PROP : No_PROP;
              // show final outcome
              each([Pollster, Voter], () => {
                interact.seeOutcome(result, forYes, forNo); });

              return [ forYes, forNo , true ];
            });

             // set outcome base on who won
        const outcome = forYes > forNo ? Yes_PROP : No_PROP;

        if(forYes >= (forYes + forNo)/2)
        {
        const winner = outcome == Yes_PROP ? aliceAddr : aliceAddr;
        transfer(balance()).to(winner);
        }
        else{
          const winner = outcome == Yes_PROP ? aliceAddr : aliceAddr;
          transfer(balance()).to(winner);
        }

        /*
        A transfer expression may also be written transfer(AMOUNT_EXPR, TOKEN_EXPR).to(ADDR_EXPR), 
        where TOKEN_EXPR is a Token, which transfers non-network tokens of the specified type.
        */
/*
        if( forA == forB)
        {
          //Tie score divide funds
          transfer(wager * forA).to(aliceAddr);
          //transfer(wager * forB).to(bobAddr);

          //transfer(wager * forA, DUDU).to(aliceAddr);
          //transfer(wager * forB, DUDU).to(bobAddr);
        }
        else{
        // set winner address, then transfer ballance
        const winner = outcome == ALICE_PROP ? aliceAddr : bobAddr;
        transfer(balance()).to(winner);

        //transfer(balance(DUDU), DUDU).to(winner);
        }

  */


        commit();

      exit(); });
