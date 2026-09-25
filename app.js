
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
      inspect:["inspect contactor","inspect the contactor","check contactor","check the contactor","look at contactor","contactor operation"],
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
      wiring:["inspect terminals","inspect the terminals","check terminals","check the terminals","control wiring","loose wires","inspect wiring","check wiring","look at wiring"],
      connr:["resistance across connection","terminal resistance","connection resistance"]
    }
  },
  "FM-ELEC-003": {
    id:"FM-ELEC-003",
    name:"VFD Trips Under Load",
    difficulty:"Senior Technician",
    equipment:["Conveyor CV-303","5.5 kW 3-phase induction motor","Variable Frequency Drive"],
    complaint:"Conveyor CV-303 starts and accelerates normally, but after product is loaded the drive trips on overcurrent. Operators report the fault is becoming more frequent.",
    rootCause:"Mechanical binding on the conveyor causing excessive motor current under load",
    repair:"Safely isolate the conveyor, locate and correct the mechanical binding or seized component, verify free movement, then return the system to service without masking the fault by increasing current limits.",
    verification:["Conveyor moves freely by hand where safe and applicable","VFD starts without overcurrent trip","Motor current remains balanced and within expected range","Conveyor runs at normal speed","Conveyor operates under production load without abnormal noise or heating"],
    coach:"A drive fault code is evidence, not always the root cause. Confirm whether the electrical system is reacting correctly to a mechanical problem.",
    tests: {
      incoming:{label:"Check incoming supply voltage", group:"Power checks", result:"L1-L2 = 480 V · L2-L3 = 481 V · L1-L3 = 480 V. Supply is balanced.", state:"normal", energized:true, value:6},
      fault:{label:"Read VFD fault history", group:"Drive checks", result:"Repeated overcurrent trips occur during loaded operation.", state:"abnormal", energized:true, value:13},
      current_noload:{label:"Measure motor current with conveyor empty", group:"Drive checks", result:"Motor current is 4.1 A, 4.0 A, 4.1 A — normal for unloaded operation.", state:"normal", energized:true, value:14},
      current_load:{label:"Measure motor current under load", group:"Drive checks", result:"Motor current rises rapidly above normal operating range as product load increases, immediately before trip.", state:"abnormal", energized:true, value:18},
      freq:{label:"Check commanded and output frequency", group:"Drive checks", result:"Commanded frequency = 50 Hz. Output frequency tracks command normally until the overcurrent trip.", state:"normal", energized:true, value:10},
      params:{label:"Check VFD motor data / current limit settings", group:"Drive checks", result:"Motor nameplate data and drive current limits are configured correctly.", state:"normal", energized:true, value:9},
      motorres:{label:"Check motor winding resistance", group:"Motor checks", result:"Motor phase resistances are balanced and within expected range.", state:"normal", energized:false, value:6},
      insulation:{label:"Check motor insulation condition", group:"Motor checks", result:"Insulation test results are acceptable.", state:"normal", energized:false, value:5},
      rotate:{label:"Check conveyor / drivetrain for free movement", group:"Mechanical checks", result:"With the system safely isolated, the conveyor is unusually difficult to move. Resistance is felt in the drive section.", state:"abnormal", energized:false, value:20},
      inspectmech:{label:"Inspect bearings, gearbox and conveyor drive", group:"Mechanical checks", result:"A seized / binding conveyor support bearing is found, creating excessive mechanical load.", state:"abnormal", energized:false, value:20}
    },
    intents: {
      incoming:["incoming supply","supply voltage","line voltage","incoming voltage"],
      fault:["fault history","vfd fault","drive fault","fault code"],
      current_noload:["current empty","no load current","unloaded current","motor current no load"],
      current_load:["current under load","loaded current","motor current loaded","amps under load"],
      freq:["output frequency","command frequency","hz","frequency"],
      params:["drive parameters","motor data","current limit","vfd settings"],
      motorres:["motor winding resistance","motor resistance","ohm motor"],
      insulation:["insulation","megger","megohm"],
      rotate:["free movement","turn conveyor","rotate conveyor","mechanical resistance","check binding"],
      inspectmech:["inspect bearings","inspect gearbox","inspect conveyor","mechanical inspection","check bearings"]
    }
  },

  "FM-PLC-001": {
    id:"FM-PLC-001",
    name:"Conveyor Ready But Will Not Start",
    difficulty:"Senior Technician",
    equipment:["Conveyor CV-401","PLC-controlled starter","Downstream photoelectric sensor PE-407"],
    complaint:"CV-401 shows READY locally, but pressing START does nothing. The PLC is in RUN and there are no active drive or overload faults.",
    rootCause:"Downstream photoelectric sensor PE-407 is stuck in the blocked state, preventing the PLC start permissive",
    repair:"Inspect, clean and realign PE-407. Replace the sensor or repair its wiring if the blocked state remains incorrect, then confirm the PLC input changes correctly.",
    verification:["PE-407 changes state correctly when the beam is blocked and cleared","PLC input follows the sensor state","Start permissive becomes true","PLC output energizes when START is commanded","Conveyor starts and sequence operates normally"],
    coach:"When an output is not commanded, prove the permissives and inputs before blaming the PLC output card or starter.",
    tests: {
      plc_run:{label:"Check PLC operating state", group:"PLC checks", result:"PLC is in RUN with no controller fault.", state:"normal", energized:true, value:6},
      start:{label:"Check START pushbutton / HMI command", group:"PLC checks", result:"START command is received by the PLC.", state:"normal", energized:true, value:10},
      output:{label:"Check PLC conveyor output command", group:"PLC checks", result:"PLC output command to CV-401 is OFF because the sequence permissive is not satisfied.", state:"abnormal", energized:true, value:15},
      permissive:{label:"Check conveyor start permissives", group:"PLC checks", result:"One downstream-clear permissive is FALSE.", state:"abnormal", energized:true, value:18},
      sensor_input:{label:"Check PE-407 PLC input state", group:"Sensor checks", result:"PE-407 input indicates BLOCKED continuously, even though the conveyor path appears clear.", state:"abnormal", energized:true, value:20},
      sensor_led:{label:"Inspect PE-407 sensor indication", group:"Sensor checks", result:"Sensor output LED remains ON with no product in the beam.", state:"abnormal", energized:true, value:17},
      clean:{label:"Inspect sensor lens / alignment", group:"Sensor checks", result:"PE-407 lens is dirty and the reflector alignment is marginal.", state:"abnormal", energized:false, value:18},
      wiring:{label:"Check sensor supply and wiring", group:"Sensor checks", result:"24 VDC sensor supply and wiring continuity are normal.", state:"normal", energized:true, value:9},
      starter:{label:"Check motor starter / VFD ready state", group:"Output checks", result:"Starter / drive is healthy and ready but receives no run command.", state:"normal", energized:true, value:8},
      motor:{label:"Check motor winding condition", group:"Output checks", result:"Motor winding condition is healthy.", state:"normal", energized:false, value:2}
    },
    intents: {
      plc_run:["plc run","controller state","plc status"],
      start:["start command","pushbutton","hmi start","start input"],
      output:["plc output","output command","conveyor output"],
      permissive:["permissive","interlock","start permissives","sequence permissive"],
      sensor_input:["pe-407 input","photoeye input","sensor input","photoelectric input"],
      sensor_led:["sensor led","photoeye led","inspect sensor","sensor indication"],
      clean:["sensor lens","alignment","reflector","clean sensor","inspect alignment"],
      wiring:["sensor wiring","24v sensor","sensor supply","photoeye wiring"],
      starter:["starter ready","vfd ready","drive ready","motor starter"],
      motor:["motor winding","motor resistance","check motor"]
    }
  },

  "FM-INST-001": {
    id:"FM-INST-001",
    name:"Tank Level Reading Stuck High",
    difficulty:"Engineer",
    equipment:["Process Tank TK-510","4–20 mA level transmitter LT-510","PLC analog input"],
    complaint:"The HMI shows tank level at approximately 92% even after the tank has been drained. Operators report the reading occasionally jumps before returning high.",
    rootCause:"Open / intermittent 4–20 mA signal return connection causing the PLC analog input to hold an invalid high reading",
    repair:"Safely inspect the transmitter loop, repair and secure the faulty signal return termination, replace damaged conductor or terminal hardware if required, and confirm loop integrity.",
    verification:["Loop current changes smoothly with tank level","PLC raw analog value tracks loop current","HMI level scales correctly from low to high","No intermittent jumps occur during wiring movement test","Alarm and control actions respond correctly to actual level"],
    coach:"Separate process condition, transmitter output, loop wiring and PLC scaling. Measure the signal at multiple points instead of assuming the transmitter is bad.",
    tests: {
      actual:{label:"Verify actual tank level", group:"Process checks", result:"Tank is physically near empty. The 92% HMI indication is incorrect.", state:"abnormal", energized:true, value:12},
      supply:{label:"Check transmitter loop supply", group:"Loop checks", result:"Loop supply = 24.1 VDC — normal.", state:"normal", energized:true, value:8},
      current_tx:{label:"Measure loop current at transmitter", group:"Loop checks", result:"At the transmitter terminals, loop current is approximately 4.3 mA, consistent with near-empty level.", state:"normal", energized:true, value:18},
      current_plc:{label:"Measure loop current at PLC cabinet", group:"Loop checks", result:"Current is unstable / intermittent at the PLC cabinet and does not consistently match the transmitter output.", state:"abnormal", energized:true, value:20},
      raw:{label:"Check PLC raw analog input value", group:"PLC / scaling checks", result:"Raw input value is unstable and sometimes saturates high.", state:"abnormal", energized:true, value:14},
      scaling:{label:"Check PLC scaling configuration", group:"PLC / scaling checks", result:"4–20 mA scaling configuration is correct.", state:"normal", energized:true, value:8},
      txconfig:{label:"Check transmitter range configuration", group:"Instrument checks", result:"Transmitter range and calibration settings are correct.", state:"normal", energized:true, value:7},
      terminals:{label:"Inspect signal wiring and terminations", group:"Loop checks", result:"A loose / partially open signal return termination is found at a junction point.", state:"abnormal", energized:false, value:20},
      continuity:{label:"Check signal return continuity", group:"Loop checks", result:"Signal return shows intermittent open circuit when the wire / terminal is moved.", state:"abnormal", energized:false, value:20},
      replace_tx:{label:"Substitute / inspect transmitter condition", group:"Instrument checks", result:"No evidence of transmitter failure; local output remains stable.", state:"normal", energized:true, value:3}
    },
    intents: {
      actual:["actual tank level","physical level","verify level","tank empty"],
      supply:["loop supply","24v supply","transmitter supply"],
      current_tx:["current at transmitter","loop current transmitter","ma at transmitter"],
      current_plc:["current at plc","loop current plc","ma at plc","signal at plc"],
      raw:["raw analog","analog input raw","plc raw value"],
      scaling:["scaling","analog scaling","4-20 scaling"],
      txconfig:["transmitter range","transmitter configuration","calibration settings"],
      terminals:["inspect signal wiring","inspect terminals","signal termination","loose wire"],
      continuity:["signal continuity","return continuity","check continuity","open circuit signal"],
      replace_tx:["inspect transmitter","check transmitter","substitute transmitter"]
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
function normalizeTechText(text){
  return (text || "")
    .toLowerCase()
    .replace(/[^\w\s.-]/g," ")
    .replace(/\s+/g," ")
    .trim();
}

const techConcepts = {
  failedContactorCoil: [
    "failed contactor coil","faulty contactor coil","bad contactor coil","open contactor coil",
    "open coil","coil open","contactor coil open","defective contactor coil",
    "contactor failed because coil","failed contactor"
  ],
  openCircuitEvidence: [
    "ol","o.l","open circuit","no continuity","infinite resistance","open resistance","coil open"
  ],
  replaceContactor: [
    "replace contactor","replace the contactor","replace coil","replace contactor coil",
    "change contactor","change the contactor","same rating","correct rating","correctly rated"
  ],
  highResistanceJoint: [
    "high resistance","high-resistance","loose terminal","loose termination","loose connection",
    "loose wire","poor termination","poor connection","bad connection","bad termination",
    "hot joint","hot connection","burnt terminal","burned terminal","discolored terminal",
    "discoloured terminal","voltage drop","resistive connection","resistive termination"
  ],
  reterminateRepair: [
    "reterminate","re-terminate","re terminate","tighten terminal","tighten connection",
    "repair termination","repair connection","replace terminal","replace conductor",
    "replace damaged wire","cut bad section","cut the bad section","strip back wire",
    "torque terminal","torque connection","secure terminal","secure connection"
  ],
  contactorPullIn: ["pull in","pulls in","engage","engages","energize","energizes","no chatter","without chatter","cleanly"],
  motorStarts: ["motor starts","motor start","starts normally","runs normally","remains running","motor runs"],
  voltageCheck: ["coil voltage","rated voltage","120 vac","120v","voltage at coil","voltage coming to the contactor","voltage on contactor","check voltage"],
  rotation: ["rotation","correct direction","direction of rotation"],
  current: ["running current","motor current","amps","amp draw","current balance","balanced current"],
  loadCheck: ["under load","conveyor runs","conveyor operates","run conveyor","normal load","production load"],
  heatCheck: ["heat","temperature","thermal","hot spot","hot joint","overheating"],
  mechanicalBinding: [
    "mechanical binding","binding conveyor","seized bearing","bad bearing","bearing seized",
    "mechanical overload","conveyor binding","drivetrain binding","stiff conveyor","hard to turn"
  ],
  repairMechanical: [
    "replace bearing","repair bearing","free the conveyor","correct binding","remove binding",
    "repair mechanical","replace seized bearing","fix bearing","repair drivetrain"
  ],
  blockedSensor: [
    "photoeye stuck","sensor stuck","stuck blocked","blocked sensor","photoelectric sensor",
    "pe-407","dirty sensor","misaligned sensor","sensor blocked"
  ],
  repairSensor: [
    "clean sensor","clean photoeye","realign sensor","align reflector","replace sensor",
    "repair sensor wiring","clean lens","realign reflector"
  ],
  openSignalReturn: [
    "open signal return","intermittent return","loose signal return","open loop wire",
    "intermittent signal wire","loose termination","signal return","4-20 loop open",
    "loop wiring fault","intermittent open"
  ],
  repairSignalLoop: [
    "repair termination","reterminate","tighten terminal","replace conductor",
    "repair signal wire","repair loop wiring","secure terminal","replace terminal"
  ]
};

function matchesConcept(text, conceptName){
  const t = normalizeTechText(text);
  const phrases = techConcepts[conceptName] || [];
  return phrases.some(p => t.includes(normalizeTechText(p)));
}

function evidenceStrength(s, data){
  let pts = 0;
  const e = normalizeTechText(data.evidence);

  if(s.id==="FM-ELEC-001"){
    if(matchesConcept(e,"openCircuitEvidence")) pts += 8;
    if(e.includes("120") || e.includes("voltage") || e.includes("coil")) pts += 4;
    if(e.includes("does not pull") || e.includes("not pull") || e.includes("contactor")) pts += 3;

  } else if(s.id==="FM-ELEC-002"){
    if(matchesConcept(e,"highResistanceJoint")) pts += 7;
    if(e.includes("discolor") || e.includes("discolour") || e.includes("heat")) pts += 4;
    if(e.includes("74") || e.includes("68") || e.includes("78") || e.includes("voltage drop")) pts += 3;
    if(e.includes("loose") || e.includes("termination") || e.includes("terminal")) pts += 3;

  } else if(s.id==="FM-ELEC-003"){
    if(e.includes("current") || e.includes("amp")) pts += 4;
    if(e.includes("load") || e.includes("loaded")) pts += 3;
    if(e.includes("binding") || e.includes("seized") || e.includes("bearing")) pts += 6;
    if(e.includes("empty") || e.includes("no load")) pts += 2;

  } else if(s.id==="FM-PLC-001"){
    if(e.includes("permissive") || e.includes("interlock")) pts += 4;
    if(e.includes("sensor") || e.includes("photoeye") || e.includes("pe-407")) pts += 5;
    if(e.includes("blocked") || e.includes("stuck")) pts += 4;
    if(e.includes("plc input") || e.includes("output")) pts += 2;

  } else if(s.id==="FM-INST-001"){
    if(e.includes("4.3") || e.includes("ma") || e.includes("loop current")) pts += 4;
    if(e.includes("transmitter") && e.includes("normal")) pts += 3;
    if(e.includes("plc") || e.includes("cabinet")) pts += 3;
    if(e.includes("intermittent") || e.includes("open") || e.includes("loose")) pts += 5;
  }

  return Math.min(15, pts);
}

function scoreSubmission(s, data){
 let safety=20;
 const unsafeDeenergized = state.history.some(h=>!h.energized && !state.loto);
 if(unsafeDeenergized) safety=4;
 else if(!state.loto && state.history.some(h=>!h.energized)) safety=8;

 let root=0, tech=0, verify=0;
 const diag = normalizeTechText(data.diag);
 const repairText = normalizeTechText(data.repair);
 const verifyText = normalizeTechText(data.verify);

 if(s.id==="FM-ELEC-001"){
   if(matchesConcept(diag,"failedContactorCoil")) root=15;
   else if(diag.includes("contactor") || diag.includes("coil")) root=10;

   if(matchesConcept(repairText,"replaceContactor")) tech=15;
   else if(repairText.includes("replace") && (repairText.includes("coil") || repairText.includes("contactor"))) tech=12;

   verify += matchesConcept(verifyText,"contactorPullIn")?2:0;
   verify += matchesConcept(verifyText,"motorStarts")?2:0;
   verify += matchesConcept(verifyText,"voltageCheck")?2:0;
   verify += matchesConcept(verifyText,"rotation")?1:0;
   verify += matchesConcept(verifyText,"current")?1:0;
   verify += matchesConcept(verifyText,"loadCheck")?2:0;

 } else if(s.id==="FM-ELEC-002"){
   if(matchesConcept(diag,"highResistanceJoint")) root=15;
   else if(diag.includes("control circuit") || diag.includes("termination") || diag.includes("terminal") || diag.includes("connection")) root=11;

   if(matchesConcept(repairText,"reterminateRepair")) tech=15;
   else if(repairText.includes("tight") || repairText.includes("repair") || repairText.includes("replace")) tech=10;

   verify += matchesConcept(verifyText,"contactorPullIn")?2:0;
   verify += matchesConcept(verifyText,"voltageCheck")?2:0;
   verify += matchesConcept(verifyText,"motorStarts")?2:0;
   verify += matchesConcept(verifyText,"current")?1:0;
   verify += matchesConcept(verifyText,"loadCheck")?2:0;
   verify += matchesConcept(verifyText,"heatCheck")?1:0;

 } else if(s.id==="FM-ELEC-003"){
   if(matchesConcept(diag,"mechanicalBinding")) root=15;
   else if(diag.includes("mechanical") || diag.includes("bearing") || diag.includes("binding")) root=11;

   if(matchesConcept(repairText,"repairMechanical")) tech=15;
   else if(repairText.includes("replace") || repairText.includes("repair")) tech=10;

   verify += (verifyText.includes("free") || verifyText.includes("turn") || verifyText.includes("rotate"))?2:0;
   verify += (verifyText.includes("vfd") && (verifyText.includes("trip") || verifyText.includes("fault")))?2:0;
   verify += matchesConcept(verifyText,"current")?2:0;
   verify += matchesConcept(verifyText,"motorStarts")?1:0;
   verify += matchesConcept(verifyText,"loadCheck")?2:0;
   verify += matchesConcept(verifyText,"heatCheck")?1:0;

 } else if(s.id==="FM-PLC-001"){
   if(matchesConcept(diag,"blockedSensor")) root=15;
   else if(diag.includes("sensor") || diag.includes("photoeye") || diag.includes("pe-407")) root=11;

   if(matchesConcept(repairText,"repairSensor")) tech=15;
   else if(repairText.includes("clean") || repairText.includes("align") || repairText.includes("replace")) tech=10;

   verify += (verifyText.includes("sensor") && (verifyText.includes("change") || verifyText.includes("toggle") || verifyText.includes("state")))?2:0;
   verify += (verifyText.includes("plc input") || verifyText.includes("input"))?2:0;
   verify += (verifyText.includes("permissive") || verifyText.includes("interlock"))?2:0;
   verify += (verifyText.includes("plc output") || verifyText.includes("output"))?2:0;
   verify += (verifyText.includes("conveyor") || verifyText.includes("start"))?2:0;

 } else if(s.id==="FM-INST-001"){
   if(matchesConcept(diag,"openSignalReturn")) root=15;
   else if(diag.includes("signal") || diag.includes("loop") || diag.includes("termination") || diag.includes("wire")) root=11;

   if(matchesConcept(repairText,"repairSignalLoop")) tech=15;
   else if(repairText.includes("repair") || repairText.includes("tighten") || repairText.includes("replace")) tech=10;

   verify += (verifyText.includes("loop current") || verifyText.includes("ma"))?2:0;
   verify += (verifyText.includes("raw") || verifyText.includes("plc input"))?2:0;
   verify += (verifyText.includes("hmi") || verifyText.includes("scale"))?2:0;
   verify += (verifyText.includes("jump") || verifyText.includes("intermittent") || verifyText.includes("move wire"))?2:0;
   verify += (verifyText.includes("alarm") || verifyText.includes("control action") || verifyText.includes("level"))?2:0;
 }

 let reasoning=0;
 const ids=state.history.map(h=>h.key);
 const unique=new Set(ids);
 const valueSum=state.history.reduce((sum,h)=>sum+(s.tests[h.key].value||0),0);
 reasoning=Math.min(25, Math.round(valueSum/4));

 if(s.id==="FM-ELEC-001" && unique.has("coilv") && unique.has("coilr") && unique.has("inspect")) reasoning=Math.max(reasoning,23);
 if(s.id==="FM-ELEC-002" && unique.has("coilv") && unique.has("upstream") && unique.has("downstream")) reasoning=Math.max(reasoning,24);
 if(s.id==="FM-ELEC-002" && unique.has("wiring") && (unique.has("downstream") || unique.has("coilv"))) reasoning=Math.max(reasoning,22);
 if(s.id==="FM-ELEC-003" && unique.has("current_load") && unique.has("rotate")) reasoning=Math.max(reasoning,23);
 if(s.id==="FM-PLC-001" && unique.has("output") && unique.has("permissive") && unique.has("sensor_input")) reasoning=Math.max(reasoning,24);
 if(s.id==="FM-INST-001" && unique.has("current_tx") && unique.has("current_plc") && unique.has("terminals")) reasoning=Math.max(reasoning,24);

 reasoning=Math.min(25, Math.max(reasoning, 10 + evidenceStrength(s,data)));

 let efficiency=15;
 const repeats=ids.length-unique.size;
 efficiency-=Math.min(6,repeats*2);

 if(s.id==="FM-ELEC-001" && unique.has("motor") && unique.has("coilv") && unique.has("inspect")) efficiency-=2;
 if(s.id==="FM-ELEC-002" && unique.has("motor") && unique.has("coilv") && unique.has("downstream")) efficiency-=3;
 if(s.id==="FM-ELEC-003" && unique.has("motorres") && unique.has("insulation") && unique.has("rotate")) efficiency-=1;
 if(s.id==="FM-PLC-001" && unique.has("motor") && unique.has("sensor_input")) efficiency-=3;
 if(s.id==="FM-INST-001" && unique.has("replace_tx") && unique.has("current_tx") && unique.has("current_plc")) efficiency-=3;

 efficiency=Math.max(5,efficiency);

 const total=safety+reasoning+efficiency+tech+root+verify;
 return {safety, reasoning, efficiency, tech, root, verify, total};
}

function pathClassification(s,h,index){
 if(!h.energized) return state.loto?["safety","Safety-critical action"]:["unnecessary","Unsafe / isolation required"];

 const strongByScenario = {
   "FM-ELEC-001":["inspect","coilv","coilr","start","incoming","control"],
   "FM-ELEC-002":["inspect","coilv","upstream","downstream","wiring","txload"],
   "FM-ELEC-003":["fault","current_noload","current_load","rotate","inspectmech"],
   "FM-PLC-001":["start","output","permissive","sensor_input","sensor_led","clean"],
   "FM-INST-001":["actual","current_tx","current_plc","raw","terminals","continuity"]
 };
 if((strongByScenario[s.id] || []).includes(h.key)) return ["strong","Strong decision"];

 const reasonableKeys = ["overload","estop","plc","txpri","txsec","incoming","params","wiring","starter","plc_run","supply","scaling","txconfig"];
 if(reasonableKeys.includes(h.key)) return ["reasonable","Reasonable check"];

 const lowByScenario = {
   "FM-ELEC-001":["motor"],
   "FM-ELEC-002":["motor"],
   "FM-ELEC-003":[],
   "FM-PLC-001":["motor"],
   "FM-INST-001":["replace_tx"]
 };
 if((lowByScenario[s.id] || []).includes(h.key)) return ["unnecessary","Low-value at this stage"];

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
function normalizeIntentText(text){
  const stopWords = new Set([
    "the","a","an","please","can","could","would","you","i","we",
    "to","of","at","on","for","my","this","that","is","are","be"
  ]);
  return normalizeTechText(text)
    .split(" ")
    .filter(Boolean)
    .filter(word => !stopWords.has(word));
}

function intentPhraseMatches(query, phrase){
  const qTokens = normalizeIntentText(query);
  const pTokens = normalizeIntentText(phrase);

  if(!qTokens.length || !pTokens.length) return false;

  // Natural wording may insert words or reverse common noun/adjective order.
  // Match when every meaningful phrase token is present in the user's request.
  return pTokens.every(token => qTokens.includes(token));
}

function interpretCommand(raw){
 const s=scenarios[state.scenarioId], q=raw.trim();
 if(!q) return null;

 for(const [key,phrases] of Object.entries(s.intents)){
   if(phrases.some(p => intentPhraseMatches(q,p))) return key;
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
