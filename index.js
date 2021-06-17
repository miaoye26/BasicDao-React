import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import * as reach from '@reach-sh/stdlib/ETH';

/*
import * as reach from '@reach-sh/stdlib/ALGO.mjs';
reach.setSignStrategy('AlgoSigner');
reach.setProviderByName('TestNet');
*/

const VoteToInt = {'ALICE_PROP': 0, 'BOB_PROP': 1};
const intToVote = [ 'Proposal of Alice reached consensus, funding was sent!',
                   'Proposal of Bob reached consensus, funding was sent!',
                   ,'There has been a timeout!', ];
     
                   //'There has been a tie score, fund are being sent and evently divided!',];

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '0.01', defaultDeadline: '10000', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    try {
      const faucet = await reach.getFaucet();
      this.setState({view: 'FundAccount', faucet});
    } catch (e) {
      this.setState({view: 'DeployerOrAttacher'});
    }
  }
  async fundAccount(fundAmount) {
    await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getVote(aliceProposal, bobProposal) { //  getVote: Fun([Bytes(1000), Bytes(1000)], UInt),
    const vote = await new Promise(resolveHandP => {
      this.setState({view: 'GetVote', playable: true, aliceProposal, bobProposal, resolveHandP});
      this.voted = true;
    });
    this.setState({view: 'WaitingForResults', vote});
    return VoteToInt[vote];
  }

  seeOutcome(i, forA, forB) { this.setState({view: 'Done', forA, forB, outcome: intToVote[i]}); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  playHand(vote) { this.state.resolveHandP(vote); }
  log(i) {console.log(i);}
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'SetWager'};
  }
  setWager(wager) { this.setState({view: 'SetAliceProposal', wager}); }
  //setDeadline(deadline) { this.setState({view: 'SetAliceProposal', deadline}); }

  setAliceProposal(aliceProposal) { this.setState({view: 'SetBobProposal', aliceProposal}); }
  setBobProposal(bobProposal) { this.setState({view: 'SetAliceAddr', bobProposal}); }

  setAliceAddr(aliceAddr) { this.setState({view: 'SetBobAddr', aliceAddr}); }
  setBobAddr(bobAddr) { this.setState({view: 'Deploy', bobAddr}); }

  async deploy() {
    const ctc = this.props.acc.deploy(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.aliceProposal = this.state.aliceProposal;
    this.bobProposal = this.state.bobProposal;
    this.deadline = this.state.deadline;
    this.aliceAddr = this.state.aliceAddr;
    this.bobAddr = this.state.bobAddr;
    this.voted = false;

    backend.Pollster(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }
  render() { return renderView(this, DeployerViews); }
}

class Attacher extends Player {
  constructor(props) {
    super(props);
    this.voted = false;
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Voter(ctc, this);
  }
  async acceptWager(wagerAtomic, aliceProposal ,bobProposal ) { // Fun([UInt] Bytes, Bytes, Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, aliceProposal, bobProposal, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  voterWas(voterAddr, forA, forB) {
    //? if voterAddr = accVoter, only does it once

  // if(reach.addressEq(voterAddr, ctc)) {
     //console.log(`${Who} voted: ${vote ? 'Alice' : 'Bob'}`);
    this.forA = forA;
    this.forB = forB;
    this.voted = true;
  // }
  

 }
 shouldVote() { 
   return !this.voted;
 }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);
