import { urlHandler } from "./routes.js";

// Game script

export function setUpEvent() {
    const classicLink = document.querySelector('.classic a');
    if (classicLink) {
        classicLink.addEventListener('click', function (e) {
            e.preventDefault();
            history.pushState(null, null, 'game_starting');
            urlHandler();
        })
    }

    const gameCancel = document.querySelector('.classic-game a');
    if (gameCancel) {
        gameCancel.addEventListener('click', function (e) {
            e.preventDefault();
            history.pushState(null, null, '/game');
            urlHandler();
        })
    }

    const firendsLink = document.querySelectorAll('.friends a');
    if (firendsLink) {
        firendsLink.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                history.pushState(null, null, '/game_starting');
                urlHandler();
            })
        })
    }

    const tournamentLink = document.querySelector('.tournament a');
    if (tournamentLink) {
        tournamentLink.addEventListener('click', function (e) {
            e.preventDefault();
            history.pushState(null, null, '/tournament');
            urlHandler();
        })
    }

    const aiLink = document.querySelector('.ai a');
    if (aiLink) {
        aiLink.addEventListener('click', function (e) {
            e.preventDefault();
            history.pushState(null, null, '/ai');
            urlHandler();
        })
    }

    const aiCancel = document.querySelector('.game-container i');
    if (aiCancel) {
        aiCancel.addEventListener('click', function (e) {
            e.preventDefault();
            history.pushState(null, null, '/game');
            urlHandler();
        })
    }

    const gameSettingLink = document.querySelector('.game-setting-link');
    if (gameSettingLink) {
        gameSettingLink.addEventListener('click', function (e) {
            e.preventDefault();
            history.pushState(null, null, '/game_setting');
            urlHandler();
        })
    }

    const homeLink = document.querySelector('.menu .home');
    if (homeLink) {
        homeLink.addEventListener('click', function (e) {
            e.preventDefault();
            history.pushState(null, null, '/');
            urlHandler();
        })
    }

    const gameLink = document.querySelector('.menu .game');
    if (gameLink) {
        gameLink.addEventListener('click', function (e) {
            e.preventDefault();
            history.pushState(null, null, '/game');
            urlHandler();
        })
    }

    
}

window.onload = setUpEvent;
