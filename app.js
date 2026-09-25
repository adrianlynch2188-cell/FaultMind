
const scenarios = {
  "FM-ELEC-001": {
    id:"FM-ELEC-001",
    name:"Motor Won't Start",
    difficulty:"Technician",
    equipment:["Conveyor CV-101","3-phase motor starter system"],
    complaint:"Conveyor CV-101 will not start when the START command is given. The machine was operating normally earlier in the shift.",
    rootCause:"Failed / open contactor coil",
    repair:"Replace the failed contactor coil or contactor assembly with the correctly rated replacement.",
    verification:["Contactor energizes on START command","Motor starts normally","Motor rotation is correct","Running current is within normal range","Conveyor operates correctly under load"],
    coach:"Good troubleshooting isolates the fault using evidence before replacing components.",
    tests: {
      incoming:{label:"Check incoming supply voltage", group:"Power checks", result:"L1-L2 = 480 V · L2-L3 = 479 V · L1-L3 = 481 V", state:"normal", energized:true, value:10},
      control:{label:"Check control voltage", group:"Control checks", result:"Control circuit voltage measured at 120 VAC — normal.", state:"normal", energized:true, value:9},
      overload:{label:"Check overload relay", group:"Control checks", result:"Overload relay is NOT tripped. Reset flag is in normal position.", state:"normal", energized:true, value:7},
      estop:{label:"Check emergency stop circuit", group:"Control checks", result:"E-stop circuit healthy and reset. Continuity through the string.", state:"normal", energized:true, value:7},
      start:{label:"Check start command", group:"Control checks", result:"START command is present at the starter control terminals.", state:"normal", energized:true, value:10},
      inspect:{label:"Inspect contactor", group:"Component checks", result:"Contactor does NOT pull in when START is commanded. No audible seal-in.", state:"abnormal", energized:true, value:12},
      coilv:{label:"Measure contactor coil voltage", group:"Component checks", result:"120 VAC present across the coil terminals while START is commanded.", state:"normal", energized:true, value:14},
      coilr:{label:"Measure contactor coil resistance", group:"Component checks", result:"Coil reads OPEN CIRCUIT (O.L.). No measurable resistance.", state:"abnormal", energized:false, value:18},
      motor:{label:"Check motor winding condition", group:"Component checks", result:"Motor winding resistance and insulation checks are normal.", state:"normal", energized:false, value:3}
    },
    intents: {
      incoming:["incoming voltage","supply voltage","line voltage","incoming power"],
      control:["control voltage","control power"],
      overload:["overload"],
      estop:["emergency stop","e stop","estop"],
      start:["start command","start signal"],
      inspect:["inspect contactor","check contactor","contactor operation"],
      coilv:["coil voltage","voltage on the coil","voltage at the contactor"],
      coilr:["coil resistance","ohm the coil","continuity of the coil","resistance of coil"],
      motor:["motor winding","motor resistance","check motor"]
    }
  },
  "FM-ELEC-002": {
    id:"FM-ELEC-002",
    name:"Contactor Chattering / Motor Fails to Start Reliably",
    difficulty:"Senior Technician",
    equipment:["Conveyor CV-202","3-phase motor starter system","120 VAC control circuit"],
    complaint:"Conveyor CV-202 attempts to start but the contactor chatters and the motor either fails to start or drops out almost immediately. The problem started intermittently and has become more frequent.",
    rootCause:"Loose / high-resistance control-circuit connection causing voltage drop to the contactor coil under load",
    repair:"Safely isolate the circuit, repair the loose termination, inspect for heat damage, replace damaged terminal hardware if required, and torque to the correct manufacturer specification.",
    verification:["Contactor pulls in cleanly without chatter","Coil voltage during START is approximately rated control voltage","Motor starts and remains running","Running current is balanced and within expected range","Conveyor operates normally under load","Repaired terminal does not heat excessively"],
    coach:"Voltage must be measured where the load actually uses it. A healthy source does not rule out voltage drop through a high-resistance connection.",
    tests: {
      incoming:{label:"Check incoming supply voltage", group:"Power checks", result:"L1-L2 = 480 V · L2-L3 = 480 V · L1-L3 = 479 V", state:"normal", energized:true, value:5},
      txpri:{label:"Check control transformer primary voltage", group:"Power checks", result:"Control transformer primary = 480 VAC.", state:"normal", energized:true, value:5},
      txsec:{label:"Check control transformer secondary voltage", group:"Power checks", result:"Secondary with no load = 121 VAC.", state:"normal", energized:true, value:7},
      txload:{label:"Check transformer secondary during START", group:"Power checks", result:"Transformer secondary during START = 119 VAC.", state:"normal", energized:true, value:11},
      overload:{label:"Check overload auxiliary contact", group:"Control checks", result:"Overload auxiliary contact is closed and healthy.", state:"normal", energized:true, value:5},
      estop:{label:"Check emergency stop circuit", group:"Control checks", result:"Emergency-stop circuit is healthy.", state:"normal", energized:true, value:5},
      start:{label:"Verify START command", group:"Control checks", result:"START command is present.", state:"normal", energized:true, value:8},
      plc:{label:"Check PLC / control output", group:"Control checks", result:"Control output is healthy and commanded ON.", state:"normal", energized:true, value:8},
      inspect:{label:"Inspect contactor operation", group:"Component checks", result:"Contactor chatters and fails to remain fully engaged.", state:"abnormal", energized:true, value:12},
      coilv:{label:"Measure contactor coil voltage during START", group:"Component checks", result:"Coil voltage is unstable at approximately 68–78 VAC; present reading 74 VAC.", state:"abnormal", energized:true, value:18},
      coilr:{label:"Measure contactor coil resistance", group:"Component checks", result:"Contactor coil resistance is within normal range.", state:"normal", energized:false, value:8},
      contacts:{label:"Inspect main power contacts", group:"Component checks", result:"Main power contacts show no significant damage.", state:"normal", energized:false, value:3},
      motor:{label:"Check motor winding condition", group:"Component checks", result:"Motor windings are healthy.", state:"normal", energized:false, value:2},
      upstream:{label:"Measure voltage before suspect connection during START", group:"Circuit tracing", result:"Voltage before suspect connection during START = 118 VAC.", state:"normal", energized:true, value:18},
      downstream:{label:"Measure voltage after suspect connection during START", group:"Circuit tracing", result:"Voltage after suspect connection during START = 74 VAC.", state:"abnormal", energized:true, value:20},
      wiring:{label:"Inspect control wiring / terminals", group:"Circuit tracing", result:"A loose control-wire termination with minor heat discoloration is found.", state:"abnormal", energized:false, value:20},
      connr:{label:"Measure resistance across suspect connection", group:"Circuit tracing", result:"Resistance across the suspect connection is abnormally high and unstable.", state:"abnormal", energized:false, value:18}
    },
    intents: {
      incoming:["incoming voltage","supply voltage","line voltage"],
      txpri:["transformer primary","primary voltage"],
      txsec:["transformer secondary","secondary voltage","control transformer voltage"],
      txload:["transformer under load","secondary during start","transformer voltage while start"],
      overload:["overload"],
      estop:["emergency stop","e stop","estop"],
      start:["start command","start signal"],
      plc:["plc output","control output"],
      inspect:["inspect contactor","contactor operation","check contactor"],
      coilv:["coil voltage","voltage on the coil","voltage reaching the contactor"],
      coilr:["coil resistance","ohm the coil","continuity of the coil"],
      contacts:["main contacts","power contacts"],
      motor:["motor winding","motor resistance"],
      upstream:["before the connection","upstream voltage","before the terminal"],
      downstream:["after the connection","downstream voltage","after the terminal"],
      wiring:["inspect terminals","control wiring","loose wires","inspect wiring"],
      connr:["resistance across connection","terminal resistance","connection resistance"]
    }
  }
};

const state = {
  page:"landing",
  scenarioId:null,
  history:[],
  loto:false,
  completed: JSON.parse(localStorage.getItem("faultmind_completed") || "[]")
};

function saveCompleted(){
  localStorage.setItem("faultmind_completed", JSON.stringify(state.completed));
}
function stats(){
  if(!state.completed.length) return {solved:0, avg:"—", rating:1250};
  const avg=Math.round(state.completed.reduce((a,b)=>a+b.score,0)/state.completed.length);
  return {solved:state.completed.length, avg, rating:1250 + state.completed.reduce((a,b)=>Math.max(0,b.score-60),0)};
}
function header(label=""){
  return `<header class="topbar"><div class="brand"><span class="brand-mark"></span>FAULTMIND</div><div class="kicker">${label}</div></header>`;
}
function render(){
  const app=document.getElementById("app");
  app.innerHTML=`<div class="app-shell">${header(pageLabel())}<main>${pageHtml()}</main></div>`;
  bind();
}
function pageLabel(){
  return ({landing:"SIMULATOR ONLINE",dashboard:"DASHBOARD",brief:"SCENARIO BRIEF",sim:"SIMULATOR",diagnosis:"DIAGNOSIS",debrief:"DEBRIEF"})[state.page] || "";
}
function pageHtml(){
  if(state.page==="landing") return landing();
  if(state.page==="dashboard") return dashboard();
  if(state.page==="brief") return brief();
  if(state.page==="sim") return simulator();
  if(state.page==="diagnosis") return diagnosis();
  if(state.page==="debrief") return debrief();
}
function landing(){
 return `<section class="hero">
  <div class="kicker" style="color:var(--good);margin-bottom:22px">● Simulator Online</div>
  <h1>FaultMind</h1>
  <div class="tagline">Think Like a Troubleshooter.</div>
  <p>Practice real industrial fault diagnosis through interactive simulations.</p>
  <button class="btn-primary" data-nav="dashboard">Start Training</button>
 </section>
 <div class="grid3">
  <div class="card"><div class="metric-label" style="color:var(--accent)">Evidence First</div><p class="muted">Choose your own tests. Nothing is handed to you.</p></div>
  <div class="card"><div class="metric-label" style="color:var(--accent)">Fixed Technical Truth</div><p class="muted">Measurements behave like the real machine.</p></div>
  <div class="card"><div class="metric-label" style="color:var(--accent)">Scored Coaching</div><p class="muted">Six-category breakdown after every diagnosis.</p></div>
 </div>`;
}
function dashboard(){
 const s=stats();
 return `<h1>Technician Dashboard</h1><p class="muted">Training profile and available simulations.</p>
 <div class="stats">
  <div class="card"><div class="metric-label">Current Level</div><div class="metric-value">Technician</div></div>
  <div class="card"><div class="metric-label">FaultMind Rating</div><div class="metric-value">${s.rating}</div></div>
  <div class="card"><div class="metric-label">Faults Solved</div><div class="metric-value">${s.solved}</div></div>
  <div class="card"><div class="metric-label">Average Score</div><div class="metric-value">${s.avg}</div></div>
 </div>
 <h2 class="section-title">Available Simulations</h2>
 <div class="scenario-list">${Object.values(scenarios).map(sc=>`
  <div class="card scenario-card">
   <div class="id">${sc.id}</div><h3>${sc.name}</h3>
   <p class="muted">${sc.equipment[0]} · Difficulty: ${sc.difficulty}</p>
   <button class="btn-primary" data-start="${sc.id}">Start Simulation</button>
  </div>`).join("")}</div>`;
}
function brief(){
 const s=scenarios[state.scenarioId];
 return `<div class="id" style="color:var(--accent);font-family:ui-monospace,monospace">${s.id}</div>
 <h1 class="sim-title">${s.name}</h1><span class="badge">Difficulty: ${s.difficulty}</span>
 <div class="card" style="margin-top:28px"><div class="metric-label">Equipment</div><ul>${s.equipment.map(x=>`<li>${x}</li>`).join("")}</ul></div>
 <div class="card" style="margin-top:14px"><div class="metric-label">Operator Complaint</div><p class="quote">“${s.complaint}”</p></div>
 <button class="btn-primary" style="margin-top:18px" data-begin>Begin Troubleshooting</button>`;
}
function simulator(){
 const s=scenarios[state.scenarioId];
 const groups=[...new Set(Object.values(s.tests).map(t=>t.group))];
 return `<h1 class="sim-title">${s.name}</h1><p class="muted">“${s.complaint}”</p><div class="test-count">TESTS PERFORMED: ${state.history.length}</div>
 <div class="card" style="margin-top:16px">
  <h3>What would you like to check?</h3>
  <div class="command-row"><input id="cmd" placeholder="e.g. check voltage at the contactor coil"><button class="btn-primary" id="checkCmd">Check</button></div>
  <div class="quickchips">
   <button class="chip" data-cmd="check incoming voltage">check incoming voltage</button>
   <button class="chip" data-cmd="inspect the contactor">inspect the contactor</button>
   <button class="chip" data-cmd="measure coil resistance">measure coil resistance</button>
   <button class="chip" data-cmd="verify the start command">verify the start command</button>
  </div>
  <div id="cmdMsg" class="muted" style="margin-top:8px"></div>
 </div>
 <div class="card" style="margin-top:14px">
  <div class="safety"><div><div class="metric-label">Safety Isolation</div><p class="muted">De-energized measurements require lockout/tagout and verified zero energy.</p></div>
  <div class="status ${state.loto?"good":"bad"}">${state.loto?"LOTO APPLIED":"ENERGIZED"}</div></div>
  <button class="btn-secondary" id="lotoBtn">${state.loto?"ISOLATED":"APPLY LOTO"}</button>
 </div>
 <div class="metric-label" style="margin-top:24px">Available Test Tools</div>
 ${groups.map(g=>`<div class="card test-group"><h4>${g}</h4>${Object.entries(s.tests).filter(([k,t])=>t.group===g).map(([k,t])=>`
   <button class="test-btn" data-test="${k}" ${(!t.energized && !state.loto)?"disabled":""}><span>${t.label}</span><small>${(!t.energized && !state.loto)?"DE-ENERGIZE":"RUN"}</small></button>`).join("")}</div>`).join("")}
 <div class="card" style="margin-top:14px"><div class="metric-label">Diagnostic History</div>
  <div>${state.history.length?state.history.map((h,i)=>`<div class="history-item"><span class="history-code">0${i+1} · ${h.label}</span><span class="result-tag ${h.state}">${h.state}</span><div style="margin-top:6px">${h.result}</div></div>`).join(""):'<p class="muted">No tests performed yet. Select a check to gather evidence.</p>'}</div>
  <button class="btn-primary" style="margin-top:12px" data-nav="diagnosis">Submit Diagnosis</button>
 </div>`;
}
function diagnosis(){
 return `<h1>Submit Diagnosis</h1><p class="muted">Based on ${state.history.length} tests, commit to a root cause.</p>
 <div class="card form-card">
  <label>State your diagnosis</label><textarea id="diag"></textarea>
  <label>What evidence supports your diagnosis?</label><textarea id="evidence"></textarea>
  <label>What repair would you perform?</label><textarea id="repair"></textarea>
  <label>How would you verify the repair?</label><textarea id="verify"></textarea>
  <button class="btn-primary" id="confirmDiag">Confirm Diagnosis</button>
 </div>`;
}
function textHas(text, words){ const t=text.toLowerCase(); return words.some(w=>t.includes(w)); }
function scoreSubmission(s, data){
 let safety=20;
 const unsafeDeenergized = state.history.some(h=>!h.energized && !state.loto);
 if(unsafeDeenergized) safety=4;
 else if(!state.loto && state.history.some(h=>!h.energized)) safety=8;

 let root=0, tech=0, verify=0;
 if(s.id==="FM-ELEC-001"){
   if(textHas(data.diag,["contactor coil","open coil","failed contactor","faulty contactor"])) root=15;
   else if(textHas(data.diag,["contactor"])) root=10;
   if(textHas(data.repair,["replace contactor","replace coil","same rating","correctly rated"])) tech=15;
   verify += textHas(data.verify,["pull","engage","energize","start command"])?2:0;
   verify += textHas(data.verify,["motor start","starts"])?2:0;
   verify += textHas(data.verify,["voltage"])?2:0;
   verify += textHas(data.verify,["rotation"])?1:0;
   verify += textHas(data.verify,["current","amp"])?1:0;
   verify += textHas(data.verify,["load","conveyor"])?2:0;
 } else {
   if(textHas(data.diag,["high resistance","loose terminal","loose wire","voltage drop","poor connection","bad connection","loose connection"])) root=15;
   else if(textHas(data.diag,["control circuit","connection","terminal"])) root=10;
   if(textHas(data.repair,["tighten","repair","replace terminal","replace conductor","torque","loose termination"])) tech=15;
   verify += textHas(data.verify,["no chatter","pulls in","cleanly","contactor"])?2:0;
   verify += textHas(data.verify,["coil voltage","rated voltage","120","voltage"])?2:0;
   verify += textHas(data.verify,["motor starts","motor start","remains running"])?2:0;
   verify += textHas(data.verify,["current","amp"])?1:0;
   verify += textHas(data.verify,["load","conveyor"])?2:0;
   verify += textHas(data.verify,["heat","temperature"])?1:0;
 }
 let reasoning=0;
 const ids=state.history.map(h=>h.key);
 const unique=new Set(ids);
 const valueSum=state.history.reduce((sum,h)=>sum+(s.tests[h.key].value||0),0);
 reasoning=Math.min(25, Math.round(valueSum/4));
 if(s.id==="FM-ELEC-001" && unique.has("coilv") && unique.has("coilr") && unique.has("inspect")) reasoning=Math.max(reasoning,23);
 if(s.id==="FM-ELEC-002" && unique.has("coilv") && unique.has("upstream") && unique.has("downstream")) reasoning=Math.max(reasoning,24);

 let efficiency=15;
 const repeats=ids.length-unique.size;
 efficiency-=Math.min(6,repeats*2);
 if(s.id==="FM-ELEC-001" && unique.has("motor") && unique.has("coilv") && unique.has("inspect")) efficiency-=2;
 if(s.id==="FM-ELEC-002" && unique.has("motor") && unique.has("coilv") && unique.has("downstream")) efficiency-=3;
 efficiency=Math.max(5,efficiency);

 const total=safety+reasoning+efficiency+tech+root+verify;
 return {safety, reasoning, efficiency, tech, root, verify, total};
}
function pathClassification(s,h,index){
 if(!h.energized) return state.loto?["safety","Safety-critical action"]:["unnecessary","Unsafe / isolation required"];
 if((s.id==="FM-ELEC-001" && ["inspect","coilv","coilr","start","incoming","control"].includes(h.key)) ||
    (s.id==="FM-ELEC-002" && ["inspect","coilv","upstream","downstream","wiring","txload"].includes(h.key))) return ["strong","Strong decision"];
 if(["overload","estop","plc","txpri","txsec"].includes(h.key)) return ["reasonable","Reasonable check"];
 if(h.key==="motor") return ["unnecessary","Low-value at this stage"];
 return ["reasonable","Reasonable check"];
}
function debrief(){
 const d=state.lastDebrief, s=scenarios[state.scenarioId];
 const rows=[
  ["Safety",d.score.safety,20],["Diagnostic Reasoning",d.score.reasoning,25],["Test Efficiency",d.score.efficiency,15],
  ["Technical Knowledge",d.score.tech,15],["Root Cause Identification",d.score.root,15],["Repair Verification",d.score.verify,10]
 ];
 return `<div class="card"><div class="metric-label" style="text-align:center">Overall FaultMind Score</div><div class="score">${d.score.total}</div><div class="muted" style="text-align:center">OUT OF 100 · ${s.id}</div></div>
 <div class="card" style="margin-top:14px"><div class="metric-label">Score Breakdown</div>${rows.map(([n,v,m])=>`<div class="breakdown-row"><div class="breakdown-head"><span>${n}</span><span>${v}/${m}</span></div><div class="bar"><span style="width:${(v/m)*100}%"></span></div></div>`).join("")}</div>
 <div class="card" style="margin-top:14px"><div class="metric-label">Root Cause</div><p>${s.rootCause}</p></div>
 <div class="card" style="margin-top:14px"><div class="metric-label">Correct Repair</div><p>${s.repair}</p></div>
 <div class="card" style="margin-top:14px"><div class="metric-label">Recommended Verification</div><ul>${s.verification.map(x=>`<li>${x}</li>`).join("")}</ul></div>
 <div class="card" style="margin-top:14px"><div class="metric-label">Your Diagnostic Path</div>${state.history.map((h,i)=>{const [cls,label]=pathClassification(s,h,i); return `<div class="path-step ${cls}"><strong>${i+1}. ${h.label}</strong><div class="muted">${label}</div></div>`}).join("")}</div>
 <div class="card" style="margin-top:14px"><div class="metric-label">Coach</div><p class="quote">“${s.coach}”</p></div>
 <div class="flex" style="margin-top:14px"><button class="btn-primary" id="retry">Retry Scenario</button><button class="btn-secondary" data-nav="dashboard">Dashboard</button></div>`;
}
function runTest(key){
 const s=scenarios[state.scenarioId], t=s.tests[key];
 if(!t) return;
 if(!t.energized && !state.loto){
   alert("Apply LOTO and verify zero energy before this de-energized test.");
   return;
 }
 state.history.push({...t,key});
 render();
}
function interpretCommand(raw){
 const s=scenarios[state.scenarioId], q=raw.toLowerCase().trim();
 if(!q) return null;
 for(const [key,phrases] of Object.entries(s.intents)){
   if(phrases.some(p=>q.includes(p))) return key;
 }
 return null;
}
function bind(){
 document.querySelectorAll("[data-nav]").forEach(b=>b.addEventListener("click",()=>{state.page=b.dataset.nav; render();}));
 document.querySelectorAll("[data-start]").forEach(b=>b.addEventListener("click",()=>{state.scenarioId=b.dataset.start;state.page="brief";state.history=[];state.loto=false;render();}));
 const begin=document.querySelector("[data-begin]"); if(begin) begin.addEventListener("click",()=>{state.page="sim";render();});
 document.querySelectorAll("[data-test]").forEach(b=>b.addEventListener("click",()=>runTest(b.dataset.test)));
 const loto=document.getElementById("lotoBtn"); if(loto) loto.addEventListener("click",()=>{state.loto=true;render();});
 document.querySelectorAll("[data-cmd]").forEach(b=>b.addEventListener("click",()=>{document.getElementById("cmd").value=b.dataset.cmd;}));
 const check=document.getElementById("checkCmd");
 if(check) check.addEventListener("click",()=>{
   const input=document.getElementById("cmd"), key=interpretCommand(input.value), msg=document.getElementById("cmdMsg");
   if(!key){ msg.textContent="I couldn't match that request yet. Try different wording or use an available test tool."; return; }
   runTest(key);
 });
 const confirm=document.getElementById("confirmDiag");
 if(confirm) confirm.addEventListener("click",()=>{
   const data={diag:document.getElementById("diag").value,evidence:document.getElementById("evidence").value,repair:document.getElementById("repair").value,verify:document.getElementById("verify").value};
   if(!data.diag.trim()){alert("Enter your diagnosis first.");return;}
   const s=scenarios[state.scenarioId], score=scoreSubmission(s,data);
   state.lastDebrief={data,score};
   state.completed.push({id:s.id,score:score.total,date:new Date().toISOString()});
   saveCompleted();
   state.page="debrief"; render();
 });
 const retry=document.getElementById("retry"); if(retry) retry.addEventListener("click",()=>{state.history=[];state.loto=false;state.page="brief";render();});
}
render();
