import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>CEO/Deployer (Alice)</h2>
        {content}
      </div>
    );
  }
}

exports.SetWager = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div>
        <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.setWager(wager)}
        >Set wager</button>
      </div>
    );
  }
}

exports.SetAliceProposal = class extends React.Component {
  render() {
    const {parent} = this.props;
    const aliceProposal = (this.state || {}).aliceProposal || 'Bet on NBA Games Tonight';
    return (
      <div>
        <input
          type='text'
          placeholder={'Alice Proposal'}
          onChange={(e) => this.setState({aliceProposal: e.currentTarget.value})}
        /> 
        <br />
        <br />
        <button
          onClick={() => parent.setAliceProposal(aliceProposal)}
        >Set Alice's Proposal</button>
      </div>
    );
  }
}

exports.SetBobProposal = class extends React.Component {
  render() {
    const {parent} = this.props;
    const bobProposal = (this.state || {}).bobProposal || 'Bet on Europe Cup Games Tonight';
    return (
      <div>
        <input
          type='text'
          placeholder={'Bob Proposal'}
          onChange={(e) => this.setState({bobProposal: e.currentTarget.value})}
        /> 
        <br />
        <br />
        <button
          onClick={() => parent.setBobProposal(bobProposal)}
        >Set Bos's Proposal</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, aliceProposal, bobProposal, standardUnit} = this.props;
    return (
      <div>
        Wager (pay to deploy): <strong>{wager}</strong> {standardUnit}
        <br />
        Alice Proposal: <strong>{aliceProposal}</strong>
        <br />
        Bob Proposal: <strong>{bobProposal}</strong>
        <br />
        <br />
        <button
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    const {parent, wager, aliceProposal, bobProposal, standardUnit} = this.props;
    return (
      
      <div>
         Wager (pay to vote): <strong>{wager}</strong> {standardUnit}
        <br />
        CEO Alice Proposal: <strong>{aliceProposal}</strong>
        <br />
        Staff Bob Proposal: <strong>{bobProposal}</strong>
        <br />
        <br />
        Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipborad(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipborad(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;
