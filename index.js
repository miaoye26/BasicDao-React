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
const intToVote = ['Proposal of Alice reached consensus, funding was sent!', 'Proposal of Bob reached consensus, funding was sent!'];

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '0.01', standardUnit};

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
  async getVote(aliceProposal, bobProposal) { // Fun([], UInt)
    const hand = await new Promise(resolveHandP => {
      this.setState({view: 'GetVote', playable: true, aliceProposal, bobProposal, resolveHandP});
    });
    this.setState({view: 'WaitingForResults', hand});
    return VoteToInt[hand];
  }

  seeOutcome(i) { this.setState({view: 'Done', outcome: intToVote[i]}); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  playHand(hand) { this.state.resolveHandP(hand); }
  log(i) {console.log(i);}
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'SetWager'};
  }
  setWager(wager) { this.setState({view: 'SetAliceProposal', wager}); }
  setAliceProposal(aliceProposal) { this.setState({view: 'SetBobProposal', aliceProposal}); }
  setBobProposal(bobProposal) { this.setState({view: 'Deploy', bobProposal}); }

  async deploy() {
    const ctc = this.props.acc.deploy(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.aliceProposal = this.state.aliceProposal;
    this.bobProposal = this.state.bobProposal;

    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }
  render() { return renderView(this, DeployerViews); }
}

class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Bob(ctc, this);
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
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);
