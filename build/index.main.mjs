// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
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

export async function Pollster(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Pollster expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pollster expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1000));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  
  
  const v27 = await ctc.creationTime();
  const v19 = stdlib.protect(ctc0, interact.aliceAddr, 'for Pollster\'s interact field aliceAddr');
  const v20 = stdlib.protect(ctc1, interact.aliceProposal, 'for Pollster\'s interact field aliceProposal');
  const v22 = stdlib.protect(ctc2, interact.deadline, 'for Pollster\'s interact field deadline');
  const v23 = stdlib.protect(ctc1, interact.projectName, 'for Pollster\'s interact field projectName');
  const v24 = stdlib.protect(ctc2, interact.wager, 'for Pollster\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv(1, 5, stdlib.checkedBigNumberify('./index.rsh:62:16:dot', stdlib.UInt_max, 0), [ctc2, ctc2, ctc1, ctc1, ctc0, ctc2], [v27, v24, v20, v23, v19, v22], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2, ctc1, ctc1, ctc0, ctc2], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:62:16:dot', stdlib.UInt_max, 0), v27]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:62:16:dot', stdlib.UInt_max, 0)]);
    const [v32, v33, v34, v35, v36] = txn1.data;
    const v38 = txn1.time;
    const v31 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v41 = stdlib.add(v27, v36);
    const v44 = stdlib.checkedBigNumberify('./index.rsh:68:60:decimal', stdlib.UInt_max, 0);
    const v45 = stdlib.checkedBigNumberify('./index.rsh:68:57:decimal', stdlib.UInt_max, 0);
    const v46 = false;
    const v151 = v38;
    const v152 = v27;
    const v153 = stdlib.checkedBigNumberify('./index.rsh:39:23:application', stdlib.UInt_max, 0);
    
    if ((() => {
      const v56 = stdlib.gt(v41, v152);
      
      return v56;})()) {
      const v115 = stdlib.sub(v41, v152);
      sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v151, v153]);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v153]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v130 = stdlib.gt(v45, v44);
      const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
      const v132 = stdlib.add(v45, v44);
      const v133 = stdlib.div(v132, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
      const v134 = stdlib.ge(v45, v133);
      if (v134) {
        const v135 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        const v136 = v135 ? v35 : v35;
        sim_r.txns.push({
          amt: v153,
          kind: 'from',
          to: v136,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.nextSt = stdlib.digest(ctc7, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
        sim_r.view = [ctc7, []];
        sim_r.isHalt = true;
        }
      else {
        const v142 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        const v143 = v142 ? v35 : v35;
        sim_r.txns.push({
          amt: v153,
          kind: 'from',
          to: v143,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.nextSt = stdlib.digest(ctc7, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
        sim_r.view = [ctc7, []];
        sim_r.isHalt = true;
        }}
    return sim_r;
    })));
  const [v32, v33, v34, v35, v36] = txn1.data;
  const v38 = txn1.time;
  const v31 = txn1.from;
  ;
  const v41 = stdlib.add(v27, v36);
  let v44 = stdlib.checkedBigNumberify('./index.rsh:68:60:decimal', stdlib.UInt_max, 0);
  let v45 = stdlib.checkedBigNumberify('./index.rsh:68:57:decimal', stdlib.UInt_max, 0);
  let v46 = false;
  let v151 = v38;
  let v152 = v27;
  let v153 = stdlib.checkedBigNumberify('./index.rsh:39:23:application', stdlib.UInt_max, 0);
  
  while ((() => {
    const v56 = stdlib.gt(v41, v152);
    
    return v56;})()) {
    const v115 = stdlib.sub(v41, v152);
    const txn2 = await (ctc.recv(4, 1, [ctc2], false, v115));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 6), [ctc2, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2], [v32, v35, v41, v44, v45, v115, v151, v153], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v151, v153]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v153]);
        const [] = txn3.data;
        const v120 = txn3.time;
        const v118 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v121 = stdlib.gt(v45, v44);
        const v122 = v121 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        
        const cv44 = v44;
        const cv45 = v45;
        const cv46 = true;
        const cv151 = v120;
        const cv152 = v151;
        const cv153 = v153;
        
        (() => {
          const v44 = cv44;
          const v45 = cv45;
          const v46 = cv46;
          const v151 = cv151;
          const v152 = cv152;
          const v153 = cv153;
          
          if ((() => {
            const v56 = stdlib.gt(v41, v152);
            
            return v56;})()) {
            const v115 = stdlib.sub(v41, v152);
            sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v151, v153]);
            sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v153]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v130 = stdlib.gt(v45, v44);
            const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
            const v132 = stdlib.add(v45, v44);
            const v133 = stdlib.div(v132, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
            const v134 = stdlib.ge(v45, v133);
            if (v134) {
              const v135 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v136 = v135 ? v35 : v35;
              sim_r.txns.push({
                amt: v153,
                kind: 'from',
                to: v136,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.view = [ctc7, []];
              sim_r.isHalt = true;
              }
            else {
              const v142 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v143 = v142 ? v35 : v35;
              sim_r.txns.push({
                amt: v153,
                kind: 'from',
                to: v143,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.view = [ctc7, []];
              sim_r.isHalt = true;
              }}})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v120 = txn3.time;
      const v118 = txn3.from;
      ;
      const v121 = stdlib.gt(v45, v44);
      const v122 = v121 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
      stdlib.protect(ctc3, await interact.seeOutcome(v122, v45, v44), {
        at: './index.rsh:123:36:application',
        fs: ['at ./index.rsh:122:19:application call to [unknown function] (defined at: ./index.rsh:122:42:function exp)', 'at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:68:54:function exp)'],
        msg: 'seeOutcome',
        who: 'Pollster'
        });
      
      const cv44 = v44;
      const cv45 = v45;
      const cv46 = true;
      const cv151 = v120;
      const cv152 = v151;
      const cv153 = v153;
      
      v44 = cv44;
      v45 = cv45;
      v46 = cv46;
      v151 = cv151;
      v152 = cv152;
      v153 = cv153;
      
      continue;
      }
    else {
      const [v94] = txn2.data;
      const v99 = txn2.time;
      const v93 = txn2.from;
      const v98 = stdlib.add(v153, v32);
      ;
      const v101 = stdlib.eq(v94, stdlib.checkedBigNumberify('./index.rsh:99:52:decimal', stdlib.UInt_max, 0));
      const v102 = [stdlib.checkedBigNumberify('./index.rsh:99:57:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:99:59:decimal', stdlib.UInt_max, 0)];
      const v103 = [stdlib.checkedBigNumberify('./index.rsh:99:65:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:99:67:decimal', stdlib.UInt_max, 1)];
      const v104 = v101 ? v102 : v103;
      const v105 = v104[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 0)];
      const v106 = v104[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 1)];
      const v107 = stdlib.add(v45, v106);
      const v108 = stdlib.add(v44, v105);
      const cv44 = v108;
      const cv45 = v107;
      const cv46 = false;
      const cv151 = v99;
      const cv152 = v151;
      const cv153 = v98;
      
      v44 = cv44;
      v45 = cv45;
      v46 = cv46;
      v151 = cv151;
      v152 = cv152;
      v153 = cv153;
      
      continue;}
    }
  const v130 = stdlib.gt(v45, v44);
  const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
  const v132 = stdlib.add(v45, v44);
  const v133 = stdlib.div(v132, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
  const v134 = stdlib.ge(v45, v133);
  if (v134) {
    const v135 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v136 = v135 ? v35 : v35;
    ;
    return;}
  else {
    const v142 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v143 = v142 ? v35 : v35;
    ;
    return;}
  
  };
export async function Voter(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Voter expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1000));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const v27 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 5, [ctc0, ctc1, ctc1, ctc2, ctc0], false, false));
  const [v32, v33, v34, v35, v36] = txn1.data;
  const v38 = txn1.time;
  const v31 = txn1.from;
  ;
  const v41 = stdlib.add(v27, v36);
  let v44 = stdlib.checkedBigNumberify('./index.rsh:68:60:decimal', stdlib.UInt_max, 0);
  let v45 = stdlib.checkedBigNumberify('./index.rsh:68:57:decimal', stdlib.UInt_max, 0);
  let v46 = false;
  let v151 = v38;
  let v152 = v27;
  let v153 = stdlib.checkedBigNumberify('./index.rsh:39:23:application', stdlib.UInt_max, 0);
  
  while ((() => {
    const v56 = stdlib.gt(v41, v152);
    
    return v56;})()) {
    const v115 = stdlib.sub(v41, v152);
    let v77;
    const v78 = stdlib.protect(ctc3, await interact.isQuit(), {
      at: './index.rsh:78:45:application',
      fs: ['at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:77:16:function exp)', 'at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:68:54:function exp)'],
      msg: 'isQuit',
      who: 'Voter'
      });
    let v81;
    if (v78) {
      v81 = false;
      }
    else {
      const v80 = stdlib.protect(ctc3, await interact.acceptWager(v32, v33, v34), {
        at: './index.rsh:79:50:application',
        fs: ['at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:77:16:function exp)', 'at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:68:54:function exp)'],
        msg: 'acceptWager',
        who: 'Voter'
        });
      v81 = v80;
      }
    const v82 = v46 ? false : true;
    const v83 = v81 ? v82 : false;
    if (v83) {
      const v84 = stdlib.protect(ctc0, await interact.getVote(v33, v34, v46), {
        at: './index.rsh:85:58:application',
        fs: ['at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:77:16:function exp)', 'at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:68:54:function exp)'],
        msg: 'getVote',
        who: 'Voter'
        });
      const v87 = {
        msg: v84,
        when: true
        };
      v77 = v87;
      }
    else {
      const v88 = {
        msg: stdlib.checkedBigNumberify('./index.rsh:89:44:decimal', stdlib.UInt_max, 4),
        when: false
        };
      v77 = v88;
      }
    const v89 = v77.when;
    const v90 = v77.msg;
    
    const txn2 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:68:54:dot', stdlib.UInt_max, 6), [ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0], [v32, v35, v41, v44, v45, v115, v151, v153, v90], [v32, []], [ctc0], v89, false, v115, (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:68:54:dot', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v151, v153]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:68:54:dot', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v153]);
      const [v94] = txn2.data;
      const v99 = txn2.time;
      const v93 = txn2.from;
      
      const v98 = stdlib.add(v153, v32);
      sim_r.txns.push({
        amt: v32,
        kind: 'to',
        tok: undefined
        });
      const v101 = stdlib.eq(v94, stdlib.checkedBigNumberify('./index.rsh:99:52:decimal', stdlib.UInt_max, 0));
      const v102 = [stdlib.checkedBigNumberify('./index.rsh:99:57:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:99:59:decimal', stdlib.UInt_max, 0)];
      const v103 = [stdlib.checkedBigNumberify('./index.rsh:99:65:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:99:67:decimal', stdlib.UInt_max, 1)];
      const v104 = v101 ? v102 : v103;
      const v105 = v104[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 0)];
      const v106 = v104[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 1)];
      const v107 = stdlib.add(v45, v106);
      const v108 = stdlib.add(v44, v105);
      
      const cv44 = v108;
      const cv45 = v107;
      const cv46 = false;
      const cv151 = v99;
      const cv152 = v151;
      const cv153 = v98;
      
      (() => {
        const v44 = cv44;
        const v45 = cv45;
        const v46 = cv46;
        const v151 = cv151;
        const v152 = cv152;
        const v153 = cv153;
        
        if ((() => {
          const v56 = stdlib.gt(v41, v152);
          
          return v56;})()) {
          const v115 = stdlib.sub(v41, v152);
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v151, v153]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v153]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v130 = stdlib.gt(v45, v44);
          const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
          const v132 = stdlib.add(v45, v44);
          const v133 = stdlib.div(v132, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
          const v134 = stdlib.ge(v45, v133);
          if (v134) {
            const v135 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v136 = v135 ? v35 : v35;
            sim_r.txns.push({
              amt: v153,
              kind: 'from',
              to: v136,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }
          else {
            const v142 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v143 = v142 ? v35 : v35;
            sim_r.txns.push({
              amt: v153,
              kind: 'from',
              to: v143,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }}})();
      return sim_r;
      })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 6), [ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0], [v32, v35, v41, v44, v45, v115, v151, v153], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v151, v153]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v153]);
        const [] = txn3.data;
        const v120 = txn3.time;
        const v118 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v121 = stdlib.gt(v45, v44);
        const v122 = v121 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        
        const cv44 = v44;
        const cv45 = v45;
        const cv46 = true;
        const cv151 = v120;
        const cv152 = v151;
        const cv153 = v153;
        
        (() => {
          const v44 = cv44;
          const v45 = cv45;
          const v46 = cv46;
          const v151 = cv151;
          const v152 = cv152;
          const v153 = cv153;
          
          if ((() => {
            const v56 = stdlib.gt(v41, v152);
            
            return v56;})()) {
            const v115 = stdlib.sub(v41, v152);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v151, v153]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v41, v44, v45, v115, v153]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:54:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v130 = stdlib.gt(v45, v44);
            const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
            const v132 = stdlib.add(v45, v44);
            const v133 = stdlib.div(v132, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
            const v134 = stdlib.ge(v45, v133);
            if (v134) {
              const v135 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v136 = v135 ? v35 : v35;
              sim_r.txns.push({
                amt: v153,
                kind: 'from',
                to: v136,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.view = [ctc8, []];
              sim_r.isHalt = true;
              }
            else {
              const v142 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v143 = v142 ? v35 : v35;
              sim_r.txns.push({
                amt: v153,
                kind: 'from',
                to: v143,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.view = [ctc8, []];
              sim_r.isHalt = true;
              }}})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v120 = txn3.time;
      const v118 = txn3.from;
      ;
      const v121 = stdlib.gt(v45, v44);
      const v122 = v121 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
      stdlib.protect(ctc4, await interact.seeOutcome(v122, v45, v44), {
        at: './index.rsh:123:36:application',
        fs: ['at ./index.rsh:122:19:application call to [unknown function] (defined at: ./index.rsh:122:42:function exp)', 'at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:68:54:function exp)'],
        msg: 'seeOutcome',
        who: 'Voter'
        });
      
      const cv44 = v44;
      const cv45 = v45;
      const cv46 = true;
      const cv151 = v120;
      const cv152 = v151;
      const cv153 = v153;
      
      v44 = cv44;
      v45 = cv45;
      v46 = cv46;
      v151 = cv151;
      v152 = cv152;
      v153 = cv153;
      
      continue;
      }
    else {
      const [v94] = txn2.data;
      const v99 = txn2.time;
      const v93 = txn2.from;
      const v98 = stdlib.add(v153, v32);
      ;
      const v101 = stdlib.eq(v94, stdlib.checkedBigNumberify('./index.rsh:99:52:decimal', stdlib.UInt_max, 0));
      const v102 = [stdlib.checkedBigNumberify('./index.rsh:99:57:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:99:59:decimal', stdlib.UInt_max, 0)];
      const v103 = [stdlib.checkedBigNumberify('./index.rsh:99:65:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:99:67:decimal', stdlib.UInt_max, 1)];
      const v104 = v101 ? v102 : v103;
      const v105 = v104[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 0)];
      const v106 = v104[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 1)];
      const v107 = stdlib.add(v45, v106);
      const v108 = stdlib.add(v44, v105);
      stdlib.protect(ctc4, await interact.voterWas(v93, v107, v108), {
        at: './index.rsh:105:33:application',
        fs: ['at ./index.rsh:103:23:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)', 'at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:68:54:function exp)'],
        msg: 'voterWas',
        who: 'Voter'
        });
      stdlib.protect(ctc4, await interact.log(v107), {
        at: './index.rsh:106:28:application',
        fs: ['at ./index.rsh:103:23:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)', 'at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:68:54:function exp)'],
        msg: 'log',
        who: 'Voter'
        });
      stdlib.protect(ctc4, await interact.log(v108), {
        at: './index.rsh:107:28:application',
        fs: ['at ./index.rsh:103:23:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)', 'at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:68:54:function exp)'],
        msg: 'log',
        who: 'Voter'
        });
      
      const cv44 = v108;
      const cv45 = v107;
      const cv46 = false;
      const cv151 = v99;
      const cv152 = v151;
      const cv153 = v98;
      
      v44 = cv44;
      v45 = cv45;
      v46 = cv46;
      v151 = cv151;
      v152 = cv152;
      v153 = cv153;
      
      continue;}
    }
  const v130 = stdlib.gt(v45, v44);
  const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
  const v132 = stdlib.add(v45, v44);
  const v133 = stdlib.div(v132, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
  const v134 = stdlib.ge(v45, v133);
  if (v134) {
    const v135 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v136 = v135 ? v35 : v35;
    ;
    return;}
  else {
    const v142 = stdlib.eq(v131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v143 = v142 ? v35 : v35;
    ;
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
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
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
    size: 2294
    }, null, null, {
    count: 9,
    size: 334
    }, {
    count: 9,
    size: 326
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
dup
int 2008
int 2040
substring3
store 252
dup
int 2040
int 2048
substring3
btoi
store 251
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
// "./index.rsh:62:16:dot"
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
load 4
btoi
load 251
+
dup
store 250
load 4
btoi
>
bz l0
load 250
load 4
btoi
-
store 249
byte base64()
load 1
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
itob
concat
load 252
concat
load 250
itob
concat
int 0
itob
concat
int 0
itob
concat
load 249
itob
concat
int 0
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
b checkAccts
l0:
int 0
int 0
int 2
/
>=
bz l1
byte base64()
load 1
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
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
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
b checkAccts
l1:
byte base64()
load 1
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
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
int 5
==
assert
load 3
btoi
gtxn 4 Fee
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
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
dup
substring 64 72
btoi
store 250
dup
substring 72 80
btoi
store 249
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 248
pop
// Handler 4
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
// compute state in HM_Check 5
int 5
itob
load 255
itob
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
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
load 249
load 255
+
store 247
// "CheckPay"
// "./index.rsh:68:54:dot"
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
int 0
itob
int 1
itob
concat
int 1
itob
int 0
itob
concat
load 248
int 0
==
select
store 246
load 251
load 246
substring 8 16
btoi
+
store 245
load 252
load 246
substring 0 8
btoi
+
store 244
load 253
load 4
btoi
>
bz l0
load 253
load 4
btoi
-
store 243
byte base64()
load 1
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
itob
concat
load 254
concat
load 253
itob
concat
load 244
itob
concat
load 245
itob
concat
load 243
itob
concat
load 247
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
load 243
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
int 0
int 1
load 245
load 244
>
select
store 243
load 245
dup
load 244
+
int 2
/
>=
bz l1
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
dup
load 243
int 1
==
select
==
assert
gtxn 4 Amount
load 247
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
load 250
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
b checkAccts
l1:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
dup
load 243
int 1
==
select
==
assert
gtxn 4 Amount
load 247
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
load 250
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
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
dup
substring 64 72
btoi
store 250
dup
substring 72 80
btoi
store 249
pop
// Handler 5
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
// compute state in HM_Check 5
int 5
itob
load 255
itob
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
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
// "./index.rsh:118:23:dot"
// "[at ./index.rsh:68:54:application call to [unknown function] (defined at: ./index.rsh:68:54:function exp)]"
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
load 253
load 4
btoi
>
bz l0
load 253
load 4
btoi
-
store 248
byte base64()
load 1
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
itob
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 248
itob
concat
load 249
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
load 248
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
pop
b checkAccts
l0:
int 0
int 1
load 251
load 252
>
select
store 248
load 251
dup
load 252
+
int 2
/
>=
bz l1
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
dup
load 248
int 1
==
select
==
assert
gtxn 4 Amount
load 249
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
load 250
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
b checkAccts
l1:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
dup
load 248
int 1
==
select
==
assert
gtxn 4 Amount
load 249
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
load 250
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
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
                "name": "v27",
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
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint8[1000]",
                "name": "v33",
                "type": "uint8[1000]"
              },
              {
                "internalType": "uint8[1000]",
                "name": "v34",
                "type": "uint8[1000]"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v36",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v41",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v45",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v151",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v94",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
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
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v41",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v45",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v151",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
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
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
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
                "name": "v27",
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
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint8[1000]",
                "name": "v33",
                "type": "uint8[1000]"
              },
              {
                "internalType": "uint8[1000]",
                "name": "v34",
                "type": "uint8[1000]"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v36",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v41",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v45",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v151",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v94",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
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
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v41",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v45",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v151",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610a85806100826000396000f3fe6080604052600436106100385760003560e01c80630a7c9d3f146100445780630e9f254e14610059578063b4fc76ca1461006c57600080fd5b3661003f57005b600080fd5b610057610052366004610855565b61007f565b005b610057610067366004610872565b6101b5565b61005761007a366004610855565b6102ca565b6040516100bb906100979060059084906020016109d3565b6040516020818303038152906040528051906020012060001c60005414600d610479565b600080556100de6100d460a083013560c08401356109e8565b431015600e610479565b6100ea3415600c610479565b7f872072131fd7b1c79ad2a6f33351aa632b38432b26589e0e7768c8bc9de697af81604051610119919061093e565b60405180910390a1610129610733565b80518235905261013f6040830160208401610833565b81516001600160a01b0390911660209182015281516040808501359181019190915281830180516060808701359091528151608080880135919095015281516001930192909252805143920191909152805160c08501359201919091525160e083013560a0909101526101b18161049e565b5050565b60408051600060208201528235918101919091526101f4906060016040516020818303038152906040528051906020012060001c600054146008610479565b6000805561020434156007610479565b7e6ff0c4163c4a48f6550d1b6c76d796f181acebd170ac30e4b39b3ee8c20bd6816040516102329190610971565b60405180910390a1610242610733565b80516020830135905261025d61fa60830161fa408401610833565b81516001600160a01b0390911660209091015261028061fa6083013583356109e8565b8151604090810191909152602080830180516000908190528151909201829052805190920181905281514360609091015281518435608090910152905160a001526101b18161049e565b604051610306906102e29060059084906020016109d3565b6040516020818303038152906040528051906020012060001c60005414600a610479565b6000805561031261079c565b61033061032760a084013560c08501356109e8565b4310600b610479565b61033e348335146009610479565b805160019081905281516000602091820181905281840180519190915251015261010082013515610373578060200151610376565b80515b81604001819052507fc57f81a34bff8396b90f6fe3e88b9da65dd94aa749e69fc058ae6be376bd5546826040516103ad9190610920565b60405180910390a16103bd610733565b8051833590526103d36040840160208501610833565b81516001600160a01b03909116602090910152805160408085013591810191909152820151516104079060608501356109e8565b60208083015191909152604083015101516104269060808501356109e8565b6020808301805190910191909152805160006040909101528051436060909101525160c0840135608090910152610462833560e08501356109e8565b602082015160a001526104748161049e565b505050565b816101b15760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151608001518251604001511115610610576020820151608001518251604001516104db9190610a22565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810191909152825151815282516020908101516001600160a01b03168183015283516040908101518184015281850180515160608086019190915281518401516080860152855160a08087019190915282519091015160c08601529051015160e0840152516105f0916005918491016000610120820190508382528251602083015260018060a01b0360208401511660408301526040830151606083015260608301516080830152608083015160a083015260a083015160c083015260c083015160e083015260e08301516101008301529392505050565b60408051601f198184030181529190528051602090910120600055505050565b6040805160c0810182526000818301818152606083018281526080840183815260a080860185815284875260208088018790528a518101516001600160a01b0316909552898501805151909452835185015190925291519091015190528351808201855291825282519081015193015191926104749284929110610695576000610698565b60015b8152815160208101516040909101516002916106b3916109e8565b6106bd9190610a00565b825160400151106107225780516001146106d9578151516106dd565b8151515b8251606001516040516001600160a01b03929092169181156108fc0291906000818181858888f1935050505015801561071a573d6000803e3d6000fd5b506000805533ff5b80516001146106d9578151516106dd565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016107976040518060c0016040528060008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b905290565b6040805160a081019091526000606082018181526080830191909152819081526020016107dc604051806040016040528060008152602001600081525090565b8152602001610797604051806040016040528060008152602001600081525090565b80356001600160a01b038116811461081557600080fd5b919050565b6000610120828403121561082d57600080fd5b50919050565b60006020828403121561084557600080fd5b61084e826107fe565b9392505050565b6000610120828403121561086857600080fd5b61084e838361081a565b600061fa80828403121561082d57600080fd5b806000805b6103e88110156108bb57823560ff81168082146108a5578384fd5b865250602094850194929092019160010161088a565b5050505050565b803582526001600160a01b036108da602083016107fe565b16602083015260408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b610120810161092f82846108c2565b61010092830135919092015290565b610120810161094d82846108c2565b6101008084013580151580821461096357600080fd5b808386015250505092915050565b813581526020808301359082015261fa8081016109946040808401908501610885565b617d406109a5818401828601610885565b5061fa406001600160a01b036109bc8583016107fe565b169083015261fa6092830135929091019190915290565b828152610120810161084e60208301846108c2565b600082198211156109fb576109fb610a39565b500190565b600082610a1d57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015610a3457610a34610a39565b500390565b634e487b7160e01b600052601160045260246000fdfea26469706673582212201aeea413271acb123eaba04e625df64247c918487e457651dbe84dbf7c9408f464736f6c63430008050033`,
  BytecodeLen: 2823,
  Which: `oD`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

