import { userInfo, data } from "./gameWaiting"
import { urlHandler } from "../scripts/routes";

let Ball = {
    x: 950 / 2,
    y: 500 / 2,
    radius: 10,
    speed: 1.00,
    velocityX: 5,
    velocityY: 5,
    color: '#EEEEEE'
}

let LeftPlayer = {
    x: 0,
    y: 500 / 2 - 150 / 2,
    width: 15,
    height: 150,
    color: 'red',
    score: 0,
}

let RightPlayer = {
    x: 950 - 15,
    y: 500 / 2 - 150 / 2,
    width: 15,
    height: 150,
    color: 'red',
    score: 0,
}

export function gameOnlineComponent() {
    let LeftUser, RightUser;

    // check if no room name, then exit this function
    if (data.roomName == '' || userInfo.otherPlayer == null) 
        return;

    if (userInfo.otherPlayer.direction == 'left') {
        LeftUser = userInfo.otherPlayer;
        RightUser = userInfo;
    } else {
        LeftUser = userInfo;
        RightUser = userInfo.otherPlayer;
    }

    return (`
        <div class="game-container">
            <div id="countdown" style="display: none;">5</div>
            <div id="game-cover" style="display: none;"></div>
            <i class="fas fa-times"></i>
            <div class="player-field">
                <img src="../images/avatars/${LeftUser.avatar}" alt="">
                <h4>${LeftUser.name}</h4>
            </div>
            <canvas id="pong" width="950px" height="500"></canvas>
            <div class="player-field">
                <img src="../images/avatars/${RightUser.avatar}" alt="">
                <h4>${RightUser.name}</h4>
            </div>
        </div>
    `);
}

export function gameOnlineScript() {

    if (data.roomName == '' || userInfo.otherPlayer == null) {
        history.pushState(null, null, '/game_starting');
        urlHandler();
        return ;
    }

    const ws = new WebSocket('ws://localhost:1212/ws/play/' + data.roomName + '/');

    let gameStarted = false

    ws.onopen = function () {}

    ws.onmessage = function (event) {
        const message = JSON.parse(event.data);
        if (message.type == 'game_update') {
            Ball = message.ball;
            LeftPlayer = message.leftPlayer;
            RightPlayer = message.rightPlayer;
            render();
        } else if (message.type == 'game_start') {
            gameStarted = true;
            startGame();
        } else if (message.type == 'send_message') {
            console.log(message);
        } else if (message.type == 'reset_ball') {
            resetBall(message)
        }
    }

    ws.onclose = function () {}

    const canvas = document.querySelector('#pong')

    const context = canvas.getContext('2d')

    let playerDir = 'right'

    // define game constants
    // game
    let WINNING_SCORE = 3
    let FPS = 60

    // ball
    let BALL_START_SPEED = 1
    let BALL_MAX_SPEED = 8
    let SPEED = .02
    let BALL_RADIUS = 10

    // player 
    let PLAYER_COLOR = '#508C9B'
    let PLAYER_WIDTH = 15
    let PLAYER_HEIGHT = 150

    // AI
    let AI_LEVEL = 0.05

    // Net
    let NET_SPACE = 5

    let gameInterval = 0


    // Game Objects
    const Net = {
        x: canvas.width / 2 - 1,
        y: 0,
        width: 2,
        height: 10,
        color: '#201E43'
    }

    // Draw shapes and text
    function drawRect(x, y, width, height, color ){
        context.fillStyle = color
        context.fillRect(x, y, width, height)
    }

    function drawCircle(x, y, radius, color){
        context.fillStyle = color
        context.beginPath()
        context.arc(x, y, radius, 0, Math.PI * 2, false)
        context.closePath()
        context.fill()
    }

    function drawText(text, x, y, color ){ 
        context.fillStyle = color
        context.font = '50px fantasy'
        context.fillText(text, x, y)
    }

    function drawNet(){
        for (let i = 0; i <= canvas.height; i += Net.height + NET_SPACE) {
            drawRect(Net.x, i, Net.width, Net.height, Net.color)
        }
    }

    function render() {
        drawRect(0, 0, canvas.width, canvas.height, '#134B70')
        
        // call drawNet function
        drawNet()

        // call drawRect function
        drawRect(LeftPlayer.x, LeftPlayer.y, LeftPlayer.width, LeftPlayer.height, LeftPlayer.color)
        drawRect(RightPlayer.x, RightPlayer.y, LeftPlayer.width, RightPlayer.height, RightPlayer.color)

        // call drawCircle function
        drawCircle(Ball.x, Ball.y, Ball.radius, Ball.color)

        // call drawText function
        drawText(LeftPlayer.score, canvas.width / 4, 100, '#201E43')
        drawText(RightPlayer.score,  canvas.width - (canvas.width / 4) , 100, '#201E43')

    }

    function resetBall(message) {
        clearInterval(gameInterval);
        Ball = message.ball;
        LeftPlayer = message.leftPlayer;
        RightPlayer = message.rightPlayer;

        Ball.x = 950 / 2;
        Ball.y = 500 / 2;
        Ball.velocityX = -Ball.velocityX;
        Ball.velocityY = -Ball.velocityY;
        
        setTimeout(render, 100)
        setTimeout(startGame, 3000);
    }

    canvas.addEventListener('mousemove', (e) => {
        if (!gameStarted)
            return ;
        let rect = canvas.getBoundingClientRect()
        if (userInfo.direction == 'left') {
            LeftPlayer.y = e.clientY - rect.top - LeftPlayer.height / 2
        } else {
            RightPlayer.y = e.clientY - rect.top - RightPlayer.height / 2
        }
    })

    // move player using keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' || e.key == 'w') {
            LeftPlayer.y -= 30
        } else if (e.key === 'ArrowDown' || e.key == 's') {
            LeftPlayer.y += 30  
        }
    })

    function game(){
        ws.send(JSON.stringify({
            type: 'game_update',
            roomName: data.roomName,
            ball: Ball,
            leftPlayer: LeftPlayer,
            rightPlayer: RightPlayer
        }))
        render()
    }

    render()

    // start game
    function startGame() {
        Ball.speed = BALL_START_SPEED
        console.log(Ball)
        gameInterval = setInterval(game, 1000 / FPS)
    }
}
