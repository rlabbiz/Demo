import { header } from '../scripts/components.js'
import { menu } from '../scripts/components.js'
import {
    fetchProfile,
    globalState,
    fetchUsers,
} from '../scripts/fetchData.js';
import { user } from './gameWaiting';

export async function searchComponent() {
    if (globalState.user === null) 
        await fetchProfile();
    if (globalState.user === null)
        return (`cant fetch user data`)

    await fetchUsers();

    // get query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const query = urlParams.get('query');

    return (
        header() +
        menu() +
        searchContent(query)
    )
}

function searchContent(query) {

    // get user from global state and filter by query string, by username and first name and last name
    const users = globalState.users.filter(user => {
        return user.username.includes(query) || user.first_name.includes(query) || user.last_name.includes(query)
    })

    console.log(users)

    const usersHTML = users.map(user => {
        return (`
            <div class="friend-card" w-tid="36" style="display: flex;">
                <div class="friend-info" w-tid="37">
                    <div class="friend-avatar-container" w-tid="38">
                        <img src="${user.avatar}" alt="Ryan Garcia" class="friend-avatar" w-tid="39" data-image_id="1" alt-rewritten="Ryan Garcia, a young boxer with a determined expression, stands in boxing stance within a visually striking black and white portrait photograph.">
                    </div>
                    <div class="friend-details" w-tid="40">
                        <div class="friend-info">
                            <div class="friend-name" w-tid="41">${user.first_name} ${user.last_name}</div>
                            <div class="friend-level" w-tid="42">Level: ${user.game_stats[0].level}</div>
                        </div>
                        <div class="friend-registered" w-tid="43">Registered: ${user.created_at}</div>
                    </div>
                </div>
                <div class="friend-actions" w-tid="46">
                    <button class="btn btn-accept" w-tid="47">Send Friend Request</button>
                </div>
            </div>
        `)
    })


    return (`
        <div class="search-results friends-list">
            <div class="search-header" w-tid="35">
                <p>You have ${users.length} in your search - ${query}</p>
            </div>
            ${usersHTML.join('\n')}
        </div>
    `)
}