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
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  
  
  const v27 = await ctc.creationTime();
  const v19 = stdlib.protect(ctc0, interact.aliceAddr, 'for Pollster\'s interact field aliceAddr');
  const v20 = stdlib.protect(ctc1, interact.aliceProposal, 'for Pollster\'s interact field aliceProposal');
  const v21 = stdlib.protect(ctc0, interact.bobAddr, 'for Pollster\'s interact field bobAddr');
  const v22 = stdlib.protect(ctc1, interact.bobProposal, 'for Pollster\'s interact field bobProposal');
  const v23 = stdlib.protect(ctc2, interact.deadline, 'for Pollster\'s interact field deadline');
  const v24 = stdlib.protect(ctc2, interact.wager, 'for Pollster\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv(1, 6, stdlib.checkedBigNumberify('./index.rsh:61:16:dot', stdlib.UInt_max, 0), [ctc2, ctc2, ctc1, ctc1, ctc0, ctc0, ctc2], [v27, v24, v20, v22, v19, v21, v23], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2, ctc1, ctc1, ctc0, ctc0, ctc2], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:61:16:dot', stdlib.UInt_max, 0), v27]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:61:16:dot', stdlib.UInt_max, 0)]);
    const [v32, v33, v34, v35, v36, v37] = txn1.data;
    const v39 = txn1.time;
    const v31 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v42 = stdlib.add(v27, v37);
    const v45 = stdlib.checkedBigNumberify('./index.rsh:67:54:decimal', stdlib.UInt_max, 0);
    const v46 = stdlib.checkedBigNumberify('./index.rsh:67:57:decimal', stdlib.UInt_max, 0);
    const v47 = false;
    const v157 = v39;
    const v158 = v27;
    const v159 = stdlib.checkedBigNumberify('./index.rsh:39:23:application', stdlib.UInt_max, 0);
    
    if ((() => {
      const v57 = stdlib.gt(v42, v158);
      
      return v57;})()) {
      const v116 = stdlib.sub(v42, v158);
      sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v157, v159]);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v159]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v133 = stdlib.eq(v45, v46);
      const v134 = stdlib.gt(v45, v46);
      const v135 = v134 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v136 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v135;
      if (v133) {
        const v138 = stdlib.mul(v32, v45);
        sim_r.txns.push({
          amt: v138,
          kind: 'from',
          to: v35,
          tok: undefined
          });
        const v143 = stdlib.mul(v32, v46);
        sim_r.txns.push({
          amt: v143,
          kind: 'from',
          to: v36,
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
        const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v149 = v148 ? v35 : v36;
        sim_r.txns.push({
          amt: v159,
          kind: 'from',
          to: v149,
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
  const [v32, v33, v34, v35, v36, v37] = txn1.data;
  const v39 = txn1.time;
  const v31 = txn1.from;
  ;
  const v42 = stdlib.add(v27, v37);
  let v45 = stdlib.checkedBigNumberify('./index.rsh:67:54:decimal', stdlib.UInt_max, 0);
  let v46 = stdlib.checkedBigNumberify('./index.rsh:67:57:decimal', stdlib.UInt_max, 0);
  let v47 = false;
  let v157 = v39;
  let v158 = v27;
  let v159 = stdlib.checkedBigNumberify('./index.rsh:39:23:application', stdlib.UInt_max, 0);
  
  while ((() => {
    const v57 = stdlib.gt(v42, v158);
    
    return v57;})()) {
    const v116 = stdlib.sub(v42, v158);
    const txn2 = await (ctc.recv(4, 1, [ctc2], false, v116));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 7), [ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2], [v32, v35, v36, v42, v45, v46, v116, v157, v159], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v157, v159]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v159]);
        const [] = txn3.data;
        const v121 = txn3.time;
        const v119 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v122 = stdlib.eq(v45, v46);
        const v123 = stdlib.gt(v45, v46);
        const v124 = v123 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
        const v125 = v122 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v124;
        
        const cv45 = v45;
        const cv46 = v46;
        const cv47 = true;
        const cv157 = v121;
        const cv158 = v157;
        const cv159 = v159;
        
        (() => {
          const v45 = cv45;
          const v46 = cv46;
          const v47 = cv47;
          const v157 = cv157;
          const v158 = cv158;
          const v159 = cv159;
          
          if ((() => {
            const v57 = stdlib.gt(v42, v158);
            
            return v57;})()) {
            const v116 = stdlib.sub(v42, v158);
            sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v157, v159]);
            sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v159]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v133 = stdlib.eq(v45, v46);
            const v134 = stdlib.gt(v45, v46);
            const v135 = v134 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
            const v136 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v135;
            if (v133) {
              const v138 = stdlib.mul(v32, v45);
              sim_r.txns.push({
                amt: v138,
                kind: 'from',
                to: v35,
                tok: undefined
                });
              const v143 = stdlib.mul(v32, v46);
              sim_r.txns.push({
                amt: v143,
                kind: 'from',
                to: v36,
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
              const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              const v149 = v148 ? v35 : v36;
              sim_r.txns.push({
                amt: v159,
                kind: 'from',
                to: v149,
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
      const v121 = txn3.time;
      const v119 = txn3.from;
      ;
      const v122 = stdlib.eq(v45, v46);
      const v123 = stdlib.gt(v45, v46);
      const v124 = v123 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v125 = v122 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v124;
      stdlib.protect(ctc3, await interact.seeOutcome(v125, v45, v46), {
        at: './index.rsh:126:38:application',
        fs: ['at ./index.rsh:125:28:application call to [unknown function] (defined at: ./index.rsh:125:32:function exp)', 'at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)'],
        msg: 'seeOutcome',
        who: 'Pollster'
        });
      
      const cv45 = v45;
      const cv46 = v46;
      const cv47 = true;
      const cv157 = v121;
      const cv158 = v157;
      const cv159 = v159;
      
      v45 = cv45;
      v46 = cv46;
      v47 = cv47;
      v157 = cv157;
      v158 = cv158;
      v159 = cv159;
      
      continue;
      }
    else {
      const [v95] = txn2.data;
      const v100 = txn2.time;
      const v94 = txn2.from;
      const v99 = stdlib.add(v159, v32);
      ;
      const v102 = stdlib.eq(v95, stdlib.checkedBigNumberify('./index.rsh:99:49:decimal', stdlib.UInt_max, 0));
      const v103 = [stdlib.checkedBigNumberify('./index.rsh:99:54:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:99:56:decimal', stdlib.UInt_max, 0)];
      const v104 = [stdlib.checkedBigNumberify('./index.rsh:99:62:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:99:64:decimal', stdlib.UInt_max, 1)];
      const v105 = v102 ? v103 : v104;
      const v106 = v105[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 0)];
      const v107 = v105[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 1)];
      const v108 = stdlib.add(v45, v106);
      const v109 = stdlib.add(v46, v107);
      const cv45 = v108;
      const cv46 = v109;
      const cv47 = false;
      const cv157 = v100;
      const cv158 = v157;
      const cv159 = v99;
      
      v45 = cv45;
      v46 = cv46;
      v47 = cv47;
      v157 = cv157;
      v158 = cv158;
      v159 = cv159;
      
      continue;}
    }
  const v133 = stdlib.eq(v45, v46);
  const v134 = stdlib.gt(v45, v46);
  const v135 = v134 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
  const v136 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v135;
  if (v133) {
    const v138 = stdlib.mul(v32, v45);
    ;
    const v143 = stdlib.mul(v32, v46);
    ;
    return;}
  else {
    const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    const v149 = v148 ? v35 : v36;
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
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const v27 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 6, [ctc0, ctc1, ctc1, ctc2, ctc2, ctc0], false, false));
  const [v32, v33, v34, v35, v36, v37] = txn1.data;
  const v39 = txn1.time;
  const v31 = txn1.from;
  ;
  const v42 = stdlib.add(v27, v37);
  let v45 = stdlib.checkedBigNumberify('./index.rsh:67:54:decimal', stdlib.UInt_max, 0);
  let v46 = stdlib.checkedBigNumberify('./index.rsh:67:57:decimal', stdlib.UInt_max, 0);
  let v47 = false;
  let v157 = v39;
  let v158 = v27;
  let v159 = stdlib.checkedBigNumberify('./index.rsh:39:23:application', stdlib.UInt_max, 0);
  
  while ((() => {
    const v57 = stdlib.gt(v42, v158);
    
    return v57;})()) {
    const v116 = stdlib.sub(v42, v158);
    let v78;
    const v79 = stdlib.protect(ctc3, await interact.isQuit(), {
      at: './index.rsh:78:45:application',
      fs: ['at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:76:16:function exp)', 'at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)'],
      msg: 'isQuit',
      who: 'Voter'
      });
    let v82;
    if (v79) {
      v82 = false;
      }
    else {
      const v81 = stdlib.protect(ctc3, await interact.acceptWager(v32, v33, v34), {
        at: './index.rsh:79:49:application',
        fs: ['at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:76:16:function exp)', 'at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)'],
        msg: 'acceptWager',
        who: 'Voter'
        });
      v82 = v81;
      }
    const v83 = v47 ? false : true;
    const v84 = v82 ? v83 : false;
    if (v84) {
      const v85 = stdlib.protect(ctc0, await interact.getVote(v33, v34, v47), {
        at: './index.rsh:85:58:application',
        fs: ['at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:76:16:function exp)', 'at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)'],
        msg: 'getVote',
        who: 'Voter'
        });
      const v88 = {
        msg: v85,
        when: true
        };
      v78 = v88;
      }
    else {
      const v89 = {
        msg: stdlib.checkedBigNumberify('./index.rsh:89:44:decimal', stdlib.UInt_max, 4),
        when: false
        };
      v78 = v89;
      }
    const v90 = v78.when;
    const v91 = v78.msg;
    
    const txn2 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:67:51:dot', stdlib.UInt_max, 7), [ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0], [v32, v35, v36, v42, v45, v46, v116, v157, v159, v91], [v32, []], [ctc0], v90, false, v116, (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:67:51:dot', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v157, v159]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:67:51:dot', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v159]);
      const [v95] = txn2.data;
      const v100 = txn2.time;
      const v94 = txn2.from;
      
      const v99 = stdlib.add(v159, v32);
      sim_r.txns.push({
        amt: v32,
        kind: 'to',
        tok: undefined
        });
      const v102 = stdlib.eq(v95, stdlib.checkedBigNumberify('./index.rsh:99:49:decimal', stdlib.UInt_max, 0));
      const v103 = [stdlib.checkedBigNumberify('./index.rsh:99:54:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:99:56:decimal', stdlib.UInt_max, 0)];
      const v104 = [stdlib.checkedBigNumberify('./index.rsh:99:62:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:99:64:decimal', stdlib.UInt_max, 1)];
      const v105 = v102 ? v103 : v104;
      const v106 = v105[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 0)];
      const v107 = v105[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 1)];
      const v108 = stdlib.add(v45, v106);
      const v109 = stdlib.add(v46, v107);
      
      const cv45 = v108;
      const cv46 = v109;
      const cv47 = false;
      const cv157 = v100;
      const cv158 = v157;
      const cv159 = v99;
      
      (() => {
        const v45 = cv45;
        const v46 = cv46;
        const v47 = cv47;
        const v157 = cv157;
        const v158 = cv158;
        const v159 = cv159;
        
        if ((() => {
          const v57 = stdlib.gt(v42, v158);
          
          return v57;})()) {
          const v116 = stdlib.sub(v42, v158);
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v157, v159]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v159]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v133 = stdlib.eq(v45, v46);
          const v134 = stdlib.gt(v45, v46);
          const v135 = v134 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          const v136 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v135;
          if (v133) {
            const v138 = stdlib.mul(v32, v45);
            sim_r.txns.push({
              amt: v138,
              kind: 'from',
              to: v35,
              tok: undefined
              });
            const v143 = stdlib.mul(v32, v46);
            sim_r.txns.push({
              amt: v143,
              kind: 'from',
              to: v36,
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
            const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            const v149 = v148 ? v35 : v36;
            sim_r.txns.push({
              amt: v159,
              kind: 'from',
              to: v149,
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
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 7), [ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0], [v32, v35, v36, v42, v45, v46, v116, v157, v159], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v157, v159]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:118:23:dot', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v159]);
        const [] = txn3.data;
        const v121 = txn3.time;
        const v119 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v122 = stdlib.eq(v45, v46);
        const v123 = stdlib.gt(v45, v46);
        const v124 = v123 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
        const v125 = v122 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v124;
        
        const cv45 = v45;
        const cv46 = v46;
        const cv47 = true;
        const cv157 = v121;
        const cv158 = v157;
        const cv159 = v159;
        
        (() => {
          const v45 = cv45;
          const v46 = cv46;
          const v47 = cv47;
          const v157 = cv157;
          const v158 = cv158;
          const v159 = cv159;
          
          if ((() => {
            const v57 = stdlib.gt(v42, v158);
            
            return v57;})()) {
            const v116 = stdlib.sub(v42, v158);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v157, v159]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v42, v45, v46, v116, v159]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:67:51:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v133 = stdlib.eq(v45, v46);
            const v134 = stdlib.gt(v45, v46);
            const v135 = v134 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
            const v136 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v135;
            if (v133) {
              const v138 = stdlib.mul(v32, v45);
              sim_r.txns.push({
                amt: v138,
                kind: 'from',
                to: v35,
                tok: undefined
                });
              const v143 = stdlib.mul(v32, v46);
              sim_r.txns.push({
                amt: v143,
                kind: 'from',
                to: v36,
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
              const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              const v149 = v148 ? v35 : v36;
              sim_r.txns.push({
                amt: v159,
                kind: 'from',
                to: v149,
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
      const v121 = txn3.time;
      const v119 = txn3.from;
      ;
      const v122 = stdlib.eq(v45, v46);
      const v123 = stdlib.gt(v45, v46);
      const v124 = v123 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v125 = v122 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v124;
      stdlib.protect(ctc4, await interact.seeOutcome(v125, v45, v46), {
        at: './index.rsh:122:36:application',
        fs: ['at ./index.rsh:121:25:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)', 'at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)'],
        msg: 'seeOutcome',
        who: 'Voter'
        });
      
      const cv45 = v45;
      const cv46 = v46;
      const cv47 = true;
      const cv157 = v121;
      const cv158 = v157;
      const cv159 = v159;
      
      v45 = cv45;
      v46 = cv46;
      v47 = cv47;
      v157 = cv157;
      v158 = cv158;
      v159 = cv159;
      
      continue;
      }
    else {
      const [v95] = txn2.data;
      const v100 = txn2.time;
      const v94 = txn2.from;
      const v99 = stdlib.add(v159, v32);
      ;
      const v102 = stdlib.eq(v95, stdlib.checkedBigNumberify('./index.rsh:99:49:decimal', stdlib.UInt_max, 0));
      const v103 = [stdlib.checkedBigNumberify('./index.rsh:99:54:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:99:56:decimal', stdlib.UInt_max, 0)];
      const v104 = [stdlib.checkedBigNumberify('./index.rsh:99:62:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:99:64:decimal', stdlib.UInt_max, 1)];
      const v105 = v102 ? v103 : v104;
      const v106 = v105[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 0)];
      const v107 = v105[stdlib.checkedBigNumberify('./index.rsh:99:19:array', stdlib.UInt_max, 1)];
      const v108 = stdlib.add(v45, v106);
      const v109 = stdlib.add(v46, v107);
      stdlib.protect(ctc4, await interact.voterWas(v94, v108, v109), {
        at: './index.rsh:105:33:application',
        fs: ['at ./index.rsh:103:23:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)', 'at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)'],
        msg: 'voterWas',
        who: 'Voter'
        });
      stdlib.protect(ctc4, await interact.log(v108), {
        at: './index.rsh:106:28:application',
        fs: ['at ./index.rsh:103:23:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)', 'at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)'],
        msg: 'log',
        who: 'Voter'
        });
      stdlib.protect(ctc4, await interact.log(v109), {
        at: './index.rsh:107:28:application',
        fs: ['at ./index.rsh:103:23:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)', 'at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)'],
        msg: 'log',
        who: 'Voter'
        });
      
      const cv45 = v108;
      const cv46 = v109;
      const cv47 = false;
      const cv157 = v100;
      const cv158 = v157;
      const cv159 = v99;
      
      v45 = cv45;
      v46 = cv46;
      v47 = cv47;
      v157 = cv157;
      v158 = cv158;
      v159 = cv159;
      
      continue;}
    }
  const v133 = stdlib.eq(v45, v46);
  const v134 = stdlib.gt(v45, v46);
  const v135 = v134 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
  const v136 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v135;
  if (v133) {
    const v138 = stdlib.mul(v32, v45);
    ;
    const v143 = stdlib.mul(v32, v46);
    ;
    return;}
  else {
    const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    const v149 = v148 ? v35 : v36;
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
    size: 2326
    }, null, null, {
    count: 9,
    size: 366
    }, {
    count: 9,
    size: 358
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
int 2072
substring3
store 251
dup
int 2072
int 2080
substring3
btoi
store 250
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
// "./index.rsh:61:16:dot"
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
load 250
+
dup
store 249
load 4
btoi
>
bz l0
load 249
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
load 252
concat
load 251
concat
load 249
itob
concat
int 0
itob
concat
int 0
itob
concat
load 248
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
==
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
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 247
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
load 248
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
load 248
load 255
+
store 246
// "CheckPay"
// "./index.rsh:67:51:dot"
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
load 247
int 0
==
select
store 245
load 251
load 245
substring 0 8
btoi
+
store 244
load 250
load 245
substring 8 16
btoi
+
store 243
load 252
load 4
btoi
>
bz l0
load 252
load 4
btoi
-
store 242
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
concat
load 252
itob
concat
load 244
itob
concat
load 243
itob
concat
load 242
itob
concat
load 246
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
load 242
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
load 244
load 243
==
dup
store 242
bz l1
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
==
assert
gtxn 4 Amount
load 255
load 244
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 253
==
assert
gtxn 5 Amount
load 255
load 243
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
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
int 7
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
load 4
btoi
load 249
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
dup
gtxn 6 LastValid
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
load 253
load 254
int 1
int 0
load 244
load 243
>
select
int 3
load 242
select
int 0
==
select
==
assert
gtxn 4 Amount
load 246
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
load 249
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
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
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
load 248
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
// "[at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)]"
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
load 252
load 4
btoi
>
bz l0
load 252
load 4
btoi
-
store 247
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
load 247
itob
concat
load 248
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
load 247
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
load 251
load 250
==
dup
store 247
bz l1
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
==
assert
gtxn 4 Amount
load 255
load 251
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 253
==
assert
gtxn 5 Amount
load 255
load 250
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
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
int 7
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
load 4
btoi
load 249
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
dup
gtxn 6 FirstValid
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
load 253
load 254
int 1
int 0
load 251
load 250
>
select
int 3
load 247
select
int 0
==
select
==
assert
gtxn 4 Amount
load 248
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
load 249
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
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v37",
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
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v45",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v159",
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
                "name": "v95",
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
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v45",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v159",
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
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v37",
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
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v45",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v159",
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
                "name": "v95",
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
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v45",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v159",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610c01806100826000396000f3fe6080604052600436106100385760003560e01c80630e8cf81f146100445780630eca3944146100595780631709bfe61461006c57600080fd5b3661003f57005b600080fd5b6100576100523660046109bb565b61007f565b005b61005761006736600461099e565b6101be565b61005761007a36600461099e565b610313565b60408051600060208201528235918101919091526100be906060016040516020818303038152906040528051906020012060001c6000541460086104e2565b600080556100ce341560076104e2565b7f4aa569d9a4ded68c8b39431bcbd3bb34f89f6a13f67468d4d0f77f1e8e0fb616816040516100fd9190610ad3565b60405180910390a161010d610875565b80516020830135905261012861fa60830161fa40840161097c565b81516001600160a01b0390911660209091015261014d61fa80830161fa60840161097c565b81516001600160a01b0390911660409091015261017061fa808301358335610b67565b8151606090810191909152602080830180516000908190528151909201829052805160400182905280514393019290925281518435608090910152905160a001526101ba81610507565b5050565b6040516101fa906101d6906005908490602001610b52565b6040516020818303038152906040528051906020012060001c60005414600d6104e2565b6000805561021d61021360c083013560e0840135610b67565b431015600e6104e2565b6102293415600c6104e2565b7f7b1c355d81488551f705476666c317f790ca4aae966386a8cfac027ffdfbe8d5816040516102589190610aa0565b60405180910390a1610268610875565b80518235905261027e604083016020840161097c565b81516001600160a01b039091166020909101526102a1606083016040840161097c565b81516001600160a01b0390911660409182015281516060808501359181019190915260208084018051608080880135909152815160a080890135919094015281516001950194909452805143930192909252815160e0860135930192909252516101008401359101526101ba81610507565b60405161034f9061032b906005908490602001610b52565b6040516020818303038152906040528051906020012060001c60005414600a6104e2565b6000805561035b6108e5565b61037961037060c084013560e0850135610b67565b4310600b6104e2565b6103873483351460096104e2565b8051600190819052815160006020918201819052818401805191909152510152610120820135156103bc5780602001516103bf565b80515b81604001819052507f0896ce676240463b5368d125b72186db14e7a676ccc8695d5751c0c49668fb47826040516103f69190610a82565b60405180910390a1610406610875565b80518335905261041c604084016020850161097c565b81516001600160a01b0390911660209091015261043f606084016040850161097c565b81516001600160a01b0390911660409182015281516060808601359101528201515161046f906080850135610b67565b602080830151919091526040830151015161048e9060a0850135610b67565b6020808301805190910191909152805160006040909101528051436060909101525160e08401356080909101526104cb8335610100850135610b67565b602082015160a001526104dd81610507565b505050565b816101ba5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201516080015182516060015111156106a2576020820151608001518251606001516105449190610b9e565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152825151815282516020908101516001600160a01b03908116828401528451604090810151909116818401528451606090810151818501528286018051516080860152805184015160a080870191909152865160c087015281519092015160e0860152510151610100840152516106829160059184910160006101408201905083825282516020830152602083015160018060a01b038082166040850152806040860151166060850152505060608301516080830152608083015160a083015260a083015160c083015260c083015160e083015260e083015161010081818501528085015161012085015250509392505050565b60408051601f198184030181529190528051602090910120600055505050565b604080516101008101825260008183018181526060808401838152608080860185815260a080880187815260c0890188815260e08a01898152888b526020808c018b90528e51519099528d518901516001600160a01b039081169097528d518c01519096169093528b87018051519091528051870151909252905101519091528551928301909552918152825193840151939091015190921480835290916104dd91839190156107f55781516020810151606082015191516001600160a01b03909116916108fc916107749190610b7f565b6040518115909202916000818181858888f1935050505015801561079c573d6000803e3d6000fd5b5081516040810151608082015191516001600160a01b03909116916108fc916107c59190610b7f565b6040518115909202916000818181858888f193505050501580156107ed573d6000803e3d6000fd5b506000805533ff5b805160009061081e578251608081015160609091015111610817576001610821565b6000610821565b60035b1461083157815160400151610838565b8151602001515b825160a001516040516001600160a01b03929092169181156108fc0291906000818181858888f193505050501580156107ed573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016108e06040518060c0016040528060008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b905290565b6040805160a08101909152600060608201818152608083019190915281908152602001610925604051806040016040528060008152602001600081525090565b81526020016108e0604051806040016040528060008152602001600081525090565b80356001600160a01b038116811461095e57600080fd5b919050565b6000610140828403121561097657600080fd5b50919050565b60006020828403121561098e57600080fd5b61099782610947565b9392505050565b600061014082840312156109b157600080fd5b6109978383610963565b600061faa0828403121561097657600080fd5b806000805b6103e8811015610a0457823560ff81168082146109ee578384fd5b86525060209485019492909201916001016109d3565b5050505050565b80358252610a1b60208201610947565b6001600160a01b03818116602085015280610a3860408501610947565b1660408501525050606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301526101008082013581840152505050565b6101408101610a918284610a0b565b61012092830135919092015290565b6101408101610aaf8284610a0b565b61012080840135801515808214610ac557600080fd5b808386015250505092915050565b813581526020808301359082015261faa08101610af660408084019085016109ce565b617d40610b078184018286016109ce565b5061fa40610b16818501610947565b6001600160a01b038181169285019290925261fa609180610b38878501610947565b168386015250505061fa8080840135818401525092915050565b82815261014081016109976020830184610a0b565b60008219821115610b7a57610b7a610bb5565b500190565b6000816000190483118215151615610b9957610b99610bb5565b500290565b600082821015610bb057610bb0610bb5565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d97dbd9859865ebdca8d6a5fc7200dcbbe59b19436f80ace038ef4fb6a159e5d64736f6c63430008050033`,
  BytecodeLen: 3203,
  Which: `oD`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

