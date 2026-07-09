/* ============ DATEN ============ */
/* Weitere Begriffspaare oder ganze Kategorien lassen sich hier einfach ergänzen. */
const CATEGORIES = {
  alltag: { label:"Alltag & Gefühle", pairs:[
    ["Warm","Kalt"],["Laut","Leise"],["Einfach","Kompliziert"],["Billig","Teuer"],
    ["Langweilig","Aufregend"],["Sicher","Riskant"],["Bekannt","Unbekannt"],["Gesund","Ungesund"],
    ["Schnell","Langsam"],["Alt","Neu"],["Weich","Hart"],["Süß","Sauer"],
    ["Trocken","Feucht"],["Hell","Dunkel"],["Nah","Fern"],["Voll","Leer"],
    ["Schwer","Leicht"],["Sauber","Schmutzig"],["Ruhig","Chaotisch"],["Frisch","Abgestanden"],
    ["Eng","Weit"],["Stark","Schwach"],["Klein","Riesig"],["Nützlich","Nutzlos"],
    ["Bequem","Unbequem"],["Modern","Altmodisch"],["Glatt","Rau"],["Formell","Leger"],
    ["Kompakt","Sperrig"],["Niedlich","Gruselig"],["Entspannend","Stressig"],
    ["Unvergesslich","Sofort vergessen"],["Macht wach","Macht müde"],["Riecht gut","Riecht übel"],
    ["Fade","Würzig"],["Fühlt sich teuer an","Fühlt sich billig an"],["Praktisch","Umständlich"],
    ["Alterslos","Schnell abgenutzt"],["Kleine Freude","Große Euphorie"],["Kurzer Ärger","Langer Frust"],
    ["Morgenmensch-Ding","Nachtmensch-Ding"],["Sommer-Ding","Winter-Ding"],["Gute Laune","Miese Laune"],
    ["Fühlt sich sicher an","Fühlt sich riskant an"],["Kinderleicht","Zum Verzweifeln"],
    ["Angenehm laut","Nervig laut"],["Beruhigend","Aufwühlend"],["Wie neu","Wie ewig benutzt"],
    ["Handlich","Sperrig"],["Sofort sympathisch","Braucht Gewöhnung"],["Aufgeräumt","Chaotisch"],
    ["Schnell erklärt","Ewig kompliziert"],["Leicht sauberzuhalten","Ewige Putzarbeit"],
    ["Urlaubsgefühl","Montagsgefühl"],["Regen-Ding","Sonnen-Ding"],["Macht lang satt","Macht kurz satt"],
    ["Riecht nach früher","Riecht nach heute"],["Angenehme Stille","Unangenehme Stille"],
    ["Gemütlich eng","Ungemütlich eng"],["Für Frühaufsteher","Für Nachteulen"],
    ["Leicht zu tragen","Schwer zu heben"],["Leise Genugtuung","Lauter Triumph"],
    ["Angenehme Wärme","Drückende Hitze"],["Erfrischend kalt","Unangenehm kalt"]
  ]},
  meinungen: { label:"Meinungen & Geschmack", pairs:[
    ["Unterschätzt","Überschätzt"],["Zeitverschwendung","Zeit gut investiert"],
    ["Trend von gestern","Trend von morgen"],["Kultstatus","Längst vergessen"],
    ["Style-Ikone","Fashion-Fauxpas"],["Perfekt fürs erste Date","No-Go fürs erste Date"],
    ["Guilty Pleasure","Ehrlich einfach gut"],["Instagram-tauglich","Lieber verstecken"],
    ["Geldverschwendung","Jeden Cent wert"],["Für Anfänger","Nur für Profis"],
    ["Sollte jeder kennen","Kennt eh keiner"],["Würde ich weiterempfehlen","Würde ich nie empfehlen"],
    ["Typisch deutsch","Absolut untypisch"],["Perfekt für den Urlaub","Nur für zuhause"],
    ["Macht süchtig","Wird schnell langweilig"],["Klassiker","Eintagsfliege"],
    ["Peinlich","Cool"],["Übertrieben gehyped","Zu Unrecht ignoriert"],
    ["Nur für Kinder","Nur für Erwachsene"],["Sollte verboten werden","Sollte Pflicht sein"],
    ["Perfektes Geschenk","Lieber nicht verschenken"],["Zeitlos","Schon wieder out"],
    ["Luxus","Kann man sich sparen"],["Weltklasse","Mittelmaß"],["Immer ein Erfolg","Geht oft schief"],
    ["Sollte man öfter machen","Einmal reicht"],["Fühlt sich verboten an","Total harmlos"],
    ["Macht sofort süchtig","Braucht Anlauf"],["Statement-Piece","Lieber unauffällig"],
    ["Perfekt für Social Media","Lieber privat halten"],["Würde ich stundenlang machen","Nach 5 Minuten genug"],
    ["Sollte Trend bleiben","Sollte aussterben"],["Immer eine gute Idee","Selten eine gute Idee"],
    ["Macht neidisch","Lässt kalt"],["Erzählt man gern weiter","Behält man für sich"],
    ["Reine Zeitverschwendung","Bildet ungemein"],["Absolute Pflicht","Komplett überflüssig"],
    ["Zu Recht gefeiert","Zu Unrecht gefeiert"],["Verdient jeden Hype","Nicht mal halb so gut"],
    ["Immer einen Versuch wert","Einmal reicht für immer"],["Perfekt zum Angeben","Lieber verschweigen"],
    ["Comeback verdient","Sollte vergessen bleiben"],["Bringt Bonuspunkte","Bringt Minuspunkte"],
    ["Erste Wahl","Letzte Option"],["Würde niemand vermissen","Würde jeder vermissen"],
    ["Typisch für Anfänger","Typisch für Profis"],["Perfektes Small-Talk-Thema","Absolutes Tabuthema"],
    ["Rechtfertigt den Preis","Nie im Leben den Preis wert"],["Macht sympathisch","Macht unsympathisch"],
    ["Sollte Pflichtfach sein","Sollte verboten sein"],["Klassischer Fehlkauf","Beste Entscheidung ever"],
    ["Bringt Respekt ein","Bringt Spott ein"],["Lohnt sich sofort","Lohnt sich nie"],
    ["Würde ich sofort wieder tun","Nie wieder"],["Ehrlich gesagt peinlich","Ehrlich gesagt stolz drauf"],
    ["Lieber heimlich genießen","Stolz zeigen"],["Steckt an","Nervt sofort"],
    ["Rentiert sich langfristig","Rausgeschmissenes Geld"],["Macht den Unterschied","Fällt niemandem auf"],
    ["Absoluter Gamechanger","Komplett überschätzt"]
  ]},
  pop: { label:"Pop & Trends", pairs:[
    ["Nächster großer Trend","Schon wieder vorbei"],["Geht viral","Geht komplett unter"],
    ["Jeder kennt's","Keiner kennt's"],["Story-würdig","Lieber nicht posten"],
    ["Bald überall zu sehen","Bald vergessen"],["Kultstatus garantiert","Direkt in Vergessenheit"],
    ["Merch-würdig","Braucht keinen Merch"],["Perfekte Playlist-Ergänzung","Sofort skippen"],
    ["Binge-würdig","Nach Folge eins abbrechen"],["Sehenswert","Zeitverschwendung"],
    ["Dokumentation-tauglich","Zu langweilig für eine Doku"],["Award-verdächtig","Chancenlos"],
    ["Trend von morgen","Trend von vorgestern"],["Comeback-Potenzial","Für immer vorbei"],
    ["Perfekter Ohrwurm","Sofort wieder vergessen"],["Würde im Museum stehen","Gehört in den Müll"],
    ["Ikonisch","Direkt uninteressant"],["Tolles Kostüm für Halloween","Niemand würde es erkennen"],
    ["Sammlerstück","Zum Verschenken"],["Fühlt sich zeitlos an","Fühlt sich schon jetzt alt an"],
    ["Wartezimmer-Lektüre","Kinosaal-Erlebnis"],["Sofort erkennbar","Braucht drei Erklärungen"],
    ["Würde Schlagzeilen machen","Interessiert niemanden"],["Perfekter Insider-Tipp","Schon jeder kennt's"],
    ["Gute Wahl fürs erste Date","No-Go fürs erste Date"],["Geschenk für Fremde","Nur für beste Freunde"],
    ["T-Shirt-würdig","Würde ich verstecken"],["WG-Party-Ding","Eher was für Zuhause allein"],
    ["Bringt Straßenkredibilität","Bringt Spott"],["Nostalgie pur","Fühlt sich fremd an"],
    ["Familienabend-tauglich","Nur was für Erwachsene"],["Würde in jedem Quiz vorkommen","Kennt kein Mensch"],
    ["Braucht eine Fortsetzung","Sollte so bleiben, wie es ist"],["Läuft in jeder Bar","Läuft nirgends"],
    ["Merkt sich sofort jeder","Vergisst man sofort wieder"],["Repost-würdig","Würde ich löschen"],
    ["Titelgeschichte","Nicht mal eine Randnotiz"],["Bringt Klicks","Bringt niemanden hinterm Ofen vor"],
    ["Kühlschrank-Magnet-Ding","Landet im Müll"],["Tattoo-würdig","Niemals dauerhaft"],
    ["Zeitkapsel-würdig","Sollte niemand je wiedersehen"],["Läuft auf jeder Hochzeit","Leert sofort die Tanzfläche"],
    ["Vorstellungsgespräch-tauglich","Absolut fehl am Platz"],["Stundenlang scrollen","Nach 10 Sekunden weg"],
    ["Gehört in jeden Haushalt","Braucht wirklich niemand"],["Kinderaugen zum Leuchten bringen","Nur was für Erwachsene"],
    ["Visitenkarten-würdig","Würde ich verschweigen"],["Perfekter Sommerhit","Perfekter Winter-Blues-Song"],
    ["Bleibt für immer im Kopf","Direkt wieder vergessen"],["Klassentreffen-Neuigkeit","Lieber niemandem erzählen"],
    ["Sofort ausverkauft","Würde niemand kaufen"],["Vereinsabend-Stimmung","Nur was für Solo-Momente"],
    ["Läuft im Radio rauf und runter","Kennt kein Sender"],["Zitierwürdig","Sofort wieder vergessen"],
    ["Stundenlange Diskussion wert","Interessiert mich nicht die Bohne"],["Perfekter Wochenend-Ausflug","Lieber für zuhause"],
    ["Bringt sofort gute Stimmung","Sorgt für betretenes Schweigen"],["Homepage-würdig","Gehört ins Archiv"],
    ["Erzählt man gern weiter","Behält man lieber für sich"],["Absolute Empfehlung","Würde ich niemandem antun"]
  ]},
  menschen: { label:"Menschen & Beziehungen", pairs:[
    ["Perfekter erster Eindruck","Vergessen nach 5 Minuten"],["Traumpartner-Eigenschaft","Absoluter Dealbreaker"],
    ["Lockert jedes Gespräch","Sorgt sofort für Stille"],["Bester-Freund-Material","Lieber auf Abstand halten"],
    ["Traumchef-Eigenschaft","Albtraum als Chef"],["Zieht Menschen an","Schreckt Menschen ab"],
    ["Passt zur Familie","Nur was für enge Freunde"],["Idealer Mitbewohner","Auf keinen Fall zusammenwohnen"],
    ["Punktet beim ersten Date","Grund für sofortiges Ghosting"],["Bringt Respekt","Bringt Spott"],
    ["Hochzeitsrede-würdig","Lieber nie erwähnen"],["Würde ich der Oma erzählen","Nur unter besten Freunden"],
    ["Traumlehrer-Eigenschaft","Albtraum als Lehrer"],["Macht sympathisch auf Anhieb","Braucht lange, um sympathisch zu wirken"],
    ["Passt zur Grabrede","Viel zu ernst für den Alltag"],["Würde ich Kindern beibringen","Lieber nicht vorleben"],
    ["Führungsqualität","Katastrophe als Anführer"],["Bringt Vertrauen","Zerstört Vertrauen"],
    ["Trauzeugen-Qualität","Lieber nicht in der Rolle"],["Würde ich beim Blind Date erwähnen","Lieber verschweigen"],
    ["Überzeugt im Vorstellungsgespräch","Sofortiges Aus"],["Macht zum Mittelpunkt der Party","Lässt einen in der Ecke stehen"],
    ["Hält Beziehungen zusammen","Grund für die Trennung"],["Würde ich beim dritten Bier zugeben","Nur ganz nüchtern erzählt"],
    ["Traumeigenschaft für Eltern","Katastrophe als Elternteil"],["Bringt neue Freundschaften","Vertreibt jeden"],
    ["Perfekt für gemeinsame Ausflüge","Nur was für Alleinreisende"],["Gehört in jede Bewerbung","Lieber verschweigen"],
    ["Deeskaliert jeden Streit","Macht jeden Streit schlimmer"],["Macht zum Vorbild","Macht zum abschreckenden Beispiel"],
    ["Beste-Freundin-Qualität","Nur bei Bekannten okay"],["Würde ich meinem Partner verzeihen","Absoluter Trennungsgrund"],
    ["Ideale Babysitter-Eigenschaft","Niemals babysitten lassen"],["Bringt Bewunderung","Bringt Kopfschütteln"],
    ["Stärkt jedes Team","Zerstört jedes Team"],["Würde ich auf der Familienfeier erzählen","Lieber ein Geheimnis bleiben lassen"],
    ["Idealer Nachbar","Albtraum-Nachbar"],["Macht zum Traumschwiegerkind","Grund für Ablehnung der Schwiegereltern"],
    ["Hält Fernbeziehungen am Leben","Killt jede Fernbeziehung"],["Würde ich öffentlich zugeben","Nur im engsten Kreis"],
    ["Idealer Mentor","Schlechtester Mentor überhaupt"],["Bringt einen weiter im Job","Bremst die Karriere aus"],
    ["Guter Kumpel fürs Grobe","Nur was für Zartbesaitete"],["Zeigt man in der Kennenlernphase","Lieber erst später zeigen"],
    ["Ideale Team-Kapitän-Eigenschaft","Grund, nie Kapitän zu werden"],["Macht zum Seelentröster","Macht alles nur schlimmer"],
    ["Hält Patchwork-Familien zusammen","Sorgt für Chaos in der Familie"],["Zähle ich als Kompliment","Würde ich als Beleidigung auffassen"],
    ["Bringt jede Party zum Kochen","Killt jede Partystimmung"],["Baut langfristige Freundschaft auf","Sorgt für schnelles Zerwürfnis"],
    ["Bringt den Familienrat weiter","Sorgt nur für Streit"],["Würde ich meinem Kind wünschen","Würde ich meinem Kind nicht wünschen"],
    ["Ideal fürs Wiedersehen nach Jahren","Grund, den Kontakt zu meiden"],["Macht zur Vertrauensperson","Macht misstrauisch"],
    ["Öffnet Türen beim Netzwerken","Ruiniert jedes Netzwerktreffen"],["Würde in der Hochzeitszeitung stehen","Lieber verschweigen"],
    ["Zeichnet gute Zuhörer aus","Schlechtester Zuhörer überhaupt"],["Bringt Nähe","Schafft Distanz"],
    ["Trägt eine Freundschaft fürs Leben","Grund für sofortigen Kontaktabbruch"],["Absolute Traumeigenschaft","Absolutes No-Go"]
  ]}
};
const REAL_CATEGORY_KEYS = Object.keys(CATEGORIES);

/* Rotierende Pastell-Farbpaare für die Kartenvorderseite (links/rechts) */
const PALETTE = [
  {left:"#FBD8CD", right:"#C9E4F2"},
  {left:"#FDEFC2", right:"#DED4F2"},
  {left:"#D3EEDD", right:"#F7D9E1"},
  {left:"#CFE6F7", right:"#FBE1C6"},
  {left:"#E6D9F4", right:"#D6EEDA"},
  {left:"#F8D6C8", right:"#D1ECE7"},
  {left:"#FCEDC6", right:"#F5D8DE"},
  {left:"#D9E1F6", right:"#FCE3CA"}
];

/* ============ STORAGE ============ */
const STORAGE_KEY = "wellenlaenge_spielstand_v1";
const hasStorage = (typeof window.storage !== "undefined");

async function persist(){
  if(!hasStorage) return;
  try{ await window.storage.set(STORAGE_KEY, JSON.stringify(state), false); }
  catch(e){ console.warn("Speichern nicht möglich:", e); }
}
async function loadPersisted(){
  if(!hasStorage) return null;
  try{
    const res = await window.storage.get(STORAGE_KEY);
    return res && res.value ? JSON.parse(res.value) : null;
  }catch(e){ return null; }
}
async function clearPersisted(){
  if(!hasStorage) return;
  try{ await window.storage.delete(STORAGE_KEY); }catch(e){}
}

/* ============ STATE ============ */
function freshState(){
  return {
    screen:"home",
    selectedCategories:REAL_CATEGORY_KEYS.slice(),
    allesMode:false,
    numTeams:null, teamNames:[], totalRounds:null, scores:[],
    turnIndex:0, deck:[], discard:[], currentCard:null,
    phase:"back", selectedScore:null
  };
}
let state = freshState();
let setupMode = "team";
let setupNumTeams = 2;
let setupRounds = null;

/* ============ HILFSFUNKTIONEN ============ */
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function getEffectiveCategories(){
  return state.allesMode ? REAL_CATEGORY_KEYS.slice() : state.selectedCategories;
}
function poolSize(cats){ return cats.reduce((s,k)=> s+(CATEGORIES[k]?CATEGORIES[k].pairs.length:0),0); }
function buildPool(cats){
  let pool=[];
  cats.forEach(k=> CATEGORIES[k].pairs.forEach(p=> pool.push({cat:k, terms:p})));
  return pool;
}
function computeRoundOptions(cats, numTeams){
  const size = poolSize(cats);
  const maxFull = Math.max(1, Math.floor(size/numTeams));
  return { fifty: Math.max(1, Math.floor(maxFull/2)), hundred: maxFull };
}
function drawCard(){
  if(state.deck.length===0){
    state.deck = shuffle(state.discard.length ? state.discard : buildPool(getEffectiveCategories()));
    state.discard = [];
  }
  const card = state.deck.pop();
  state.discard.push(card);
  return card;
}
function escapeHtml(str){
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  state.screen = id.replace("screen-","");
}
function openModal(id){ document.getElementById(id).classList.add("show"); }
function closeModal(id){ document.getElementById(id).classList.remove("show"); }

function requestFullscreenAndLandscape(){
  const el = document.documentElement;
  const req = el.requestFullscreen || el.webkitRequestFullscreen;
  if(req){ req.call(el).catch(()=>{}); }
  if(screen.orientation && screen.orientation.lock){
    screen.orientation.lock("landscape").catch(()=>{});
  }
}

/* generische Punkte-Buttons (0/2/3/4), wiederverwendet in Spiel & Tutorial */
function renderScoreButtons(containerId, selected, onSelect){
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  [0,2,3,4].forEach(v=>{
    const btn = document.createElement("button");
    btn.className = "score-btn" + (selected===v ? " selected":"");
    btn.textContent = v;
    btn.onclick = (e)=>{ e.stopPropagation(); onSelect(v); };
    el.appendChild(btn);
  });
}

/* ============ HOME: MODUS & KATEGORIEN ============ */
function renderModeRow(){
  const el = document.getElementById("mode-row");
  el.innerHTML = "";
  [{v:"team",label:"Team-Modus"},{v:"freeplay",label:"Freies Spiel"}].forEach(opt=>{
    const btn = document.createElement("button");
    btn.className = "pill" + (setupMode===opt.v ? " active":"");
    btn.textContent = opt.label;
    btn.onclick = ()=>{ setupMode = opt.v; renderModeRow(); updateStartButtonLabel(); };
    el.appendChild(btn);
  });
}
function updateStartButtonLabel(){
  document.getElementById("btn-start").textContent = setupMode==="team" ? "Spiel starten" : "Loslegen";
}
function renderCategoryList(){
  const el = document.getElementById("category-list");
  el.innerHTML = "";
  REAL_CATEGORY_KEYS.forEach(key=>{
    const btn = document.createElement("button");
    const active = !state.allesMode && state.selectedCategories.includes(key);
    btn.className = "pill" + (active ? " active":"");
    btn.textContent = CATEGORIES[key].label;
    btn.onclick = ()=>{
      state.allesMode = false;
      if(state.selectedCategories.includes(key)){
        if(state.selectedCategories.length>1){
          state.selectedCategories = state.selectedCategories.filter(k=>k!==key);
        }
      } else {
        state.selectedCategories.push(key);
      }
      renderCategoryList();
    };
    el.appendChild(btn);
  });
  const allBtn = document.createElement("button");
  allBtn.className = "pill" + (state.allesMode ? " active":"");
  allBtn.textContent = "Alles";
  allBtn.onclick = ()=>{ state.allesMode = true; renderCategoryList(); };
  el.appendChild(allBtn);
}

/* ============ SETUP: TEAMANZAHL ============ */
function renderTeamCountPills(){
  const el = document.getElementById("teamcount-pills");
  el.innerHTML = "";
  for(let n=2;n<=6;n++){
    const btn = document.createElement("button");
    btn.className = "pill lg" + (setupNumTeams===n ? " active":"");
    btn.textContent = n;
    btn.onclick = ()=>{ setupNumTeams = n; renderTeamCountPills(); };
    el.appendChild(btn);
  }
}

/* ============ SETUP: TEAMNAMEN ============ */
function renderNameInputs(){
  const el = document.getElementById("name-inputs");
  el.innerHTML = "";
  for(let i=0;i<setupNumTeams;i++){
    const input = document.createElement("input");
    input.maxLength = 10;
    input.placeholder = "Team " + (i+1);
    input.id = "name-input-"+i;
    el.appendChild(input);
  }
}

/* ============ SETUP: RUNDEN ============ */
function renderRoundsPills(){
  const cats = getEffectiveCategories();
  const { fifty, hundred } = computeRoundOptions(cats, setupNumTeams);
  document.getElementById("rounds-info").textContent =
    poolSize(cats) + " Karten in den gewählten Kategorien, aufgeteilt auf " + setupNumTeams + " Teams.";
  if(setupRounds===null) setupRounds = 10;
  const options = [
    {v:10,label:"10"},{v:15,label:"15"},{v:20,label:"20"},
    {v:fifty,label:"50%",sub:fifty+" Runden"},
    {v:hundred,label:"100%",sub:hundred+" Runden"}
  ];
  const el = document.getElementById("rounds-pills");
  el.innerHTML = "";
  options.forEach(opt=>{
    const btn = document.createElement("button");
    btn.className = "pill lg" + (setupRounds===opt.v ? " active":"");
    btn.innerHTML = opt.label + "<small>" + (opt.sub || "Runden") + "</small>";
    btn.onclick = ()=>{ setupRounds = opt.v; renderRoundsPills(); };
    el.appendChild(btn);
  });
}

/* ============ SPIEL STARTEN (TEAM-MODUS) ============ */
function beginGame(){
  const names = [];
  for(let i=0;i<setupNumTeams;i++){
    const val = document.getElementById("name-input-"+i).value.trim();
    names.push(val ? val.slice(0,10) : ("Team "+(i+1)));
  }
  state.numTeams = setupNumTeams;
  state.teamNames = names;
  state.totalRounds = setupRounds;
  state.scores = names.map(()=>0);
  state.turnIndex = 0;
  state.deck = shuffle(buildPool(getEffectiveCategories()));
  state.discard = [];
  state.currentCard = drawCard();
  state.phase = "back";
  state.selectedScore = null;
  showScreen("screen-game");
  persist();
  renderGame();
}

/* ============ GAME RENDER ============ */
function currentTeamIndex(){ return state.turnIndex % state.numTeams; }
function currentRoundNumber(){ return Math.floor(state.turnIndex/state.numTeams)+1; }

function renderGame(){
  const card = document.getElementById("game-card");
  document.getElementById("game-team-name").textContent = state.teamNames[currentTeamIndex()];
  document.getElementById("game-cat-tag").textContent = CATEGORIES[state.currentCard.cat].label;
  document.getElementById("term-a").textContent = state.currentCard.terms[0];
  document.getElementById("term-b").textContent = state.currentCard.terms[1];
  const pal = PALETTE[state.turnIndex % PALETTE.length];
  document.getElementById("game-half-a").style.background = pal.left;
  document.getElementById("game-half-b").style.background = pal.right;
  card.classList.toggle("flipped", state.phase!=="back");

  const scoreView = document.getElementById("score-view");
  const frontHint = document.getElementById("front-hint");
  const okBtn = document.getElementById("btn-score-ok");

  if(state.phase==="scoring"){
    scoreView.classList.add("show");
    frontHint.style.display = "none";
    renderScoreButtons("score-buttons", state.selectedScore, (v)=>{
      state.selectedScore = v;
      persist();
      renderGame();
    });
    okBtn.disabled = (state.selectedScore===null);
  } else {
    scoreView.classList.remove("show");
    frontHint.style.display = "";
  }
}

function onGameCardTap(){
  if(state.phase==="back"){ state.phase="front"; }
  else if(state.phase==="front"){ state.phase="scoring"; }
  else { return; }
  persist();
  renderGame();
}

function confirmScore(){
  if(state.selectedScore===null) return;
  state.scores[currentTeamIndex()] += state.selectedScore;
  state.turnIndex++;
  state.selectedScore = null;

  const totalTurns = state.totalRounds * state.numTeams;
  if(state.turnIndex >= totalTurns){
    endGame();
    persist();
    return;
  }
  state.phase = "back";
  state.currentCard = drawCard();
  persist();
  renderGame();
}

function endGame(){
  showScreen("screen-end");
  const el = document.getElementById("end-list");
  el.innerHTML = "";
  const rows = state.teamNames.map((name,i)=>({name, score:state.scores[i]}));
  const maxScore = Math.max(...rows.map(r=>r.score));
  rows.sort((a,b)=>b.score-a.score);
  rows.forEach(r=>{
    const div = document.createElement("div");
    div.className = "end-row" + (r.score===maxScore ? " win":"");
    div.innerHTML = "<span>" + (r.score===maxScore? "🏆 ":"") + escapeHtml(r.name) + "</span><span>" + r.score + "</span>";
    el.appendChild(div);
  });
}

/* ============ INFO-POPUP ============ */
function renderInfoModal(){
  document.getElementById("info-round-tag").textContent =
    "Runde " + Math.min(currentRoundNumber(), state.totalRounds) + " von " + state.totalRounds;
  const el = document.getElementById("info-score-list");
  el.innerHTML = "";
  state.teamNames.forEach((name,i)=>{
    const div = document.createElement("div");
    div.className = "score-row" + (i===currentTeamIndex() ? " current":"");
    div.innerHTML = "<span>" + escapeHtml(name) + ":</span><span> " + state.scores[i] + " Punkte</span>";
    el.appendChild(div);
  });
}

/* ============ TUTORIAL ============ */
let tut = { step:0, score:null };
const TUT_TEAMS = ["Team 1","Team 2"];

function startTutorial(){
  tut = { step:0, score:null };
  showScreen("screen-tutorial");
  requestFullscreenAndLandscape();
  const pal = PALETTE[0];
  document.getElementById("tut-half-a").style.background = pal.left;
  document.getElementById("tut-half-b").style.background = pal.right;
  renderTutorial();
}

function renderTutorial(){
  const card = document.getElementById("tut-card");
  const callout = document.getElementById("tut-callout");
  const scoreView = document.getElementById("tut-score-view");
  const okBtn = document.getElementById("tut-score-ok");

  document.getElementById("tut-team-name").textContent = tut.step<4 ? TUT_TEAMS[0] : TUT_TEAMS[1];
  card.classList.toggle("flipped", tut.step>=1 && tut.step<=3);
  scoreView.classList.toggle("show", tut.step>=2 && tut.step<4);

  if(tut.step===0){
    callout.textContent = "So sieht die Kartenrückseite aus. Tippt auf die Karte, um sie umzudrehen.";
  } else if(tut.step===1){
    callout.textContent = "Hier stehen die zwei Begriffe. Gebt euch einen Hinweis und ratet gemeinsam, wo der gesuchte Punkt dazwischen liegt. Fertig geraten? Dann nochmal auf die Karte tippen.";
  } else if(tut.step===2 || tut.step===3){
    renderScoreButtons("tut-score-buttons", tut.score, (v)=>{
      tut.score = v;
      tut.step = 3;
      renderTutorial();
    });
    okBtn.disabled = (tut.score===null);
    callout.textContent = tut.score===null
      ? "Wählt aus, wie viele Punkte ihr erzielt habt (0, 2, 3 oder 4)."
      : "Bestätigt eure Auswahl mit OK.";
  } else if(tut.step===4){
    callout.textContent = "Jetzt ist das nächste Team dran. Tippt noch einmal auf die Karte, um das Tutorial zu beenden.";
  }
}

function onTutorialCardTap(){
  if(tut.step===0){ tut.step=1; renderTutorial(); }
  else if(tut.step===1){ tut.step=2; renderTutorial(); }
  else if(tut.step===4){ showScreen("screen-home"); }
}
function onTutorialScoreOk(){
  if(tut.score===null) return;
  tut.step=4;
  renderTutorial();
}

/* ============ FREIES SPIEL ============ */
let fp = { deck:[], discard:[], currentCard:null, phase:"back", paletteIdx:0 };

function fpDraw(){
  if(fp.deck.length===0){
    fp.deck = shuffle(fp.discard.length ? fp.discard : buildPool(getEffectiveCategories()));
    fp.discard = [];
  }
  const c = fp.deck.pop();
  fp.discard.push(c);
  return c;
}
function startFreePlay(){
  fp = { deck:shuffle(buildPool(getEffectiveCategories())), discard:[], currentCard:null, phase:"back", paletteIdx:0 };
  fp.currentCard = fpDraw();
  showScreen("screen-freeplay");
  renderFreePlay();
}
function renderFreePlay(){
  const card = document.getElementById("fp-card");
  card.classList.toggle("flipped", fp.phase==="front");
  document.getElementById("fp-cat-tag").textContent = CATEGORIES[fp.currentCard.cat].label;
  document.getElementById("fp-term-a").textContent = fp.currentCard.terms[0];
  document.getElementById("fp-term-b").textContent = fp.currentCard.terms[1];
  const pal = PALETTE[fp.paletteIdx % PALETTE.length];
  document.getElementById("fp-half-a").style.background = pal.left;
  document.getElementById("fp-half-b").style.background = pal.right;
}
function onFreePlayTap(){
  if(fp.phase==="back"){
    fp.phase = "front";
  } else {
    fp.currentCard = fpDraw();
    fp.paletteIdx++;
    fp.phase = "back";
  }
  renderFreePlay();
}

/* ============ EVENTS ============ */
document.getElementById("btn-start").onclick = ()=>{
  requestFullscreenAndLandscape();
  if(setupMode==="team"){
    renderTeamCountPills();
    showScreen("screen-teamcount");
  } else {
    startFreePlay();
  }
};
document.getElementById("btn-teamcount-back").onclick = ()=> showScreen("screen-home");
document.getElementById("btn-teamcount-next").onclick = ()=>{
  renderNameInputs();
  showScreen("screen-teamnames");
};
document.getElementById("btn-teamnames-back").onclick = ()=>{
  renderTeamCountPills();
  showScreen("screen-teamcount");
};
document.getElementById("btn-teamnames-next").onclick = ()=>{
  setupRounds = null;
  renderRoundsPills();
  showScreen("screen-rounds");
};
document.getElementById("btn-rounds-back").onclick = ()=>{
  renderNameInputs();
  showScreen("screen-teamnames");
};
document.getElementById("btn-rounds-start").onclick = beginGame;

document.getElementById("game-card").addEventListener("click", onGameCardTap);
document.getElementById("btn-score-ok").addEventListener("click", (e)=>{ e.stopPropagation(); confirmScore(); });

document.getElementById("btn-info").onclick = ()=>{ renderInfoModal(); openModal("modal-info"); };
document.getElementById("btn-rules").onclick = ()=> openModal("modal-rules");
document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.onclick = ()=> closeModal(btn.dataset.close);
});

document.getElementById("btn-quit-game").onclick = ()=>{
  closeModal("modal-info");
  openModal("modal-confirm-quit");
};
document.getElementById("btn-quit-cancel").onclick = ()=> closeModal("modal-confirm-quit");
document.getElementById("btn-quit-confirm").onclick = async ()=>{
  closeModal("modal-confirm-quit");
  await clearPersisted();
  state = freshState();
  renderCategoryList();
  showScreen("screen-home");
};

document.getElementById("btn-tutorial-start").onclick = startTutorial;
document.getElementById("btn-tutorial-skip").onclick = ()=> showScreen("screen-home");
document.getElementById("tut-card").addEventListener("click", onTutorialCardTap);
document.getElementById("tut-score-ok").addEventListener("click", (e)=>{ e.stopPropagation(); onTutorialScoreOk(); });

document.getElementById("fp-card").addEventListener("click", onFreePlayTap);
document.getElementById("btn-freeplay-exit").onclick = ()=> showScreen("screen-home");

document.getElementById("btn-newgame").onclick = async ()=>{
  await clearPersisted();
  state = freshState();
  renderCategoryList();
  showScreen("screen-home");
};

/* ============ INIT ============ */
(async function init(){
  renderModeRow();
  updateStartButtonLabel();
  const saved = await loadPersisted();
  if(saved && saved.numTeams){
    state = saved;
    renderCategoryList();
    if(state.screen==="game"){
      showScreen("screen-game");
      renderGame();
    } else if(state.screen==="end"){
      endGame();
    } else {
      showScreen("screen-home");
    }
  } else {
    renderCategoryList();
    showScreen("screen-home");
  }
})();
