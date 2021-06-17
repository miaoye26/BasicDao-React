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

export async function Pollster(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1000));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc0, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc0, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2]);
  
  
  const v26 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.aliceAddr, 'for Pollster\'s interact field aliceAddr');
  const v19 = stdlib.protect(ctc1, interact.aliceProposal, 'for Pollster\'s interact field aliceProposal');
  const v20 = stdlib.protect(ctc0, interact.bobAddr, 'for Pollster\'s interact field bobAddr');
  const v21 = stdlib.protect(ctc1, interact.bobProposal, 'for Pollster\'s interact field bobProposal');
  const v23 = stdlib.protect(ctc2, interact.wager, 'for Pollster\'s interact field wager');
  
  const v30 = stdlib.protect(ctc3, await interact.token(), {
    at: './index.rsh:56:47:application',
    fs: ['at ./index.rsh:50:20:application call to [unknown function] (defined at: ./index.rsh:50:24:function exp)'],
    msg: 'token',
    who: 'Pollster'
    });
  
  const txn1 = await (ctc.sendrecv(1, 6, stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 0), [ctc2, ctc2, ctc1, ctc1, ctc0, ctc0, ctc3], [v26, v23, v19, v21, v18, v20, v30], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2, ctc1, ctc1, ctc0, ctc0, ctc3], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 0), v26]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 0)]);
    const [v32, v33, v34, v35, v36, v37] = txn1.data;
    const v39 = txn1.time;
    const v31 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
      kind: 'init',
      tok: v37
      });
    const v42 = stdlib.add(v26, stdlib.checkedBigNumberify('./index.rsh:69:57:decimal', stdlib.UInt_max, 10));
    const v45 = stdlib.checkedBigNumberify('./index.rsh:72:45:decimal', stdlib.UInt_max, 0);
    const v46 = stdlib.checkedBigNumberify('./index.rsh:72:48:decimal', stdlib.UInt_max, 0);
    const v158 = v39;
    const v159 = v26;
    const v161 = stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 0);
    
    if ((() => {
      const v59 = stdlib.gt(v42, v159);
      
      return v59;})()) {
      const v115 = stdlib.sub(v42, v159);
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v158, v161]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v161]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v132 = stdlib.eq(v45, v46);
      const v133 = stdlib.gt(v45, v46);
      const v134 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v135 = v132 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v134;
      if (v132) {
        const v137 = stdlib.mul(v32, v45);
        sim_r.txns.push({
          amt: v137,
          kind: 'from',
          to: v35,
          tok: v37
          });
        const v142 = stdlib.mul(v32, v46);
        sim_r.txns.push({
          amt: v142,
          kind: 'from',
          to: v36,
          tok: v37
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v37
          })
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
        const v147 = stdlib.eq(v135, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v148 = v147 ? v35 : v36;
        sim_r.txns.push({
          amt: v161,
          kind: 'from',
          to: v148,
          tok: v37
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v37
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.nextSt = stdlib.digest(ctc8, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
        sim_r.view = [ctc8, []];
        sim_r.isHalt = true;
        }}
    return sim_r;
    })));
  const [v32, v33, v34, v35, v36, v37] = txn1.data;
  const v39 = txn1.time;
  const v31 = txn1.from;
  ;
  ;
  const v42 = stdlib.add(v26, stdlib.checkedBigNumberify('./index.rsh:69:57:decimal', stdlib.UInt_max, 10));
  let v45 = stdlib.checkedBigNumberify('./index.rsh:72:45:decimal', stdlib.UInt_max, 0);
  let v46 = stdlib.checkedBigNumberify('./index.rsh:72:48:decimal', stdlib.UInt_max, 0);
  let v158 = v39;
  let v159 = v26;
  let v161 = stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 0);
  
  while ((() => {
    const v59 = stdlib.gt(v42, v159);
    
    return v59;})()) {
    const v115 = stdlib.sub(v42, v159);
    const txn2 = await (ctc.recv(4, 1, [ctc2], false, v115));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:123:23:dot', stdlib.UInt_max, 8), [ctc2, ctc0, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2], [v32, v35, v36, v37, v42, v45, v46, v115, v158, v161], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:123:23:dot', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v158, v161]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:123:23:dot', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v161]);
        const [] = txn3.data;
        const v120 = txn3.time;
        const v118 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v121 = stdlib.eq(v45, v46);
        const v122 = stdlib.gt(v45, v46);
        const v123 = v122 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
        const v124 = v121 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v123;
        
        const cv45 = v45;
        const cv46 = v46;
        const cv158 = v120;
        const cv159 = v158;
        const cv161 = v161;
        
        (() => {
          const v45 = cv45;
          const v46 = cv46;
          const v158 = cv158;
          const v159 = cv159;
          const v161 = cv161;
          
          if ((() => {
            const v59 = stdlib.gt(v42, v159);
            
            return v59;})()) {
            const v115 = stdlib.sub(v42, v159);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v158, v161]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v161]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v132 = stdlib.eq(v45, v46);
            const v133 = stdlib.gt(v45, v46);
            const v134 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
            const v135 = v132 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v134;
            if (v132) {
              const v137 = stdlib.mul(v32, v45);
              sim_r.txns.push({
                amt: v137,
                kind: 'from',
                to: v35,
                tok: v37
                });
              const v142 = stdlib.mul(v32, v46);
              sim_r.txns.push({
                amt: v142,
                kind: 'from',
                to: v36,
                tok: v37
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v37
                })
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
              const v147 = stdlib.eq(v135, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              const v148 = v147 ? v35 : v36;
              sim_r.txns.push({
                amt: v161,
                kind: 'from',
                to: v148,
                tok: v37
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v37
                })
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
      const v121 = stdlib.eq(v45, v46);
      const v122 = stdlib.gt(v45, v46);
      const v123 = v122 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v124 = v121 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v123;
      stdlib.protect(ctc4, await interact.seeOutcome(v124, v45, v46), {
        at: './index.rsh:131:38:application',
        fs: ['at ./index.rsh:130:28:application call to [unknown function] (defined at: ./index.rsh:130:32:function exp)', 'at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:72:42:function exp)'],
        msg: 'seeOutcome',
        who: 'Pollster'
        });
      
      const cv45 = v45;
      const cv46 = v46;
      const cv158 = v120;
      const cv159 = v158;
      const cv161 = v161;
      
      v45 = cv45;
      v46 = cv46;
      v158 = cv158;
      v159 = cv159;
      v161 = cv161;
      
      continue;
      }
    else {
      const [v82] = txn2.data;
      const v91 = txn2.time;
      const v81 = txn2.from;
      ;
      const v90 = stdlib.add(v161, v32);
      ;
      const v93 = stdlib.eq(v82, stdlib.checkedBigNumberify('./index.rsh:101:49:decimal', stdlib.UInt_max, 0));
      const v94 = [stdlib.checkedBigNumberify('./index.rsh:101:54:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:101:56:decimal', stdlib.UInt_max, 0)];
      const v95 = [stdlib.checkedBigNumberify('./index.rsh:101:62:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:101:64:decimal', stdlib.UInt_max, 1)];
      const v96 = v93 ? v94 : v95;
      const v97 = v96[stdlib.checkedBigNumberify('./index.rsh:101:19:array', stdlib.UInt_max, 0)];
      const v98 = v96[stdlib.checkedBigNumberify('./index.rsh:101:19:array', stdlib.UInt_max, 1)];
      const v99 = stdlib.add(v45, v97);
      const v100 = stdlib.add(v46, v98);
      const cv45 = v99;
      const cv46 = v100;
      const cv158 = v91;
      const cv159 = v158;
      const cv161 = v90;
      
      v45 = cv45;
      v46 = cv46;
      v158 = cv158;
      v159 = cv159;
      v161 = cv161;
      
      continue;}
    }
  const v132 = stdlib.eq(v45, v46);
  const v133 = stdlib.gt(v45, v46);
  const v134 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
  const v135 = v132 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v134;
  if (v132) {
    const v137 = stdlib.mul(v32, v45);
    ;
    const v142 = stdlib.mul(v32, v46);
    ;
    return;}
  else {
    const v147 = stdlib.eq(v135, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    const v148 = v147 ? v35 : v36;
    ;
    return;}
  
  };
export async function Voter(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1000));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc2, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc2, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  
  
  const v26 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 6, [ctc0, ctc1, ctc1, ctc2, ctc2, ctc3], false, false));
  const [v32, v33, v34, v35, v36, v37] = txn1.data;
  const v39 = txn1.time;
  const v31 = txn1.from;
  ;
  ;
  const v42 = stdlib.add(v26, stdlib.checkedBigNumberify('./index.rsh:69:57:decimal', stdlib.UInt_max, 10));
  let v45 = stdlib.checkedBigNumberify('./index.rsh:72:45:decimal', stdlib.UInt_max, 0);
  let v46 = stdlib.checkedBigNumberify('./index.rsh:72:48:decimal', stdlib.UInt_max, 0);
  let v158 = v39;
  let v159 = v26;
  let v161 = stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 0);
  
  while ((() => {
    const v59 = stdlib.gt(v42, v159);
    
    return v59;})()) {
    const v115 = stdlib.sub(v42, v159);
    stdlib.protect(ctc4, await interact.acceptWager(v32, v33, v34), {
      at: './index.rsh:82:50:application',
      fs: ['at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:80:16:function exp)', 'at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:72:42:function exp)'],
      msg: 'acceptWager',
      who: 'Voter'
      });
    const v73 = stdlib.protect(ctc5, await interact.shouldVote(), {
      at: './index.rsh:85:62:application',
      fs: ['at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:80:16:function exp)', 'at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:72:42:function exp)'],
      msg: 'shouldVote',
      who: 'Voter'
      });
    const v74 = stdlib.protect(ctc0, await interact.getVote(v33, v34), {
      at: './index.rsh:87:58:application',
      fs: ['at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:80:16:function exp)', 'at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:72:42:function exp)'],
      msg: 'getVote',
      who: 'Voter'
      });
    
    const txn2 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:72:42:dot', stdlib.UInt_max, 8), [ctc0, ctc2, ctc2, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0], [v32, v35, v36, v37, v42, v45, v46, v115, v158, v161, v74], [stdlib.checkedBigNumberify('./index.rsh:97:21:decimal', stdlib.UInt_max, 0), [[v32, v37]]], [ctc0], v73, false, v115, (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:72:42:dot', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v158, v161]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:72:42:dot', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v161]);
      const [v82] = txn2.data;
      const v91 = txn2.time;
      const v81 = txn2.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:97:21:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v90 = stdlib.add(v161, v32);
      sim_r.txns.push({
        amt: v32,
        kind: 'to',
        tok: v37
        });
      const v93 = stdlib.eq(v82, stdlib.checkedBigNumberify('./index.rsh:101:49:decimal', stdlib.UInt_max, 0));
      const v94 = [stdlib.checkedBigNumberify('./index.rsh:101:54:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:101:56:decimal', stdlib.UInt_max, 0)];
      const v95 = [stdlib.checkedBigNumberify('./index.rsh:101:62:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:101:64:decimal', stdlib.UInt_max, 1)];
      const v96 = v93 ? v94 : v95;
      const v97 = v96[stdlib.checkedBigNumberify('./index.rsh:101:19:array', stdlib.UInt_max, 0)];
      const v98 = v96[stdlib.checkedBigNumberify('./index.rsh:101:19:array', stdlib.UInt_max, 1)];
      const v99 = stdlib.add(v45, v97);
      const v100 = stdlib.add(v46, v98);
      
      const cv45 = v99;
      const cv46 = v100;
      const cv158 = v91;
      const cv159 = v158;
      const cv161 = v90;
      
      (() => {
        const v45 = cv45;
        const v46 = cv46;
        const v158 = cv158;
        const v159 = cv159;
        const v161 = cv161;
        
        if ((() => {
          const v59 = stdlib.gt(v42, v159);
          
          return v59;})()) {
          const v115 = stdlib.sub(v42, v159);
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v158, v161]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v161]);
          sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v132 = stdlib.eq(v45, v46);
          const v133 = stdlib.gt(v45, v46);
          const v134 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          const v135 = v132 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v134;
          if (v132) {
            const v137 = stdlib.mul(v32, v45);
            sim_r.txns.push({
              amt: v137,
              kind: 'from',
              to: v35,
              tok: v37
              });
            const v142 = stdlib.mul(v32, v46);
            sim_r.txns.push({
              amt: v142,
              kind: 'from',
              to: v36,
              tok: v37
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v37
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
            sim_r.view = [ctc9, []];
            sim_r.isHalt = true;
            }
          else {
            const v147 = stdlib.eq(v135, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            const v148 = v147 ? v35 : v36;
            sim_r.txns.push({
              amt: v161,
              kind: 'from',
              to: v148,
              tok: v37
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v37
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
            sim_r.view = [ctc9, []];
            sim_r.isHalt = true;
            }}})();
      return sim_r;
      })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:123:23:dot', stdlib.UInt_max, 8), [ctc0, ctc2, ctc2, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0], [v32, v35, v36, v37, v42, v45, v46, v115, v158, v161], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:123:23:dot', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v158, v161]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:123:23:dot', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v161]);
        const [] = txn3.data;
        const v120 = txn3.time;
        const v118 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v121 = stdlib.eq(v45, v46);
        const v122 = stdlib.gt(v45, v46);
        const v123 = v122 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
        const v124 = v121 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v123;
        
        const cv45 = v45;
        const cv46 = v46;
        const cv158 = v120;
        const cv159 = v158;
        const cv161 = v161;
        
        (() => {
          const v45 = cv45;
          const v46 = cv46;
          const v158 = cv158;
          const v159 = cv159;
          const v161 = cv161;
          
          if ((() => {
            const v59 = stdlib.gt(v42, v159);
            
            return v59;})()) {
            const v115 = stdlib.sub(v42, v159);
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v158, v161]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 5), v32, v35, v36, v37, v42, v45, v46, v115, v161]);
            sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./index.rsh:72:42:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v132 = stdlib.eq(v45, v46);
            const v133 = stdlib.gt(v45, v46);
            const v134 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
            const v135 = v132 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v134;
            if (v132) {
              const v137 = stdlib.mul(v32, v45);
              sim_r.txns.push({
                amt: v137,
                kind: 'from',
                to: v35,
                tok: v37
                });
              const v142 = stdlib.mul(v32, v46);
              sim_r.txns.push({
                amt: v142,
                kind: 'from',
                to: v36,
                tok: v37
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v37
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc9, []];
              sim_r.isHalt = true;
              }
            else {
              const v147 = stdlib.eq(v135, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              const v148 = v147 ? v35 : v36;
              sim_r.txns.push({
                amt: v161,
                kind: 'from',
                to: v148,
                tok: v37
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v37
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc9, []];
              sim_r.isHalt = true;
              }}})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v120 = txn3.time;
      const v118 = txn3.from;
      ;
      const v121 = stdlib.eq(v45, v46);
      const v122 = stdlib.gt(v45, v46);
      const v123 = v122 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v124 = v121 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v123;
      stdlib.protect(ctc4, await interact.seeOutcome(v124, v45, v46), {
        at: './index.rsh:127:36:application',
        fs: ['at ./index.rsh:126:25:application call to [unknown function] (defined at: ./index.rsh:126:29:function exp)', 'at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:72:42:function exp)'],
        msg: 'seeOutcome',
        who: 'Voter'
        });
      
      const cv45 = v45;
      const cv46 = v46;
      const cv158 = v120;
      const cv159 = v158;
      const cv161 = v161;
      
      v45 = cv45;
      v46 = cv46;
      v158 = cv158;
      v159 = cv159;
      v161 = cv161;
      
      continue;
      }
    else {
      const [v82] = txn2.data;
      const v91 = txn2.time;
      const v81 = txn2.from;
      ;
      const v90 = stdlib.add(v161, v32);
      ;
      const v93 = stdlib.eq(v82, stdlib.checkedBigNumberify('./index.rsh:101:49:decimal', stdlib.UInt_max, 0));
      const v94 = [stdlib.checkedBigNumberify('./index.rsh:101:54:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:101:56:decimal', stdlib.UInt_max, 0)];
      const v95 = [stdlib.checkedBigNumberify('./index.rsh:101:62:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:101:64:decimal', stdlib.UInt_max, 1)];
      const v96 = v93 ? v94 : v95;
      const v97 = v96[stdlib.checkedBigNumberify('./index.rsh:101:19:array', stdlib.UInt_max, 0)];
      const v98 = v96[stdlib.checkedBigNumberify('./index.rsh:101:19:array', stdlib.UInt_max, 1)];
      const v99 = stdlib.add(v45, v97);
      const v100 = stdlib.add(v46, v98);
      stdlib.protect(ctc4, await interact.voterWas(v81, v99, v100), {
        at: './index.rsh:107:33:application',
        fs: ['at ./index.rsh:105:23:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)', 'at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:72:42:function exp)'],
        msg: 'voterWas',
        who: 'Voter'
        });
      stdlib.protect(ctc4, await interact.log(v99), {
        at: './index.rsh:108:28:application',
        fs: ['at ./index.rsh:105:23:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)', 'at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:72:42:function exp)'],
        msg: 'log',
        who: 'Voter'
        });
      stdlib.protect(ctc4, await interact.log(v100), {
        at: './index.rsh:109:28:application',
        fs: ['at ./index.rsh:105:23:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)', 'at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:72:42:function exp)'],
        msg: 'log',
        who: 'Voter'
        });
      
      const cv45 = v99;
      const cv46 = v100;
      const cv158 = v91;
      const cv159 = v158;
      const cv161 = v90;
      
      v45 = cv45;
      v46 = cv46;
      v158 = cv158;
      v159 = cv159;
      v161 = cv161;
      
      continue;}
    }
  const v132 = stdlib.eq(v45, v46);
  const v133 = stdlib.gt(v45, v46);
  const v134 = v133 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
  const v135 = v132 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3) : v134;
  if (v132) {
    const v137 = stdlib.mul(v32, v45);
    ;
    const v142 = stdlib.mul(v32, v46);
    ;
    return;}
  else {
    const v147 = stdlib.eq(v135, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    const v148 = v147 ? v35 : v36;
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
    size: 374
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
// "./index.rsh:60:16:dot"
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
// Initializing token
gtxn 4 XferAsset
load 250
==
assert
gtxn 4 TypeEnum
int axfer
==
assert
gtxn 4 AssetReceiver
byte "{{ContractAddr}}"
==
assert
gtxn 4 AssetAmount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
load 4
btoi
int 10
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
load 250
itob
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
int 5
==
assert
load 3
btoi
gtxn 4 Fee
int 100000
int 1
*
+
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
gtxn 5 XferAsset
load 250
==
assert
gtxn 5 TypeEnum
int axfer
==
assert
// We don't check the receiver
gtxn 5 AssetAmount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 AssetCloseTo
byte "{{Deployer}}"
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
int 100000
int 1
*
+
==
assert
// Check time limits
b checkAccts
l1:
byte base64()
load 1
==
assert
gtxn 5 XferAsset
load 250
==
assert
gtxn 5 TypeEnum
int axfer
==
assert
// We don't check the receiver
gtxn 5 AssetAmount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 AssetCloseTo
byte "{{Deployer}}"
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
int 100000
int 1
*
+
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
dup
substring 112 120
btoi
store 247
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 246
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
load 247
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
// "./index.rsh:72:42:dot"
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
load 247
load 255
+
store 245
// "CheckPay"
// "./index.rsh:72:42:dot"
// "[]"
gtxn 4 XferAsset
load 252
==
assert
gtxn 4 TypeEnum
int axfer
==
assert
gtxn 4 AssetReceiver
byte "{{ContractAddr}}"
==
assert
gtxn 4 AssetAmount
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
load 246
int 0
==
select
store 244
load 250
load 244
substring 0 8
btoi
+
store 243
load 249
load 244
substring 8 16
btoi
+
store 242
load 251
load 4
btoi
>
bz l0
load 251
load 4
btoi
-
store 241
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
load 243
itob
concat
load 242
itob
concat
load 241
itob
concat
load 245
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
int 5
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
load 241
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
pop
b checkAccts
l0:
load 243
load 242
==
dup
store 241
bz l1
gtxn 5 XferAsset
load 252
==
assert
gtxn 5 TypeEnum
int axfer
==
assert
gtxn 5 AssetReceiver
load 254
==
assert
gtxn 5 AssetAmount
load 255
load 243
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 XferAsset
load 252
==
assert
gtxn 6 TypeEnum
int axfer
==
assert
gtxn 6 AssetReceiver
load 253
==
assert
gtxn 6 AssetAmount
load 255
load 242
*
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 7 XferAsset
load 252
==
assert
gtxn 7 TypeEnum
int axfer
==
assert
// We don't check the receiver
gtxn 7 AssetAmount
int 0
==
assert
gtxn 7 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 7 AssetCloseTo
byte "{{Deployer}}"
==
assert
gtxn 8 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 8 Amount
int 0
==
assert
gtxn 8 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 8 CloseRemainderTo
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
int 9
==
assert
load 3
btoi
gtxn 5 Fee
gtxn 6 Fee
+
gtxn 7 Fee
+
gtxn 8 Fee
+
==
assert
// Check time limits
load 4
btoi
load 248
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
dup
gtxn 7 LastValid
>=
assert
dup
gtxn 8 LastValid
>=
assert
pop
b checkAccts
l1:
gtxn 5 XferAsset
load 252
==
assert
gtxn 5 TypeEnum
int axfer
==
assert
gtxn 5 AssetReceiver
load 253
load 254
int 1
int 0
load 243
load 242
>
select
int 3
load 241
select
int 0
==
select
==
assert
gtxn 5 AssetAmount
load 245
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
gtxn 6 XferAsset
load 252
==
assert
gtxn 6 TypeEnum
int axfer
==
assert
// We don't check the receiver
gtxn 6 AssetAmount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 AssetCloseTo
byte "{{Deployer}}"
==
assert
gtxn 7 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 7 Amount
int 0
==
assert
gtxn 7 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 7 CloseRemainderTo
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
int 8
==
assert
load 3
btoi
gtxn 5 Fee
gtxn 6 Fee
+
gtxn 7 Fee
+
==
assert
// Check time limits
load 4
btoi
load 248
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
dup
gtxn 7 LastValid
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
dup
substring 112 120
btoi
store 247
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
load 247
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
// "./index.rsh:123:23:dot"
// "[at ./index.rsh:72:42:application call to [unknown function] (defined at: ./index.rsh:72:42:function exp)]"
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
load 251
load 4
btoi
>
bz l0
load 251
load 4
btoi
-
store 246
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
load 249
itob
concat
load 246
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
load 246
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
load 250
load 249
==
dup
store 246
bz l1
gtxn 4 XferAsset
load 252
==
assert
gtxn 4 TypeEnum
int axfer
==
assert
gtxn 4 AssetReceiver
load 254
==
assert
gtxn 4 AssetAmount
load 255
load 250
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 XferAsset
load 252
==
assert
gtxn 5 TypeEnum
int axfer
==
assert
gtxn 5 AssetReceiver
load 253
==
assert
gtxn 5 AssetAmount
load 255
load 249
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
gtxn 6 XferAsset
load 252
==
assert
gtxn 6 TypeEnum
int axfer
==
assert
// We don't check the receiver
gtxn 6 AssetAmount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 AssetCloseTo
byte "{{Deployer}}"
==
assert
gtxn 7 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 7 Amount
int 0
==
assert
gtxn 7 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 7 CloseRemainderTo
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
int 8
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
gtxn 7 Fee
+
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
dup
gtxn 7 FirstValid
<=
assert
pop
b checkAccts
l1:
gtxn 4 XferAsset
load 252
==
assert
gtxn 4 TypeEnum
int axfer
==
assert
gtxn 4 AssetReceiver
load 253
load 254
int 1
int 0
load 250
load 249
>
select
int 3
load 246
select
int 0
==
select
==
assert
gtxn 4 AssetAmount
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
gtxn 5 XferAsset
load 252
==
assert
gtxn 5 TypeEnum
int axfer
==
assert
// We don't check the receiver
gtxn 5 AssetAmount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 AssetCloseTo
byte "{{Deployer}}"
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
                "name": "v26",
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
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
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
                "internalType": "address payable",
                "name": "v37",
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
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v161",
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
                "name": "v82",
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
                "internalType": "address payable",
                "name": "v37",
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
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v161",
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
                "name": "v26",
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
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
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
                "internalType": "address payable",
                "name": "v37",
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
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v161",
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
                "name": "v82",
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
                "internalType": "address payable",
                "name": "v37",
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
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v161",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610f22806100826000396000f3fe6080604052600436106100385760003560e01c8063042b494e1461004457806319b01f1314610059578063e21700171461006c5761003f565b3661003f57005b600080fd5b610057610052366004610b8b565b61007f565b005b610057610067366004610b6f565b6101d3565b61005761007a366004610b6f565b6103dd565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100bc57600080fd5b6000805534156100cb57600080fd5b7f0f4d0fba6ecf50f49e36b016ecc7547ce0a06f848ba5fe5c97a1829e6b4c65de816040516100fa9190610d04565b60405180910390a161010a610a35565b80516020830135905261012561fa60830161fa408401610b39565b81516001600160a01b0390911660209091015261014a61fa80830161fa608401610b39565b81516001600160a01b0390911660409091015261016f61faa0830161fa808401610b39565b81516001600160a01b0390911660609091015261018e600a8335610e47565b81516080908101919091526020808301805160009081905281519092018290528051436040909101528051853560609091015251909101526101cf81610544565b5050565b6040516101e7906005908390602001610d8d565b6040516020818303038152906040528051906020012060001c6000541461020d57600080fd5b60008055610219610aa3565b61022c60e0830135610100840135610e47565b431061023757600080fd5b341561024257600080fd5b61025d336102566080850160608601610b39565b8435610703565b61026657600080fd5b80516001908190528151600060209182018190528184018051919091525101526101408201351561029b57806020015161029e565b80515b81604001819052507f46084ab7668b10d1342818176b0538f1c225c7f6cf3778457f073aabb561eccc826040516102d59190610cba565b60405180910390a16102e5610a35565b8051833590526102fb6040840160208501610b39565b81516001600160a01b0390911660209091015261031e6060840160408501610b39565b81516001600160a01b039091166040909101526103416080840160608501610b39565b81516001600160a01b0390911660609091015280516080808501359101526040820151516103739060a0850135610e47565b60208083015191909152604083015101516103929060c0850135610e47565b6020808301805190910191909152805143604090910152516101008401356060909101526103c68335610120850135610e47565b6020820151608001526103d881610544565b505050565b6040516103f1906005908390602001610d8d565b6040516020818303038152906040528051906020012060001c6000541461041757600080fd5b6000805561042e60e0820135610100830135610e47565b43101561043a57600080fd5b341561044557600080fd5b7fa247fc41ec46bf2b5c0a9535fb68ad09d80ac4f8e7b89d93af34f3750be6572b816040516104749190610cd8565b60405180910390a1610484610a35565b80518235905261049a6040830160208401610b39565b81516001600160a01b039091166020909101526104bd6060830160408401610b39565b81516001600160a01b039091166040909101526104e06080830160608401610b39565b81516001600160a01b039091166060918201528151608080850135918101919091526020808401805160a08701359052805160c0870135920191909152805143604090910152805161010086013593019290925290516101208401359101526101cf815b6040805160208101909152600081526020820151606001518251608001511115610663576020820151606001518251608001516105819190610e7e565b81526040805161014081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a0189815260e08b018a81526101008c018b81526101208d019b8c528f51518d528f518b01516001600160a01b03908116909a528f518e01518a169098528e51909601519097169093528b5182015190528a86018051519092528151860151909452885190915280518701519091525101519091529151909161064291600591849101610da2565b60408051601f198184030181529190528051602090910120600055506101cf565b604080516101208101825260008183018181526060808401838152608080860185815260a0870186815260c0880187815260e089018881526101008a01898152888b526020808c019a909a528d51519098528c518901516001600160a01b039081169096528c51909a015185169092528a51909401519092169092528784018051519091528051909301519094529051909201519091526103d88161071b565b6000610711838530856107e6565b90505b9392505050565b604080516020810190915260008152815160a0810151608090910151148082521561078c57815160608101516020820151608083015192516107659361076091610e5f565b6108e9565b81516060810151604082015160a083015192516107859361076091610e5f565b6000805533ff5b815160600151815161078591906000906107c157845160a0810151608090910151116107b95760016107bc565b60005b6107c4565b60035b146107d4578351604001516107db565b8351602001515b845160c001516108e9565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161084d91610c6b565b60006040518083038185875af1925050503d806000811461088a576040519150601f19603f3d011682016040523d82523d6000602084013e61088f565b606091505b50915091506108c9828260405180604001604052806012815260200171746f6b656e2e7472616e7366657246726f6d60701b8152506108fd565b50808060200190518101906108de9190610b53565b979650505050505050565b6108f483838361093f565b6103d857600080fd5b6060831561090c575081610714565b82511561091c5782518084602001fd5b8160405162461bcd60e51b81526004016109369190610c87565b60405180910390fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161099e91610c6b565b60006040518083038185875af1925050503d80600081146109db576040519150601f19603f3d011682016040523d82523d6000602084013e6109e0565b606091505b5091509150610a1682826040518060400160405280600e81526020016d3a37b5b2b7173a3930b739b332b960911b8152506108fd565b5080806020019051810190610a2b9190610b53565b9695505050505050565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c08201929092529081908152602001610a9e6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b6040805160a08101909152600060608201818152608083019190915281908152602001610ae3604051806040016040528060008152602001600081525090565b8152602001610a9e604051806040016040528060008152602001600081525090565b80356001600160a01b0381168114610b1c57600080fd5b919050565b60006101608284031215610b33578081fd5b50919050565b600060208284031215610b4a578081fd5b61071482610b05565b600060208284031215610b64578081fd5b815161071481610edb565b60006101608284031215610b81578081fd5b6107148383610b21565b600061faa08284031215610b33578081fd5b806000805b6103e8811015610bd357823560ff8116808214610bbd578384fd5b8652506020948501949290920191600101610ba2565b5050505050565b80358252610bea60208201610b05565b6001600160a01b03166020830152610c0460408201610b05565b6001600160a01b03166040830152610c1e60608201610b05565b6001600160a01b031660608301526080818101359083015260a0808201359083015260c0808201359083015260e08082013590830152610100808201359083015261012090810135910152565b60008251610c7d818460208701610e95565b9190910192915050565b6000602082528251806020840152610ca6816040850160208701610e95565b601f01601f19169190910160400192915050565b6101608101610cc98284610bda565b61014092830135919092015290565b6101608101610ce78284610bda565b61014080840135610cf781610edb565b1515920191909152919050565b813581526020808301359082015261faa08101610d276040808401908501610b9d565b617d40610d38818401828601610b9d565b5061fa40610d47818501610b05565b6001600160a01b038181169285019290925261fa609180610d69878501610b05565b168386015261fa80925080610d7f848801610b05565b168386015250505092915050565b82815261016081016107146020830184610bda565b600061016082019050838252825160208301526020830151610dcf60408401826001600160a01b03169052565b5060408301516001600160a01b03811660608401525060608301516001600160a01b038116608084015250608083015160a083015260a083015160c083015260c083015160e083015260e083015161010081818501528085015191505061012081818501528085015161014085015250509392505050565b60008219821115610e5a57610e5a610ec5565b500190565b6000816000190483118215151615610e7957610e79610ec5565b500290565b600082821015610e9057610e90610ec5565b500390565b60005b83811015610eb0578181015183820152602001610e98565b83811115610ebf576000848401525b50505050565b634e487b7160e01b600052601160045260246000fd5b8015158114610ee957600080fd5b5056fea2646970667358221220db439a0215092f8e152401af5f8fd85bad33fa3fb4165c1d9ad10ccaf51762e164736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

