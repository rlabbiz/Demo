import { header } from '../scripts/components.js'
import { menu } from '../scripts/components.js'
import { fetchProfile, globalState, fetchUsers } from '../scripts/fetchData.js';
import { urlHandler } from '../scripts/routes.js';
import { getButtons } from './profile.js';
import { handleFriendDecline, handleViewMessage } from '../scripts/generalMessage.js';

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
        if (user.username === globalState.user.username) return false;
        return user.username.includes(query) || user.first_name.includes(query) || user.last_name.includes(query)
    })

    const usersHTML = users.map(user => {
        return (`
            <div class="friend-card" style="display: flex;">
                <div class="friend-info">
                    <div class="friend-avatar-container">
                        <img src="${user.avatar}" alt="${user.username}" class="friend-avatar">
                    </div>
                    <div class="friend-details">
                        <div class="friend-info">
                            <div class="friend-name">${user.first_name} ${user.last_name}</div>
                            <div class="friend-level">Level: ${user.game_stats[0].level}</div>
                        </div>
                        <div class="friend-registered">Registered: ${user.created_at}</div>
                    </div>
                </div>
                <div class="friend-actions">
                    ${friendButton(user)}
                    <button class="btn btn-view" key="${user.username}"><i key="${user.username}" class="fas fa-eye"></i></button>
                </div>
            </div>
        `)
    })


    return (`
        <div class="search-results friends-list">
            <div class="search-header">
                <p>You have ${users.length} in your search - ${query}</p>
            </div>
            ${usersHTML.join('\n')}
        </div>
    `)
}

function friendButton(user) {
    const requestButton = {innerHtml: `<i key=${user.username} class="fas fa-user-plus"></i>`, class: 'btn btn-request', key: user.username};
    const acceptButton = {innerHtml: `<i key=${user.username} class="fas fa-user-check"></i>`, class: 'btn btn-accept', key: user.username};
    const declineButton = {innerHtml: `<i key=${user.username} class="fas fa-user-times"></i>`, class: 'btn btn-decline', key: user.username};
    const unFriendButton = {innerHtml: `<i key=${user.username} class="fas fa-user-minus"></i>`, class: 'btn btn-unfriend', key: user.username};
    const blockButton = {innerHtml: `<i key=${user.username} class="fas fa-user-slash"></i>`, class: 'btn btn-block', key: user.username};
    const sendMessageButton = {innerHtml: `<i key=${user.username} class="fas fa-envelope"></i>`, class: 'btn btn-message', key: user.username};
    const playButton = {innerHtml: `<i key=${user.username} class="fas fa-gamepad"></i>`, class: 'btn btn-play', key: user.username};
    let isRequest = false;
    let isFriend = false;

    globalState.user.friend_requests.forEach(request => {
        if (request.sender.username === user.username)
            isRequest = true;
    })

    globalState.friends.forEach(friend => {
        if (friend.friend.username === user.username)
            isFriend = true;
    })

    if (isRequest) 
        return (getButtons([acceptButton, declineButton]))
    else if (isFriend)
        return (getButtons([sendMessageButton, playButton, unFriendButton, blockButton]))
    else
        return (getButtons([requestButton]))
}

export async function searchComponentEvents() {
    // handle the send request button
    const friendRequestButtons = document.querySelectorAll('button.btn-request');
    friendRequestButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            handleSendRequest(e);
        })
    })

    // handle the accpet request button
    const friendAcceptButtons = document.querySelectorAll('button.btn-accept');
    if (friendAcceptButtons.length != 0) {
        friendAcceptButtons.forEach(button => {
            button.addEventListener('click', async (e) => {
                await handleAcceptRequest(e);
            })
        })
    }

    // handle the decline request button
    const friendDeclineButtons = document.querySelectorAll('button.btn-decline');
    if (friendDeclineButtons.length != 0) {
        friendDeclineButtons.forEach(button => {
            button.addEventListener('click', async (e) => {
                await handleDeclineRequest(e);
            })
        })
    }

    // handle the view profile button
    const viewProfileButtons = document.querySelectorAll('button.btn-view');
    viewProfileButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            const username = e.target.getAttribute('key');
            history.pushState(null, null, `/profile?username=${username}`);
            urlHandler();
        })
    })

    // handle send message button
    const sendMessageButton = document.querySelectorAll("button.btn-message");
    sendMessageButton.forEach(button => {
        button.addEventListener('click', async (e) => {
            const username = e.target.getAttribute('key')
            history.pushState(null, null, `/chat?user=${username}`)
            urlHandler()
        })
    })

    // handle unfriend button 
    const unfriendButton = document.querySelectorAll('button.btn-unfriend');
    unfriendButton.forEach(button => {
        button.addEventListener('click', async (e) => {
            await handleUnfriend(e);
        })
    })
}

async function handleSendRequest(e) {
    let username =  e.target.getAttribute('key');
    const response = await fetch('http://127.0.0.1:8000/api/friend_operations/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sender: globalState.user.username,
            receiver: username,
            request_status: 'P'
        })
    }).then(response => response.json())
    if (!response.error) {
        // check e if button or i element and remove the button and add cencel button 
        if (e.target.tagName === 'I') {
            e.target.parentElement.remove();
        } else {
            e.target.remove();
        }
        handleViewMessage({title: 'Friend Request', message: response.success, type: 'success', icon: 'fas fa-check-circle'})
    } else
        handleFriendDecline({title: 'Friend Request', message: response.error, type: 'error', icon: 'fas fa-exclamation-circle'})
}

async function handleAcceptRequest(e) {
    const username = e.target.getAttribute('key');
    const response = await fetch('http://127.0.0.1:8000/api/friend_operations/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sender: globalState.user.username,
            receiver: username,
            request_status: 'A'
        })
    })
    if (response.ok) {
        console.log('Friend request accepted');
    } else {
        console.log('Friend request failed');
        console.log(response)
    }
}

export async function handleDeclineRequest(e) {
    const username = e.target.getAttribute('key');
    const response = await fetch('http://127.0.0.1:8000/api/friend_operations/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sender: globalState.user.username,
            receiver: username,
            request_status: 'D'
        })
    })
    if (response.ok) {
        console.log('Friend request declined');
    } else {
        console.log('Friend request failed');
        console.log(response)
    }
}

async function handleUnfriend(e) {
    const username = e.target.getAttribute('key');
    const response = fetch('http://127.0.0.1:8000/api/friend_operations/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sender: globalState.user.username,
            receiver: username,
            request_status: 'U'
        })
    })
}