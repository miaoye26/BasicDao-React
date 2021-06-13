'reach 0.1';

//const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
//const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);
const [ishand, ALICE_PROP, BOB_PROP, DIFF ] = makeEnum(3);
/*
const winner = (handA, handB) =>
      ((handA + (4 - handB)) % 3);

assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK, ROCK) == DRAW);

forall(UInt, handA =>
  forall(UInt, handB =>
    assert(isOutcome(winner(handA, handB)))));

forall(UInt, (hand) =>
  assert(winner(hand, hand) == DRAW));
*/

const Player =
      { ...hasRandom,
        log: Fun([UInt], Null),
        aliceProposal: Bytes(1000),
        bobProposal: Bytes(1000),
        findOutcome: Fun([UInt, UInt], UInt),
        getVote: Fun([Bytes(1000), Bytes(1000)], UInt),
        seeOutcome: Fun([UInt], Null),
        informTimeout: Fun([], Null) };
const Alice =
      { ...Player,
        wager: UInt };
const Bob =
      { ...Player,
        acceptWager: Fun([UInt, Bytes(1000), Bytes(1000)], Null) };

const DEADLINE = 10;
export const main =
  Reach.App(
    {},
    [Participant('Alice', Alice), Participant('Bob', Bob)],
    (A, B) => {
      const informTimeout = () => {
        each([A, B], () => {
          interact.informTimeout(); }); };

      A.only(() => {
        const wager = declassify(interact.wager);
        const aliceProposal = declassify(interact.aliceProposal);
        const bobProposal = declassify(interact.bobProposal); });
      A.publish(wager, aliceProposal, bobProposal)
        .pay(wager);
      commit();

      B.only(() => {
        interact.acceptWager(wager, aliceProposal, bobProposal); });
      B.pay(wager)
        .timeout(DEADLINE, () => closeTo(A, informTimeout));

      var outcome = DIFF;
      invariant(balance() == 2 * wager );
      while ( outcome == DIFF ) {
        commit();

        A.only(() => {
          const _handA = interact.getVote(aliceProposal, bobProposal);
          const [_commitA, _saltA] = makeCommitment(interact, _handA);
          const commitA = declassify(_commitA); });
        A.publish(commitA)
          .timeout(DEADLINE, () => closeTo(B, informTimeout));
        commit();

        unknowable(B, A(_handA, _saltA));
        B.only(() => {
          const handB = declassify(interact.getVote(aliceProposal, bobProposal));
          interact.log(handB); });
        B.publish(handB)
          .timeout(DEADLINE, () => closeTo(A, informTimeout));
        commit();

        A.only(() => {
          const [saltA, handA] = declassify([_saltA, _handA]); 
          interact.log(handA);});
        A.publish(saltA, handA)
          .timeout(DEADLINE, () => closeTo(B, informTimeout));
        checkCommitment(commitA, saltA, handA);

        outcome =
        ((handA == ALICE_PROP) && (handB == ALICE_PROP)) ? 0:
        ((handA == BOB_PROP) && (handB == BOB_PROP)) ? 1:
        DIFF;

        continue; 

  /*
        outcome = winner(handA, handB);
        outcome = handA == handB ? ALICE_PROP : DIFF;
  
        A.only(() => {
        outcome = interact.findOutcome(handA, handB);
        });
  */
 /*
         outcome = 
          handA != handB ? DIFF :
          handA == 0 ? 0 :
          handA == 1  ? 1 :
          DIFF;

          outcome =
          ((handA == handB) && (handA == 0)) ? 0:
          ((handA == handB) && (handA == 1)) ? 1:
          DIFF;

        if((handA == handB) && (handA == 0)){
          outcome = ALICE_PROP;
        }
        else if(handA == handB && handA == 1 ){
          outcome = BOB_PROP;
        }
        else{
          outcome = DIFF;
        }
*/


         }

      //assert(outcome == A_WINS);
      transfer(2 * wager).to(outcome == 0 ? A : B);
      commit();

      each([A, B], () => {
        interact.seeOutcome(outcome); });
      exit(); });
