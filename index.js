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
const intToVote = ['Proposal of Alice reached consensus, funding was sent to the winner!',
                   'Proposal of Bob reached consensus, funding was sent to the winner!',
                   'There has been a timeout!',
                   'There has been a tie score, funding are being evently divided and sent to both party!'];

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '0.1', defaultDeadline: '15', standardUnit};

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
    const vote = await new Promise(resolveVoteP => {
      this.setState({view: 'GetVote', playable: true, aliceProposal, bobProposal, resolveVoteP});
      this.voted = true;
    });
    this.setState({view: 'WaitingForResults', vote});
    return VoteToInt[vote];
  }

  seeOutcome(i, ACount, BCount) { 
    const output = intToVote[i];
    const forA = ACount.toString();
    const forB = BCount.toString();
    this.setState({view: 'Done', forA, forB, outcome: output }); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  VoteProp(vote) { this.state.resolveVoteP(vote); }
  log(i) { window.alert(i); }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'SetWager'};
  }
  setWager(wager) { this.setState({view: 'SetDeadline', wager}); }
  setDeadline(deadline) { this.setState({view: 'SetAliceProposal', deadline}); }
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
    //this.DUDU = "0xcc286d4cbbfc73c5642b7528309207aab59d366f";

    backend.Pollster(ctc, this);
     //backend.Pollster(ctc, { token: '0xcc286d4cbbfc73c5642b7528309207aab59d366f' });
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }

  render() { return renderView(this, DeployerViews); }
}

class Attacher extends Player {
  constructor(props) {
    super(props);
    this.voted = false;
    this.quit = false;
    window.console.log('constructer-voted=' + this.voted);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Voter(ctc, this);
  }
  async acceptWager(wagerAtomic, aliceProposal ,bobProposal ) { // Fun([UInt] Bytes, Bytes, Bool)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    const accepted = await new Promise(resolveAcceptedP => {
        window.console.log('acceptWager-voted=' + this.voted);
        this.setState({view: 'AcceptTerms', wager, aliceProposal, bobProposal, resolveAcceptedP});
      });
      if (accepted === 'ACCEPT')
      {
        window.console.log(`accepted = true : ` + accepted.toString());
        return true;
      }
      else
      {
        window.console.log(`accepted = false : ` + accepted);
        this.quit = true;
        window.console.log(`isquit=` + this.quit);
        return false;
      }  
  }
  termsAccepted() {
    this.state.resolveAcceptedP('ACCEPT');
    this.setState({view: 'WaitingForTurn'});

  }
  WaitforResult() {
    this.state.resolveAcceptedP('REJECT');
    this.setState({view: 'WaitingForResult'});
  }
  
  voterWas(voterAddr, forA, forB) {
      this.forA = forA;
      this.forB = forB;
      window.console.log('VoteWas1-voted=' + this.voted + ' from: ' + voterAddr);
      this.voted = true;
      window.console.log('VoteWas2-voted=' + this.voted + ' from: ' + voterAddr);
      window.console.log('forA=' + forA);
      window.console.log('forB=' + forB);
 }
 shouldVote() { 
  window.console.log('shouldVote-!voted=' + !this.voted);
   return !this.voted;
 }
 isQuit() { 
  window.console.log('isQuit-quit=' + this.quit);
   return this.quit;
 }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);
