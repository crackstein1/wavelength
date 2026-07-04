// ==========================================
// 1. DIE KARTEN-DATENBANK & STATE
// ==========================================
const cardDatabase = [
    { left: "Heiß", right: "Kalt" },
    { left: "Guter Film", right: "Schlechter Film" },
    { left: "Unterbewertet", right: "Überbewertet" },
    { left: "Trocken", right: "Nass" },
    { left: "Friedlich", right: "Aggressiv" },
    { left: "Schwer", right: "Leicht" },
    { left: "Alt", right: "Neu" },
    { left: "Gesund", right: "Ungesund" },
    { left: "Wissenschaft", right: "Magie" },
    { left: "Riecht gut", right: "Riecht schlecht" }
];

// NEU: Angenehme Pastell-Töne statt knalliger Farben
const colorPalettes = [
    { left: '#ffb3ba', right: '#bae1ff' }, // Pastell Pink / Hellblau
    { left: '#baffc9', right: '#ffdfba' }, // Mintgrün / Pastell Orange
    { left: '#e2c2f4', right: '#ffc4d9' }, // Sanftes Lila / Altrosa
    { left: '#ffd1a9', right: '#a8e6cf' }, // Pfirsich / Aquamarin
    { left: '#c2d4f8', right: '#f9d8a7' }, // Taubenblau / Creme-Gelb
    { left: '#d4a5a5', right: '#9dc8c8' }  // Gedämpftes Rot / Eisblau
];

const TOTAL_CARDS_IN_DB = cardDatabase.length; 
const SAVE_KEY = 'wavelength_save'; 

let gameState = {
    teams: [],
    maxRounds: 0,
    currentRound: 1,
    currentTeamIndex: 0,
    deck: [],
    isTutorial: false
};

// ==========================================
// 2. DOM-ELEMENTE SAMMELN
// ==========================================
const screenMainMenu = document.getElementById('screen-main-menu');
const screenSetup = document.getElementById('screen-setup');
const screenGame = document.getElementById('screen-game');
const screenEnd = document.getElementById('screen-end'); 

const modalRules = document.getElementById('modal-rules');
const modalScoring = document.getElementById('modal-scoring');
const modalStatus = document.getElementById('modal-status');

const btnOpenRules = document.getElementById('btn-open-rules');
const btnCloseRules = document.getElementById('btn-close-rules');
const btnOpenTutorial = document.getElementById('btn-open-tutorial'); 
const btnStartSetup = document.getElementById('btn-start-setup');
const btnResumeGame = document.getElementById('btn-resume-game'); 
const btnBackToMenuFromSetup = document.getElementById('btn-back-to-menu-from-setup');
const btnBackToMenuFromEnd = document.getElementById('btn-back-to-menu-from-end'); 
const btnStartGame = document.getElementById('btn-start-game');
const btnGameInfo = document.getElementById('btn-game-info'); 
const btnCloseStatus = document.getElementById('btn-close-status'); 
const statusDisplayContent = document.getElementById('status-display-content'); 
const leaderboardContainer = document.getElementById('leaderboard-container'); 

const teamCountSelect = document.getElementById('team-count');
const teamNamesContainer = document.getElementById('team-names-container');
const roundCountSelect = document.getElementById('round-count');

const playingCard = document.getElementById('playing-card');
const scoreButtons = document.querySelectorAll('.btn-score');
const btnConfirmScore = document.getElementById('btn-confirm-score');
const tutorialBanner = document.getElementById('tutorial-banner');

let currentSelectedScore = null;

// ==========================================
// 3. HILFS- UND SPIELFUNKTIONEN
// ==========================================
function showScreen(screenElement) {
    screenMainMenu.classList.add('hidden');
    screenSetup.classList.add('hidden');
    screenGame.classList.add('hidden');
    screenEnd.classList.add('hidden'); 
    screenElement.classList.remove('hidden');
}

function generateTeamInputs() {
    const count = parseInt(teamCountSelect.value);
    teamNamesContainer.innerHTML = ''; 
    for (let i = 1; i <= count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `team-name-${i}`;
        input.className = 'team-input';
        input.maxLength = 10; 
        input.placeholder = `Team ${i}`;
        input.value = `Team ${i}`;
        teamNamesContainer.appendChild(input);
    }
}

function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function saveGame() {
    if (!gameState.isTutorial) { 
        localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
        btnResumeGame.classList.remove('hidden');
    }
}

function startNextTurn() {
    const currentTeam = gameState.teams[gameState.currentTeamIndex];
    playingCard.dataset.state = 'back';
    
    // Setzt die Hintergrundfarbe sicher auf den Standard-CSS-Verlauf zurück
    playingCard.style.background = ''; 
    
    playingCard.innerHTML = `Karte für <br> <em style="color: #f59e0b; margin-top: 10px; display: inline-block;">${currentTeam.name}</em>`;

    if (gameState.isTutorial) {
        if (gameState.currentTeamIndex === 0) {
            tutorialBanner.innerText = "Willkommen! Tippe auf die Karte, um die Begriffe aufzudecken.";
        } else if (gameState.currentTeamIndex === 1) {
            tutorialBanner.innerText = "Das andere Team ist dran. Tippe auf die Karte, um das Tutorial zu beenden.";
        }
    } else {
        tutorialBanner.classList.add('hidden');
    }
    
    saveGame(); 
}

function showEndScreen() {
    const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);
    let html = '';
    sortedTeams.forEach((team, index) => {
        let medal = '';
        if (index === 0) medal = '🥇 ';
        else if (index === 1) medal = '🥈 ';
        else if (index === 2) medal = '🥉 ';

        html += `<div class="leaderboard-row ${index === 0 ? 'winner' : ''}">
                    <span>${medal} ${team.name}</span>
                    <span><strong>${team.score}</strong> Pkt</span>
                 </div>`;
    });

    leaderboardContainer.innerHTML = html;
    showScreen(screenEnd);
}

function startTutorial() {
    gameState.isTutorial = true;
    gameState.teams = [{ name: "Team 1", score: 0 }, { name: "Team 2", score: 0 }];
    gameState.maxRounds = 1;
    gameState.currentRound = 1;
    gameState.currentTeamIndex = 0;
    gameState.deck = [{ left: "Eisig", right: "Kochend" }, { left: "Langweilig", right: "Spannend" }];

    tutorialBanner.classList.remove('hidden');
    showScreen(screenGame);
    startNextTurn();
}

function initializeGame() {
    const count = parseInt(teamCountSelect.value);
    gameState.teams = [];
    for (let i = 1; i <= count; i++) {
        const nameInput = document.getElementById(`team-name-${i}`).value;
        gameState.teams.push({ name: nameInput || `Team ${i}`, score: 0 });
    }

    const roundSelection = roundCountSelect.value;
    if (roundSelection.includes('%')) {
        const percentage = parseInt(roundSelection) / 100;
        let availableCards = TOTAL_CARDS_IN_DB * percentage;
        gameState.maxRounds = Math.floor(availableCards / count);
    } else {
        gameState.maxRounds = parseInt(roundSelection);
    }

    gameState.currentRound = 1;
    gameState.currentTeamIndex = 0;
    gameState.isTutorial = false; 
    gameState.deck = shuffleArray(cardDatabase);

    showScreen(screenGame);
    startNextTurn();
}

window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
        btnResumeGame.classList.remove('hidden');
    }
});

// ==========================================
// 4. EVENT-LISTENERS
// ==========================================
btnOpenRules.addEventListener('click', () => modalRules.classList.remove('hidden'));
btnCloseRules.addEventListener('click', () => modalRules.classList.add('hidden'));
modalRules.addEventListener('click', (event) => {
    if (event.target === modalRules) modalRules.classList.add('hidden');
});

btnGameInfo.addEventListener('click', () => {
    let html = `<h3 style="color: #3b82f6;">Runde ${gameState.currentRound} von ${gameState.maxRounds}</h3>`;
    html += `<ul style="list-style: none; padding: 0;">`;
    gameState.teams.forEach(team => {
        html += `<li style="font-size: 1.2rem; margin: 10px 0; border-bottom: 1px solid #475569; padding-bottom: 5px;">
                    ${team.name}: <strong>${team.score} Punkte</strong>
                 </li>`;
    });
    html += `</ul>`;
    
    statusDisplayContent.innerHTML = html;
    modalStatus.classList.remove('hidden');
});
btnCloseStatus.addEventListener('click', () => modalStatus.classList.add('hidden'));
modalStatus.addEventListener('click', (event) => {
    if (event.target === modalStatus) modalStatus.classList.add('hidden');
});

btnResumeGame.addEventListener('click', () => {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
        gameState = JSON.parse(saved);
        showScreen(screenGame);
        startNextTurn();
    }
});

btnOpenTutorial.addEventListener('click', startTutorial);
btnStartSetup.addEventListener('click', () => showScreen(screenSetup));
btnBackToMenuFromSetup.addEventListener('click', () => showScreen(screenMainMenu));
btnBackToMenuFromEnd.addEventListener('click', () => showScreen(screenMainMenu));
teamCountSelect.addEventListener('change', generateTeamInputs);
btnStartGame.addEventListener('click', initializeGame);

playingCard.addEventListener('click', () => {
    const state = playingCard.dataset.state;

    if (state === 'back') {
        if (gameState.isTutorial && gameState.currentTeamIndex === 1) {
            alert("Tutorial beendet! Du kennst jetzt die Regeln und kannst richtig starten.");
            gameState.isTutorial = false;
            tutorialBanner.classList.add('hidden');
            showScreen(screenMainMenu);
            return;
        }

        let currentCard = gameState.deck.pop(); 
        if (!currentCard) {
            gameState.deck = shuffleArray(cardDatabase);
            currentCard = gameState.deck.pop();
        }

        const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

        playingCard.innerHTML = `
            <div class="card-half" style="background-color: ${randomPalette.left};">
                <span class="card-term">${currentCard.left}</span>
            </div>
            <div class="card-center-badge">VS</div>
            <div class="card-half" style="background-color: ${randomPalette.right};">
                <span class="card-term">${currentCard.right}</span>
            </div>
        `;
        
        playingCard.style.background = 'transparent';
        playingCard.dataset.state = 'front';
        
        if (gameState.isTutorial) {
            tutorialBanner.innerText = "Super! Überlege dir einen Hinweis. Wenn das Team geraten hat, tippe erneut auf die Karte.";
        }
        
    } else if (state === 'front') {
        modalScoring.classList.remove('hidden');
        btnConfirmScore.disabled = true;
        currentSelectedScore = null;
        scoreButtons.forEach(btn => btn.classList.remove('selected'));

        if (gameState.isTutorial) {
            tutorialBanner.innerText = "Wähle nun die verdienten Punkte aus und drücke auf OK.";
        }
    }
});

scoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        scoreButtons.forEach(btn => btn.classList.remove('selected')); 
        e.target.classList.add('selected'); 
        currentSelectedScore = parseInt(e.target.dataset.points);
        btnConfirmScore.disabled = false; 
    });
});

btnConfirmScore.addEventListener('click', () => {
    gameState.teams[gameState.currentTeamIndex].score += currentSelectedScore;
    modalScoring.classList.add('hidden'); 
    gameState.currentTeamIndex++; 
    
    if (gameState.currentTeamIndex >= gameState.teams.length) {
        gameState.currentTeamIndex = 0;
        gameState.currentRound++;
    }
    
    if (gameState.currentRound > gameState.maxRounds && !gameState.isTutorial) {
        localStorage.removeItem(SAVE_KEY); 
        btnResumeGame.classList.add('hidden'); 
        showEndScreen();
        return;
    }
    
    startNextTurn();
});