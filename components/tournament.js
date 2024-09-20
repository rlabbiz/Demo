export function gameTournamentComponent() {
    return (`
        <div class="tournament-component">
            <h2> <i class="fas fa-arrow-left" title="Back To Game"></i> PING PONG Tournament hub</h2>
            <div class="options">
                <div class="option">
                    <h3> create tournament </h3>
                    <p> Launch a new 4 or 8 player showdown </p>
                </div>
                <div class="option" onclick>
                    <h3> JOIN TOURNAMENT </h3>
                    <p> Enter an existing battle or use an ID </p>
                </div>
            </div>
        </div>
    `)
}