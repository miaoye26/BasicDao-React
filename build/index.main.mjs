// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1000));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6, ctc1, ctc6, ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc6, ctc1, ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc6, ctc1, ctc6, ctc3, ctc1, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc6, ctc1, ctc6, ctc3, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc6, ctc1, ctc6, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6, ctc1, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc1]);
  
  
  const v23 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.aliceProposal, 'for Alice\'s interact field aliceProposal');
  const v19 = stdlib.protect(ctc0, interact.bobProposal, 'for Alice\'s interact field bobProposal');
  const v20 = stdlib.protect(ctc1, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv(1, 3, stdlib.checkedBigNumberify('./index.rsh:52:9:dot', stdlib.UInt_max, 0), [ctc1, ctc1, ctc0, ctc0], [v23, v20, v18, v19], [v20, []], [ctc1, ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:52:9:dot', stdlib.UInt_max, 0), v23]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:52:9:dot', stdlib.UInt_max, 0)]);
    const [v28, v29, v30] = txn1.data;
    const v33 = txn1.time;
    const v27 = txn1.from;
    
    sim_r.txns.push({
      amt: v28,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:54:15:after expr stmt semicolon', stdlib.UInt_max, 1), v27, v28, v33]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:54:15:after expr stmt semicolon', stdlib.UInt_max, 1), v27, v28]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:54:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v28, v29, v30] = txn1.data;
  const v33 = txn1.time;
  const v27 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), [ctc6, ctc1, ctc1], [v27, v28, v33], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v27, v28, v33]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v27, v28]);
      const [] = txn3.data;
      const v169 = txn3.time;
      const v166 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v168 = stdlib.addressEq(v27, v166);
      stdlib.assert(v168, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:59:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: v28,
        kind: 'from',
        to: v27,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
      sim_r.view = [ctc9, []];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v169 = txn3.time;
    const v166 = txn3.from;
    ;
    const v168 = stdlib.addressEq(v27, v166);
    stdlib.assert(v168, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:59:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:46:33:application',
      fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:59:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v40 = txn2.time;
    const v37 = txn2.from;
    const v39 = stdlib.add(v28, v28);
    ;
    let v41 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v184 = v40;
    let v186 = v39;
    
    while ((() => {
      const v48 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v48;})()) {
      const v53 = stdlib.protect(ctc1, await interact.getVote(v29, v30), {
        at: './index.rsh:67:42:application',
        fs: ['at ./index.rsh:66:15:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
        msg: 'getVote',
        who: 'Alice'
        });
      const v55 = stdlib.protect(ctc1, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:68:52:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:66:15:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v56 = stdlib.digest(ctc2, [v55, v53]);
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:70:11:dot', stdlib.UInt_max, 3), [ctc6, ctc1, ctc6, ctc1, ctc1, ctc3], [v27, v28, v37, v184, v186, v56], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 10), (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:70:11:dot', stdlib.UInt_max, 6), v27, v28, v37, v184, v186]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:70:11:dot', stdlib.UInt_max, 6), v27, v28, v37, v186]);
        const [v59] = txn3.data;
        const v62 = txn3.time;
        const v58 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v61 = stdlib.addressEq(v27, v58);
        stdlib.assert(v61, {
          at: './index.rsh:70:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:72:17:after expr stmt semicolon', stdlib.UInt_max, 8), v27, v28, v37, v59, v62, v186]);
        sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:72:17:after expr stmt semicolon', stdlib.UInt_max, 8), v27, v28, v37, v59, v186]);
        sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:72:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv(7, 0, [], false, false));
        const [] = txn4.data;
        const v135 = txn4.time;
        const v132 = txn4.from;
        ;
        const v134 = stdlib.addressEq(v37, v132);
        stdlib.assert(v134, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:71:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:46:33:application',
          fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:71:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const [v59] = txn3.data;
        const v62 = txn3.time;
        const v58 = txn3.from;
        ;
        const v61 = stdlib.addressEq(v27, v58);
        stdlib.assert(v61, {
          at: './index.rsh:70:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const txn4 = await (ctc.recv(8, 1, [ctc1], false, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 10)));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), [ctc6, ctc1, ctc6, ctc3, ctc1, ctc1], [v27, v28, v37, v59, v62, v186], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v27, v28, v37, v59, v62, v186]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v27, v28, v37, v59, v186]);
            const [] = txn5.data;
            const v116 = txn5.time;
            const v113 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v115 = stdlib.addressEq(v27, v113);
            stdlib.assert(v115, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:79:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            sim_r.txns.push({
              amt: v186,
              kind: 'from',
              to: v27,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
            sim_r.view = [ctc9, []];
            sim_r.isHalt = true;
            
            return sim_r;
            })));
          const [] = txn5.data;
          const v116 = txn5.time;
          const v113 = txn5.from;
          ;
          const v115 = stdlib.addressEq(v27, v113);
          stdlib.assert(v115, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:79:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc4, await interact.informTimeout(), {
            at: './index.rsh:46:33:application',
            fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:79:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          }
        else {
          const [v68] = txn4.data;
          const v71 = txn4.time;
          const v67 = txn4.from;
          ;
          const v70 = stdlib.addressEq(v37, v67);
          stdlib.assert(v70, {
            at: './index.rsh:78:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          stdlib.protect(ctc4, await interact.log(v53), {
            at: './index.rsh:84:23:application',
            fs: ['at ./index.rsh:82:15:application call to [unknown function] (defined at: ./index.rsh:82:19:function exp)'],
            msg: 'log',
            who: 'Alice'
            });
          
          const txn5 = await (ctc.sendrecv(10, 2, stdlib.checkedBigNumberify('./index.rsh:85:11:dot', stdlib.UInt_max, 5), [ctc6, ctc1, ctc6, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1], [v27, v28, v37, v59, v68, v71, v186, v55, v53], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1, ctc1], true, true, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 10), (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:85:11:dot', stdlib.UInt_max, 10), v27, v28, v37, v59, v68, v71, v186]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:85:11:dot', stdlib.UInt_max, 10), v27, v28, v37, v59, v68, v186]);
            const [v76, v77] = txn5.data;
            const v80 = txn5.time;
            const v75 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v79 = stdlib.addressEq(v27, v75);
            stdlib.assert(v79, {
              at: './index.rsh:85:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v82 = stdlib.digest(ctc2, [v76, v77]);
            const v83 = stdlib.digestEq(v59, v82);
            stdlib.assert(v83, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:87:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v85 = stdlib.eq(v77, v68);
            const v86 = stdlib.eq(v77, stdlib.checkedBigNumberify('./index.rsh:90:40:decimal', stdlib.UInt_max, 0));
            const v87 = v85 ? v86 : false;
            const v89 = stdlib.eq(v77, stdlib.checkedBigNumberify('./index.rsh:91:40:decimal', stdlib.UInt_max, 1));
            const v90 = v85 ? v89 : false;
            const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:91:46:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
            const v92 = v87 ? stdlib.checkedBigNumberify('./index.rsh:90:46:decimal', stdlib.UInt_max, 0) : v91;
            const cv41 = v92;
            const cv184 = v80;
            const cv186 = v186;
            
            (() => {
              const v41 = cv41;
              const v184 = cv184;
              const v186 = cv186;
              
              if ((() => {
                const v48 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                
                return v48;})()) {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v28, v37, v184, v186]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v28, v37, v186]);
                sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = false;
                }
              else {
                const v150 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:131:16:decimal', stdlib.UInt_max, 2), v28);
                const v151 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:131:41:decimal', stdlib.UInt_max, 0));
                const v152 = v151 ? v27 : v37;
                sim_r.txns.push({
                  amt: v150,
                  kind: 'from',
                  to: v152,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc9, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                sim_r.view = [ctc9, []];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn6.data;
            const v97 = txn6.time;
            const v94 = txn6.from;
            ;
            const v96 = stdlib.addressEq(v37, v94);
            stdlib.assert(v96, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:86:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc4, await interact.informTimeout(), {
              at: './index.rsh:46:33:application',
              fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:86:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            }
          else {
            const [v76, v77] = txn5.data;
            const v80 = txn5.time;
            const v75 = txn5.from;
            ;
            const v79 = stdlib.addressEq(v27, v75);
            stdlib.assert(v79, {
              at: './index.rsh:85:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v82 = stdlib.digest(ctc2, [v76, v77]);
            const v83 = stdlib.digestEq(v59, v82);
            stdlib.assert(v83, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:87:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v85 = stdlib.eq(v77, v68);
            const v86 = stdlib.eq(v77, stdlib.checkedBigNumberify('./index.rsh:90:40:decimal', stdlib.UInt_max, 0));
            const v87 = v85 ? v86 : false;
            const v89 = stdlib.eq(v77, stdlib.checkedBigNumberify('./index.rsh:91:40:decimal', stdlib.UInt_max, 1));
            const v90 = v85 ? v89 : false;
            const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:91:46:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
            const v92 = v87 ? stdlib.checkedBigNumberify('./index.rsh:90:46:decimal', stdlib.UInt_max, 0) : v91;
            const cv41 = v92;
            const cv184 = v80;
            const cv186 = v186;
            
            v41 = cv41;
            v184 = cv184;
            v186 = cv186;
            
            continue;}
          }
        }
      }
    const v150 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:131:16:decimal', stdlib.UInt_max, 2), v28);
    const v151 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:131:41:decimal', stdlib.UInt_max, 0));
    const v152 = v151 ? v27 : v37;
    ;
    stdlib.protect(ctc4, await interact.seeOutcome(v41), {
      at: './index.rsh:135:28:application',
      fs: ['at ./index.rsh:134:11:application call to [unknown function] (defined at: ./index.rsh:134:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;}
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1000));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v23 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc1, ctc1], false, false));
  const [v28, v29, v30] = txn1.data;
  const v33 = txn1.time;
  const v27 = txn1.from;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v28, v29, v30), {
    at: './index.rsh:57:29:application',
    fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:58:9:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v27, v28, v33], [v28, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:58:9:dot', stdlib.UInt_max, 1), v27, v28, v33]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:58:9:dot', stdlib.UInt_max, 1), v27, v28]);
    const [] = txn2.data;
    const v40 = txn2.time;
    const v37 = txn2.from;
    
    const v39 = stdlib.add(v28, v28);
    sim_r.txns.push({
      amt: v28,
      kind: 'to',
      tok: undefined
      });
    const v41 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    const v184 = v40;
    const v186 = v39;
    
    if ((() => {
      const v48 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v48;})()) {
      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v28, v37, v184, v186]);
      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v28, v37, v186]);
      sim_r.view = [ctc9, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v150 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:131:16:decimal', stdlib.UInt_max, 2), v28);
      const v151 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:131:41:decimal', stdlib.UInt_max, 0));
      const v152 = v151 ? v27 : v37;
      sim_r.txns.push({
        amt: v150,
        kind: 'from',
        to: v152,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc5, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
      sim_r.view = [ctc5, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v169 = txn3.time;
    const v166 = txn3.from;
    ;
    const v168 = stdlib.addressEq(v27, v166);
    stdlib.assert(v168, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:59:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:46:33:application',
      fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:59:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v40 = txn2.time;
    const v37 = txn2.from;
    const v39 = stdlib.add(v28, v28);
    ;
    let v41 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v184 = v40;
    let v186 = v39;
    
    while ((() => {
      const v48 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v48;})()) {
      const txn3 = await (ctc.recv(6, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 10)));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), [ctc6, ctc0, ctc6, ctc0, ctc0], [v27, v28, v37, v184, v186], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v27, v28, v37, v184, v186]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v27, v28, v37, v186]);
          const [] = txn4.data;
          const v135 = txn4.time;
          const v132 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v134 = stdlib.addressEq(v37, v132);
          stdlib.assert(v134, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:71:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.txns.push({
            amt: v186,
            kind: 'from',
            to: v37,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc5, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
          sim_r.view = [ctc5, []];
          sim_r.isHalt = true;
          
          return sim_r;
          })));
        const [] = txn4.data;
        const v135 = txn4.time;
        const v132 = txn4.from;
        ;
        const v134 = stdlib.addressEq(v37, v132);
        stdlib.assert(v134, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:71:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:46:33:application',
          fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:71:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const [v59] = txn3.data;
        const v62 = txn3.time;
        const v58 = txn3.from;
        ;
        const v61 = stdlib.addressEq(v27, v58);
        stdlib.assert(v61, {
          at: './index.rsh:70:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v66 = stdlib.protect(ctc0, await interact.getVote(v29, v30), {
          at: './index.rsh:76:52:application',
          fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
          msg: 'getVote',
          who: 'Bob'
          });
        stdlib.protect(ctc2, await interact.log(v66), {
          at: './index.rsh:77:23:application',
          fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
          msg: 'log',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:78:11:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc3, ctc0, ctc0, ctc0], [v27, v28, v37, v59, v62, v186, v66], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 10), (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:78:11:dot', stdlib.UInt_max, 8), v27, v28, v37, v59, v62, v186]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:78:11:dot', stdlib.UInt_max, 8), v27, v28, v37, v59, v186]);
          const [v68] = txn4.data;
          const v71 = txn4.time;
          const v67 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v70 = stdlib.addressEq(v37, v67);
          stdlib.assert(v70, {
            at: './index.rsh:78:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:80:17:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v28, v37, v59, v68, v71, v186]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:80:17:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v28, v37, v59, v68, v186]);
          sim_r.view = [ctc9, [stdlib.checkedBigNumberify('./index.rsh:80:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv(9, 0, [], false, false));
          const [] = txn5.data;
          const v116 = txn5.time;
          const v113 = txn5.from;
          ;
          const v115 = stdlib.addressEq(v27, v113);
          stdlib.assert(v115, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:79:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:46:33:application',
            fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:79:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          }
        else {
          const [v68] = txn4.data;
          const v71 = txn4.time;
          const v67 = txn4.from;
          ;
          const v70 = stdlib.addressEq(v37, v67);
          stdlib.assert(v70, {
            at: './index.rsh:78:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const txn5 = await (ctc.recv(10, 2, [ctc0, ctc0], false, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 10)));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc3, ctc0, ctc0, ctc0], [v27, v28, v37, v59, v68, v71, v186], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v27, v28, v37, v59, v68, v71, v186]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v27, v28, v37, v59, v68, v186]);
              const [] = txn6.data;
              const v97 = txn6.time;
              const v94 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v96 = stdlib.addressEq(v37, v94);
              stdlib.assert(v96, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:86:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              sim_r.txns.push({
                amt: v186,
                kind: 'from',
                to: v37,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc5, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
              sim_r.view = [ctc5, []];
              sim_r.isHalt = true;
              
              return sim_r;
              })));
            const [] = txn6.data;
            const v97 = txn6.time;
            const v94 = txn6.from;
            ;
            const v96 = stdlib.addressEq(v37, v94);
            stdlib.assert(v96, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:86:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:46:33:application',
              fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:86:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            }
          else {
            const [v76, v77] = txn5.data;
            const v80 = txn5.time;
            const v75 = txn5.from;
            ;
            const v79 = stdlib.addressEq(v27, v75);
            stdlib.assert(v79, {
              at: './index.rsh:85:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v82 = stdlib.digest(ctc4, [v76, v77]);
            const v83 = stdlib.digestEq(v59, v82);
            stdlib.assert(v83, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:87:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v85 = stdlib.eq(v77, v68);
            const v86 = stdlib.eq(v77, stdlib.checkedBigNumberify('./index.rsh:90:40:decimal', stdlib.UInt_max, 0));
            const v87 = v85 ? v86 : false;
            const v89 = stdlib.eq(v77, stdlib.checkedBigNumberify('./index.rsh:91:40:decimal', stdlib.UInt_max, 1));
            const v90 = v85 ? v89 : false;
            const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:91:46:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
            const v92 = v87 ? stdlib.checkedBigNumberify('./index.rsh:90:46:decimal', stdlib.UInt_max, 0) : v91;
            const cv41 = v92;
            const cv184 = v80;
            const cv186 = v186;
            
            v41 = cv41;
            v184 = cv184;
            v186 = cv186;
            
            continue;}
          }
        }
      }
    const v150 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:131:16:decimal', stdlib.UInt_max, 2), v28);
    const v151 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:131:41:decimal', stdlib.UInt_max, 0));
    const v152 = v151 ? v27 : v37;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v41), {
      at: './index.rsh:135:28:application',
      fs: ['at ./index.rsh:134:11:application call to [unknown function] (defined at: ./index.rsh:134:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;}
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 2254
    }, {
    count: 9,
    size: 286
    }, {
    count: 9,
    size: 286
    }, null, null, {
    count: 9,
    size: 358
    }, {
    count: 9,
    size: 326
    }, {
    count: 9,
    size: 366
    }, {
    count: 9,
    size: 358
    }, {
    count: 9,
    size: 382
    }, {
    count: 9,
    size: 366
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
dup
int 8
int 1008
substring3
store 254
dup
int 1008
int 2008
substring3
store 253
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:52:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
load 1
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:58:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
int 1
int 1
==
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
gtxn 0 Sender
concat
load 254
dup
+
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
b checkAccts
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 0 Sender
load 255
int 1
int 0
==
select
==
assert
gtxn 4 Amount
int 2
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
dup
gtxn 4 LastValid
>=
assert
dup
gtxn 5 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:59:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:59:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 32
store 251
pop
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:70:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:70:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 251
concat
load 252
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:71:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:71:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 250
pop
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:78:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:78:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 250
itob
concat
load 251
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
pop
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:79:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:79:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 251
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
dup
substring 112 120
btoi
store 250
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 249
dup
substring 8 16
btoi
store 248
pop
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:85:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:85:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:87:24:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 249
itob
load 248
itob
concat
keccak256
==
assert
load 248
load 251
==
store 247
int 1
int 1
load 247
load 248
int 1
==
&&
select
int 0
load 247
load 248
int 0
==
&&
select
dup
store 246
int 1
==
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 250
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
b checkAccts
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
load 255
load 246
int 0
==
select
==
assert
gtxn 4 Amount
int 2
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
dup
gtxn 4 LastValid
>=
assert
dup
gtxn 5 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
dup
substring 112 120
btoi
store 250
pop
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:86:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:86:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 250
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v23",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint8[1000]",
                "name": "v29",
                "type": "uint8[1000]"
              },
              {
                "internalType": "uint8[1000]",
                "name": "v30",
                "type": "uint8[1000]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v71",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v71",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v184",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v184",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v23",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint8[1000]",
                "name": "v29",
                "type": "uint8[1000]"
              },
              {
                "internalType": "uint8[1000]",
                "name": "v30",
                "type": "uint8[1000]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v71",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v71",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v184",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v184",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611374806100826000396000f3fe60806040526004361061008a5760003560e01c806370be567f1161005957806370be567f146100e4578063b32a639f146100f7578063b861cb101461010a578063dc0f106b1461011d578063e163d7c41461013057610091565b80632438df70146100965780634188e022146100ab5780636cc4a844146100be5780636dacfd6f146100d157610091565b3661009157005b600080fd5b6100a96100a4366004610fce565b610143565b005b6100a96100b9366004610f7d565b61024b565b6100a96100cc366004610f62565b610357565b6100a96100df366004610f7d565b610528565b6100a96100f2366004610fbc565b6106fe565b6100a9610105366004610faa565b6107fa565b6100a9610118366004610f62565b6108fd565b6100a961012b366004610f98565b610a00565b6100a961013e366004610fce565b610be1565b6040516101579060019083906020016112c9565b6040516020818303038152906040528051906020012060001c6000541461017d57600080fd5b60008055610190600a60408301356112f1565b431061019b57600080fd5b346020820135146101ab57600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516101da9190611270565b60405180910390a16101ea610eab565b6101f76020830183610f41565b81516001600160a01b0390911690528051602080840135918101829052825133604090910152808301805160019052514391015261023590806112f1565b60208201516040015261024781610cde565b5050565b60405161025f9060089083906020016112a0565b6040516020818303038152906040528051906020012060001c6000541461028557600080fd5b60008055610298600a60808301356112f1565b4310156102a457600080fd5b34156102af57600080fd5b336102bd6020830183610f41565b6001600160a01b0316146102d057600080fd5b6102dd6020820182610f41565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610318573d6000803e3d6000fd5b507fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b8160405161034891906111a9565b60405180910390a16000805533ff5b60405161036b9060069083906020016112dd565b6040516020818303038152906040528051906020012060001c6000541461039157600080fd5b600080556103a4600a60608301356112f1565b43106103af57600080fd5b34156103ba57600080fd5b336103c86020830183610f41565b6001600160a01b0316146103db57600080fd5b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef98160405161040a9190611141565b60405180910390a161045d6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b61046a6020830183610f41565b6001600160a01b031681526020808301359082015261048f6060830160408401610f41565b6001600160a01b03908116604083810191825260a0858101356060808701918252436080808901918252808a0135858a01908152865160086020808301919091528b518b1698820198909852968a0151938701939093529551909616948401949094525190820152915160c08301525160e0820152610100015b60408051601f1981840301815291905280516020909101206000555050565b60405161053c9060089083906020016112a0565b6040516020818303038152906040528051906020012060001c6000541461056257600080fd5b60008055610575600a60808301356112f1565b431061058057600080fd5b341561058b57600080fd5b3361059c6060830160408401610f41565b6001600160a01b0316146105af57600080fd5b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b4816040516105de919061118d565b60405180910390a16106386040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6106456020830183610f41565b6001600160a01b031681526020808301359082015261066a6060830160408401610f41565b6001600160a01b03908116604083810191825260608581013581860190815260c08088013560808089019182524360a0808b01918252808c0135858c019081528851600a6020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e08301525161010082015261012001610509565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461073b57600080fd5b600080553460208201351461074f57600080fd5b7f4fabb78683b59b972232eac9883a936436cc3a73d650f3f6c34eba87c0eb6ec88160405161077e9190611235565b60405180910390a16107b3604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a001610509565b60405161080e90600a9083906020016112b4565b6040516020818303038152906040528051906020012060001c6000541461083457600080fd5b60008055610847600a60a08301356112f1565b43101561085357600080fd5b341561085e57600080fd5b3361086f6060830160408401610f41565b6001600160a01b03161461088257600080fd5b6108926060820160408301610f41565b6040516001600160a01b03919091169060c083013580156108fc02916000818181858888f193505050501580156108cd573d6000803e3d6000fd5b507fe7cd06eed96e73ebf1eef9fa7a8d285d298aa9f119f81a14f729b421ad209bfa816040516103489190611204565b6040516109119060069083906020016112dd565b6040516020818303038152906040528051906020012060001c6000541461093757600080fd5b6000805561094a600a60608301356112f1565b43101561095657600080fd5b341561096157600080fd5b336109726060830160408401610f41565b6001600160a01b03161461098557600080fd5b6109956060820160408301610f41565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f193505050501580156109d0573d6000803e3d6000fd5b507f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e081604051610348919061115d565b604051610a1490600a9083906020016112b4565b6040516020818303038152906040528051906020012060001c60005414610a3a57600080fd5b60008080556040805160208101909152908152610a5c600a60a08401356112f1565b4310610a6757600080fd5b3415610a7257600080fd5b33610a806020840184610f41565b6001600160a01b031614610a9357600080fd5b6040805160e084013560208201526101008401359181019190915260600160408051601f198184030181529190528051602090910120606083013514610ad857600080fd5b61010082013560808301351481526040517f352ea7fc48371f0bd43d7d1ad042d3e6a673947e2deccddfd368812813abc47290610b169084906111d9565b60405180910390a1610b26610eab565b610b336020840184610f41565b81516001600160a01b0390911690528051602080850135910152610b5d6060840160408501610f41565b81516001600160a01b039091166040909101528151610b7d576000610b85565b610100830135155b610bb3578151610b96576000610ba0565b6101008301356001145b610bab576001610bae565b60015b610bb6565b60005b60208083018051929092528151439101525160c0840135604090910152610bdc81610cde565b505050565b604051610bf59060019083906020016112c9565b6040516020818303038152906040528051906020012060001c60005414610c1b57600080fd5b60008055610c2e600a60408301356112f1565b431015610c3a57600080fd5b3415610c4557600080fd5b33610c536020830183610f41565b6001600160a01b031614610c6657600080fd5b610c736020820182610f41565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610cae573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d85623013816040516103489190611270565b60208101515160011415610dd557610d306040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401908152845160409081015184168186019081528387018051850151606080890191825291518401516080808a0191825285516006988101989098528951891695880195909552945191860191909152905190941690830152915160a0820152905160c082015260e00160408051601f19818403018152919052805160209091012060005550610e3d565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528751516001600160a01b0390811690945287518501519092528651909501519091169093528301515190915261024781610e40565b50565b80516060015115610e5657805160400151610e5a565b8051515b6001600160a01b03166108fc8260000151602001516002610e7b9190611309565b6040518115909202916000818181858888f19350505050158015610ea3573d6000803e3d6000fd5b506000805533ff5b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610ef860405180606001604052806000815260200160008152602001600081525090565b905290565b80356001600160a01b0381168114610f1457600080fd5b919050565b600060c08284031215610f2a578081fd5b50919050565b600060e08284031215610f2a578081fd5b600060208284031215610f52578081fd5b610f5b82610efd565b9392505050565b600060c08284031215610f73578081fd5b610f5b8383610f19565b600060e08284031215610f8e578081fd5b610f5b8383610f30565b60006101208284031215610f2a578081fd5b60006101008284031215610f2a578081fd5b600061fa408284031215610f2a578081fd5b600060808284031215610f2a578081fd5b806000805b6103e881101561101557823560ff8116808214610fff578384fd5b8652506020948501949290920191600101610fe4565b5050505050565b6001600160a01b038061102e83610efd565b168352602082013560208401528061104860408401610efd565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b038061108383610efd565b168352602082013560208401528061109d60408401610efd565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b036110e182610efd565b16825260208181013590830152604090810135910152565b6001600160a01b038061110b83610efd565b168352602082013560208401528061112560408401610efd565b1660408401525060608181013590830152608090810135910152565b60c0810161114f82846110f9565b60a092830135919092015290565b60c0810161116b82846110f9565b60a083013580151580821461117f57600080fd5b8060a0850152505092915050565b60e0810161119b828461101c565b60c092830135919092015290565b60e081016111b7828461101c565b60c08301358015158082146111cb57600080fd5b8060c0850152505092915050565b61012081016111e88284611071565b60e083013560e083015261010080840135818401525092915050565b61010081016112138284611071565b60e083013580151580821461122757600080fd5b8060e0850152505092915050565b813581526020808301359082015261fa4081016112586040808401908501610fdf565b617d40611269818401828601610fdf565b5092915050565b6080810161127e82846110d0565b606083013580151580821461129257600080fd5b806060850152505092915050565b82815260e08101610f5b602083018461101c565b8281526101008101610f5b6020830184611071565b82815260808101610f5b60208301846110d0565b82815260c08101610f5b60208301846110f9565b6000821982111561130457611304611328565b500190565b600081600019048311821515161561132357611323611328565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220086744d16edf42db82e3bba942f5d7fcf6330af8f089ffe96194e073655a056c64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

