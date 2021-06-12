import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetVote = class extends React.Component {
  render() {
    const {parent, playable, aliceProposal, bobProposal, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a difference! Vote again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        CEO Alice Proposal: <strong>{aliceProposal}</strong>
        <br />
        Staff Bob Proposal: <strong>{bobProposal}</strong>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ALICE_PROP')}
        >Alice's Proposal</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('BOB_PROP')}
        >Bob's Proposal</button>
      </div>
    );
  }
}
/*
exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ROCK')}
        >Rock</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('PAPER')}
        >Paper</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('SCISSORS')}
        >Scissors</button>
      </div>
    );
  }
}
*/
exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome, aliceProposal, bobProposal} = this.props;
    return (
      <div>
        <br />
        CEO Alice Proposal: <strong>{aliceProposal}</strong>
        <br />
        Staff Bob Proposal: <strong>{bobProposal}</strong>
        <br />
        Thank you for Voting on Basic DAO. The outcome of this DAO Voting was:
        <br />{outcome}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
