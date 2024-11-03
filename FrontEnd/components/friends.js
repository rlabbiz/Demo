import { header, menu } from '../scripts/components.js'
import { fetchProfile, globalState, fetchUsers } from '../scripts/fetchData.js';

export async function friendsComponent() {
    if (globalState.user === null) 
        await fetchProfile();
    if (globalState.user === null)
        return (`cant fetch user data`)

    return (
        header() +
        menu() +
        friendsContent()
    )
}

export function friendsContent() {
    let userRequestLength = 0;
    let userFriendsLength = 0;

    if (globalState.friends) 
        userFriendsLength = globalState.friends.length
    if (globalState.requests)
        userRequestLength = globalState.requests.length;

    console.log(globalState.user)
    return (`
    <div class="friends-list" w-tid="6">
        <div class="friend-header" w-tid="7">
            <h2 w-tid="8">Friends Hub</h2>
            <div class="friend-stats" w-tid="9">
                <div class="stat-card" w-tid="10">
                    <div class="stat-number" w-tid="11">${userFriendsLength}</div>
                    <div class="stat-label" w-tid="12">Total Friends</div>
                </div>
                <div class="stat-card" w-tid="13">
                    <div class="stat-number" w-tid="14">0</div>
                    <div class="stat-label" w-tid="15">Online Now</div>
                </div>
                <div class="stat-card" w-tid="16">
                    <div class="stat-number" w-tid="17">${userRequestLength}</div>
                    <div class="stat-label" w-tid="18">New Requests</div>
                </div>
            </div>
            <div class="search-bar" w-tid="19">
                <input type="text" class="search-input" placeholder="Search friends..." w-tid="20">
            </div>
        </div>
        
        <h3 w-tid="21">Friend Requests</h3>
        <div class="friend-requests" w-tid="22">
            ${friendsRequests()}
        </div>

        <h3 w-tid="49">Friends List</h3>
        <div class="friends-list" w-tid="50">
            ${friendsList()}
        </div>
    </div>
    `)
}

function friendsRequests() {
    console.log(globalState.requests)
    const requests = globalState.requests.map(r => {
        return (`
            <div class="friend-card" w-tid="23" style="display: flex;">
                <div class="friend-info" w-tid="24">
                    <div class="friend-avatar-container" w-tid="25">
                        <img src="${r.sender.avatar}" alt="${r.sender.username}" class="friend-avatar" w-tid="26" data-image_id="1" alt-rewritten="${r.sender.first_name} ${r.sender.last_name}, a young boxer with a determined expression, stands in boxing stance within a visually striking black and white portrait photograph.">
                    </div>
                    <div class="friend-details" w-tid="27">
                        <div class="friend-name" w-tid="28">${r.sender.first_name} ${r.sender.last_name}</div>
                        <div class="friend-level" w-tid="29">Level: ${r.sender.id}</div>
                        <div class="friend-registered" w-tid="30">Registered: </div>
                    </div>
                </div>
                <div class="friend-actions">
                    <button class="btn btn-accept" key="${r.sender.username}" ><i class="fas fa-user-check"></i></button>
                    <button class="btn btn-decline" key="${r.sender.username}" ><i class="fas fa-user-times"></i></button>
                </div>
            </div>
        `)
    })

    return requests.join('\n')
}

function friendsList() {
    const innerHTML = globalState.friends.map(r => {
        return (`
            <div class="friend-card"style="display: flex;">
                <div class="friend-info">
                    <div class="friend-avatar-container">
                        <img src="${r.friend.avatar}" alt="${r.friend.username}" class="friend-avatar">
                        <div class="status-indicator status-online" ></div>
                    </div>
                    <div class="friend-details">
                        <div class="friend-name">${r.friend.first_name} ${r.friend.last_name}</div>
                        <div class="friend-level">Level: 42</div>
                        <div class="friend-registered">Registered: May 15, 2022</div>
                    </div>
                </div>
                <div class="friend-actions">
                    <button class="btn btn-message" key="${r.friend.username}"><i class="fas fa-envelope"></i></button>
                    <button class="btn btn-play" key="${r.friend.username}"><i class="fas fa-gamepad"></i></button>
                    <button class="btn btn-unfriend" key="${r.friend.username}"><i class="fas fa-user-minus"></i></button>
                    <button class="btn btn-unfriend" key="${r.friend.username}"><i class="fas fa-user-slash"></i></button>
                    <button class="btn btn-view" key="${r.friend.username}"><i class="fas fa-eye"></i></button>
                </div>
            </div>    
        `)
    })

    return innerHTML.join('\n');
}