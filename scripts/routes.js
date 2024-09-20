import { setUpEvent } from './script.js';
import { gameComponent } from './components.js';
import { gameStartingComponent } from './components.js';
import { gameTournamentComponent } from '../components/tournament.js';
import { gameAiComponent } from './components.js';
import { gameScript } from './game.js';
import { gameSettingScript } from './game.js';
import { gameSettingComponent } from './components.js';
import { homeComponent } from './components.js';
import { SingUpComponent } from '../components/singup.js';
import { singupScript } from '../components/singup.js';
import { SingInComponent } from '../components/singin.js';
import { ChatComponent } from '../components/chat.js';

export function urlHandler() {
    const routeName = window.location.pathname;
    const site = document.querySelector('.site');
    switch (routeName) {
        case '/':
            site.innerHTML = homeComponent();
            site.classList = 'site gameComponent';
            break;
        case '/index.html':
            site.innerHTML = homeComponent();
            site.classList = 'site gameComponent';
            break;
        case '/game':
            site.innerHTML = gameComponent();
            site.classList = 'site gameComponent';
            break;
        case '/game_starting':
            site.innerHTML = gameStartingComponent();
            site.classList = 'site';
            break;
        case '/tournament':
            site.innerHTML = gameTournamentComponent();
            site.classList = 'site';
            break;
        case '/ai':
            site.innerHTML = gameAiComponent();
            site.classList = 'site';
            gameScript();
            break;
        case '/game_setting':
            site.innerHTML = gameSettingComponent();
            site.classList = 'site game-setting-layout';
            gameSettingScript();
            break;
        case '/singup':
            site.innerHTML = SingUpComponent();
            site.classList = 'site';
            singupScript();
            break;
        case '/singin':
            site.innerHTML = SingInComponent();
            site.classList = 'site';
            break;
        case '/chat':
            site.innerHTML = ChatComponent();
            site.classList = 'site chat-layout';
            break;
        default:
            site.innerHTML = `
                <h2>404 Page Not Found</h2>
            `;
            site.classList = 'site';
    }
    setUpEvent();
}

window.addEventListener('load', urlHandler);
window.onpopstate = urlHandler;
// window.addEventListener('popstate', urlHandler);