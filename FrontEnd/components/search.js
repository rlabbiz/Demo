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
        if (user.username === globalState.user.username) return false;
        return user.username.includes(query) || user.first_name.includes(query) || user.last_name.includes(query)
    })

    console.log(users)

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
    let buttonValue = 'Send Friend Request';
    let buttonClass = 'btn btn-request';
    let declineButton = '';

    globalState.user.friend_requests.forEach(request => {
        if (request.sender.username === user.username) {
            buttonValue = 'Accept Friend Request';
            buttonClass = 'btn btn-accept';
            declineButton = `<button class="btn btn-decline" key="${user.username}">Decline Friend Request</button>`;
        }
    })

    return (`
        <button class="${buttonClass}" key="${user.username}">${buttonValue}</button>
        ${declineButton}
    `)
}

export async function searchComponentEvents() {
    console.log(globalState.user)
    const friendRequestButtons = document.querySelectorAll('.btn-request');
    friendRequestButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
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
                    request_status: 'P'
                })
            }).then(response => response.json())
            console.log(response)
            if (response.status === 200) {
                console.log('Friend request sent')
            } else {
                console.log('Friend request failed')
            }
        })
    })

    const friendAcceptButtons = document.querySelectorAll('.btn-accept');
    friendAcceptButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
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
            if (response.status === 200) {
                console.log('Friend request accepted')
            } else {
                console.log('Friend request failed')
            }
        })
    })
}