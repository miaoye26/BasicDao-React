import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetVote = class extends React.Component {
  render() {
    const {parent, playable, aliceProposal, projectName, hand} = this.props;
    return (
      <div>
        {hand ? 'There is no concensus! Try convince your counterpart and vote again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        Project Name: <strong>{projectName}</strong>
        <br />
        Project Proposal: <strong>{aliceProposal}</strong>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.VoteProp('Yes_PROP')}
        >Voting Yes</button>
        <button
          disabled={!playable}
          onClick={() => parent.VoteProp('No_PROP')}
        >Voting No</button>
        <br/>
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
    const {outcome, aliceProposal, projectName, forYes, forNo} = this.props;
    return (
      <div>
        <br />
        Project Name: <strong>{projectName}</strong>
        <br />
        Project Proposal: <strong>{aliceProposal}</strong>
        <br />
        Number of Votes for Yes: <strong>{forYes}</strong>
        <br />
        Number of Votes for No: <strong>{forNo}</strong>
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
