import { setUpEvent } from './script.js';
import { gameComponent } from './components.js';
import { gameStartingComponent, gameStartingComponentScript } from '../components/gameWaiting.js';
import { gameTournamentComponent, tournamentScript } from '../components/tournament.js';
import { gameAiComponent } from './components.js';
import { gameScriptAi } from './game.js';
import { gameSettingScript } from './game.js';
import { gameSettingComponent } from './components.js';
import { homeComponent } from './components.js';
import { SingUpComponent } from '../components/singup.js';
import { singupScript } from '../components/singup.js';
import { SingInComponent, SingUpComponentScript } from '../components/singin.js';
import { ChatComponent, chatScript } from '../components/chat.js';
import { firstModeComponent, secondModeComponent, tournamentModesScript } from '../components/tournamentModes.js';
import { accountSettingComponent } from '../components/accountSetting.js';
import { friendsComponent } from '../components/friends.js';
import { profileComponent } from '../components/profile.js';
import { gameOnlineComponent, gameOnlineScript } from '../components/play.js';
import { searchComponent, searchComponentEvents } from '../components/search.js';

export async function urlHandler() {
    const routeName = window.location.pathname;
    const site = document.querySelector('.site');
    
    // check if user if logged in or not, if not redirect to login page
    if (routeName !== '/singin' && routeName !== '/singup') {
        // check refresh_token if exitst in cookies
        if (document.cookie.indexOf('access_token' + '=') === -1) {
            history.pushState(null, null, '/singin');
            await urlHandler();
            return;
        }
    }

    switch (routeName) {
        case '/':
            site.innerHTML = await homeComponent();
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
            gameStartingComponentScript();
            break;
        case '/tournament':
            site.innerHTML = gameTournamentComponent();
            site.classList = 'site';
            tournamentScript();
            break;
        case '/ai':
            site.innerHTML = gameAiComponent();
            site.classList = 'site';
            gameScriptAi();
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
            SingUpComponentScript();
            break;
        case '/chat':
            site.innerHTML = await ChatComponent();
            site.classList = 'site chat-layout';
            await chatScript();
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
            site.innerHTML = await accountSettingComponent();
            site.classList = 'site account-setting-layout';
            break;
        case '/friends':
            site.innerHTML = await friendsComponent();
            site.classList = 'site friends-layout';
            break;
        case '/profile':
            site.innerHTML = await profileComponent();
            site.classList = 'site profile-layout';
            await searchComponentEvents();
            break;

        case '/play':
            site.innerHTML = gameOnlineComponent();
            site.classList = 'site';
            gameOnlineScript();
            break;

        case '/search':
            site.innerHTML = await searchComponent();
            site.classList = 'site friends-layout';
            await searchComponentEvents();
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