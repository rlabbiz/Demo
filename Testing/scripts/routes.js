import { setUpEvent } from './script.js';
import { gameComponent } from './components.js';
import { gameStartingComponent } from './components.js';
import { gameTournamentComponent, tournamentScript } from './components.js';
import { gameAiComponent } from './components.js';
import { gameScript } from './game.js';
import { gameSettingScript } from './game.js';
import { gameSettingComponent } from './components.js';
import { homeComponent } from './components.js';
import { SingUpComponent } from './components.js';
import { singupScript } from './components.js';
import { SingInComponent } from './components.js';
import { ChatComponent } from './components.js';
import { firstModeComponent, secondModeComponent, tournamentModesScript } from './components.js';
import { accountSettingComponent } from './components.js';
import { friendsComponent } from './components.js';

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
            tournamentScript();
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
        case '/first-mode':
            site.innerHTML = firstModeComponent();
            site.classList = 'site';
            tournamentModesScript();
            break;
        case '/second-mode':
            site.innerHTML = secondModeComponent();
            site.classList = 'site';
            tournamentModesScript();
            break;
        case '/account_settings':
            site.innerHTML = accountSettingComponent();
            site.classList = 'site account-setting-layout';
            break;
        case '/friends':
            site.innerHTML = friendsComponent();
            site.classList = 'site friends-layout';
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