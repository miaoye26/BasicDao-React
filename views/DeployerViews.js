import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Proposing a New Project (Deployer)</h2>
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
        <p>How much funding are you requesting for your project in DUDU coin?</p>
        <br/>
        <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.setWager(wager)}
        >Set Requested Funds</button>
      </div>
    );
  }
}

exports.SetDeadline = class extends React.Component {
  render() {
    const {parent, defaultDeadline} = this.props;
    const deadline = (this.state || {}).deadline || defaultDeadline;
    return (
      <div>
         <p>How long is the voting window?(number of blocks)</p>
        <input
          type='number'
          placeholder={defaultDeadline}
          onChange={(e) => this.setState({deadline: e.currentTarget.value})}
        /> 
        <br />
        <button
          onClick={() => parent.setDeadline(deadline)}
        >Set Time Window</button>
      </div>
    );
  }
}

exports.SetAliceProposal = class extends React.Component {
  render() {
    const {parent} = this.props;
    const aliceProposal = (this.state || {}).aliceProposal || 'The greatest project of mankind';
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

exports.SetProjectName = class extends React.Component {
  render() {
    const {parent} = this.props;
    const projectName = (this.state || {}).projectName || 'The Manhattan Project';
    return (
      <div>
        <input
          type='text'
          placeholder={'Project Name'}
          onChange={(e) => this.setState({projectName: e.currentTarget.value})}
        /> 
        <br />
        <br />
        <button
          onClick={() => parent.setProjectName(projectName)}
        >Set Project Name</button>
      </div>
    );
  }
}


exports.SetAliceAddr = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcAliceAddr} = this.state || {};
    return (
      <div>
        Please enter your Address for sending the Requested Funds:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcAliceAddr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcAliceAddr}
          onClick={() => parent.setAliceAddr(ctcAliceAddr)}
        >Set Deposit Address</button>
      </div>
    );
  }
}

exports.SetBobAddr = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcBobAddr} = this.state || {};
    return (
      <div>
        Please paste the Bob Address info:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcBobAddr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcBobAddr}
          onClick={() => parent.setBobAddr(ctcBobAddr)}
        >Set Bob Deposit Address</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, aliceProposal, projectName, standardUnit} = this.props;
    return (
      <div>
        Project Name: <strong>{projectName}</strong>
        <br />
        Project Proposal: <strong>{aliceProposal}</strong>
        <br />
        Requested Funds(DUDU Coin): <strong>{wager}</strong> {standardUnit}
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
    const { wager, aliceProposal, projectName, standardUnit} = this.props;
    return (
      
      <div>
        Project Name: <strong>{projectName}</strong>
        <br />
        Project Proposal: <strong>{aliceProposal}</strong>
        <br />
         Requested Funds(DUDU Coin): <strong>{wager}</strong> {standardUnit}
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
        Waiting for Voters (Attachers) to join...
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
