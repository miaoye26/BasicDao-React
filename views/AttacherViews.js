import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Voter (Attacher)</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Please paste the contract info to attach to:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}


exports.AcceptTerms = class extends React.Component {
  render() {
    const {wager, aliceProposal, projectName, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The terms of the DAO Vote are:
        <br /> Wager: {wager} {standardUnit}     
        <br />
        Project Name: <strong>{projectName}</strong>
        <br />
        Alice Proposal: <strong>{aliceProposal}</strong>
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.termsAccepted();
          }}
        >Accept Terms and Pay Wager to Vote</button>
                <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.WaitforResult();
          }}
        >Rage Quit! I'm out!</button>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for the other player...
        <br />Think about which proposal you want to vote for.
      </div>
    );
  }
}

exports.WaitingForResult = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for the final results...
        <br />
        Outcome will be displayed at the end of the voting window.
      </div>
    );
  }
}

export default exports;
