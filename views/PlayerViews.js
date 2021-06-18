import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetVote = class extends React.Component {
  render() {
    const {parent, playable, aliceProposal, bobProposal, hand} = this.props;
    return (
      <div>
        {hand ? 'There is no concensus! Try convince your counterpart and vote again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        Alice Proposal: <strong>{aliceProposal}</strong>
        <br />
        Bob Proposal: <strong>{bobProposal}</strong>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.VoteProp('ALICE_PROP')}
        >Alice's Proposal</button>
        <button
          disabled={!playable}
          onClick={() => parent.VoteProp('BOB_PROP')}
        >Bob's Proposal</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Submiting your vote...  <br />
        (Confirm your transcation on MetaMask)
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome, aliceProposal, bobProposal, forA, forB} = this.props;
    return (
      <div>
        <br />
        Alice Proposal: <strong>{aliceProposal}</strong>
        <br />
        Number of Votes for Alice: <strong>{forA}</strong>
        <br />
        Bob Proposal: <strong>{bobProposal}</strong>
        <br />
        Number of Votes for Bob: <strong>{forB}</strong>
        <br />
        <br />
         The outcome of the Voting was:
        <br />
        <strong> {outcome} </strong>
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
