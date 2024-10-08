export function gameStartingComponent() {
    return (`
        <div class="game-waiting-container">
            <div class="game-waiting" w-tid="6">
                <h1 w-tid="7">Ping Pong Match</h1>
                <div class="players" w-tid="8">
                    <div class="player" w-tid="9">
                        <img class="player-photo" src="../images/avatars/avatar1.webp" alt="Player 1 photo, smiling young man with short dark hair" width="120" height="120" w-tid="10" data-image_id="0" alt-rewritten="A warm portrait photograph of a smiling young man with short dark hair.">
                        <div class="player-name" w-tid="11">Alex</div>
                    </div>
                    <div class="vs" w-tid="12">VS</div>
                    <div class="player" w-tid="13">
                        <div class="player-photo" w-tid="17">
                            <img class="" src="../images/avatars/avatar2.webp" alt="Player 2 photo, cheerful woman with long blonde hair" width="120" height="120" w-tid="14" data-image_id="1" style="" alt-rewritten="A playful cartoon avatar with spiky blue hair.">                        
                        </div>
                        <div class="player-name" w-tid="15">Waiting...</div>
                    </div>
                </div>
                <div class="waiting" w-tid="16">Opponent found! Get ready to play!</div>
            </div>
        </div>
    `)
}

export function gameStartingComponentScript() {
    // define game variables
    const userInfo = {
        id: 1,
        name: 'Alex',
        avatar: 'avatar1.webp'
    }

    // start connection to the server
    const ws = new WebSocket('ws://localhost:1212/ws/game/');

    ws.onopen = function () {}

    // receive message from the server
    ws.onmessage = function (event) {
        const message = JSON.parse(event.data);
        handleMessages(message);
    }

    // handle disconnection
    ws.onclose = function () {
        ws.close();
    }

    // handle messages from the server
    function handleMessages(message) {
        console.log(message);
        console.log('is called');
        if (message.type == 'channel_name') {
            ws.send(JSON.stringify({
                type: 'join',
                channel: message.channel_name,
                user: userInfo
            }))
        } else if (message.type == 'game_start') {
            console.log('game start');
            launchGame(message);
        }
    }

    function launchGame(message) {
        
    }
}