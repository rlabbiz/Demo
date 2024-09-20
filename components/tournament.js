import { urlHandler } from "../scripts/routes.js";
export function gameTournamentComponent() {
    return (`
        <div class="tournament-component">
            <h2> <i class="fas fa-arrow-left" title="Back To Game"></i> PING PONG Tournament hub</h2>
            <div class="options">
                <div class="option create">
                    <h3> create tournament </h3>
                    <p> Launch a new 4 or 8 player showdown </p>
                </div>
                <div class="option join">
                    <h3> JOIN TOURNAMENT </h3>
                    <p> Enter an existing battle or use an ID </p>
                </div>
            </div>
            <div class="create-tournament" id="createTournament" w-tid="15">
                <h3 w-tid="16">Create New Tournament</h3>
                <select id="playerCount" w-tid="17">
                    <option value="4" w-tid="18">4 Players - Quick Clash</option>
                    <option value="8" w-tid="19">8 Players - Epic Showdown</option>
                </select>
                <input type="text" id="tournamentName" placeholder="Give your tournament an epic name" w-tid="20">
                <button onclick="createNewTournament()" w-tid="21">Launch Tournament</button>
            </div>

            <div class="join-tournament" id="joinTournament" w-tid="22">
                <h3 w-tid="23">Join Tournament</h3>
                <input type="text" id="tournamentId" placeholder="Enter Tournament ID to join the fray" w-tid="24">
                <button onclick="joinTournamentById()" w-tid="25">Join by ID</button>
                
                <div class="tournament-list" id="tournamentList" w-tid="26" style="display: block;">
                    <div class="tournament-item">
                        <span>Paddle Fury </span>
                        <p>4/8</p>
                        <button class="join-button" onclick="joinTournament('T001')">Enter Arena</button>
                    </div>
                    <div class="tournament-item">
                        <span>Table Titans</span>
                        <p>5/8</p>
                        <button class="join-button" onclick="joinTournament('T002')">Enter Arena</button>
                    </div>
                    <div class="tournament-item">
                        <span>Spin Masters</span>
                        <p>3/4</p>
                        <button class="join-button" onclick="joinTournament('T003')">Enter Arena</button>
                    </div>
                    <div class="tournament-item">
                        <span>Ping Pong Legends</span>
                        <p>6/8</p>
                        <button class="join-button" onclick="joinTournament('T004')">Enter Arena</button>
                    </div>
                </div>
            </div>
        </div>
    `)
}

export function tournamentScript() {
    const joinTournamentButtom = document.querySelector('.tournament-component .options .join');
    const createTournamentButtom = document.querySelector('.tournament-component .options .create');
    const createTournament = document.getElementById('createTournament');
    const joinTournament = document.getElementById('joinTournament');

    if (joinTournamentButtom) {
        joinTournamentButtom.addEventListener('click', () => {
            createTournament.style.display = 'none';
            joinTournament.style.display = 'block';
        });
    }

    if (createTournamentButtom) {
        createTournamentButtom.addEventListener('click', () => {
            createTournament.style.display = 'block';
            joinTournament.style.display = 'none';
        });
    }

    const backToGame = document.querySelectorAll('.tournament-component h2 i');
    if (backToGame) {
        backToGame.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                history.pushState(null, null, '/game');
                urlHandler();
            })
        })
    }

}