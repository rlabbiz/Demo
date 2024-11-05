import { header, homeComponent, menu } from '../scripts/components.js'
import { fetchProfile, globalState } from '../scripts/fetchData.js';
import { urlHandler } from '../scripts/routes.js';


export async function ChatComponent() {
    if (!globalState.user)
        await fetchProfile();
    if (globalState.user === null) {
        return (`cant fetch user data`)
    }

    return (
        header() +
        menu() +
        chatContent()
    )
}

export function chatContent() {
    if (!globalState.friends)
        return (`<p>No friends</p>`)

    // get username parameter from url to fetch user data
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('user');
    let friend = null;
    if (username) {
        friend = globalState.friends.find(friend => friend.friend.username === username);
        if (!friend) {
            return (`
                <div class="chat" style="background: none; width: 100%; display: block;">
                    ${username} not found
                </div>
            `)
        }
        friend = friend.friend;
    }
    console.log(friend);
    return (`
        <div class="chat">
            ${chatProfile(friend)}

            <div class="chat-friends">
                ${chatFriend()} 
            </div>

            <div class="chat-content">
                ${chatMessages(friend)}
            </div>
            
            ${chatInput(friend)}
            
        </div>
    `)
}

function chatFriend() {
    let innerHtml = '';
    globalState.friends.forEach(friend => {
        innerHtml += `
            <div class="chat-friend" id="${friend.friend.username}">
                <img src="${friend.friend.avatar}" alt="friend">
                <p>${friend.friend.username}</p>
                <span class="offline"></span>
            </div>\n
        `
    })

    if (innerHtml === '') 
        innerHtml = `<p>No friends</p>`
    return innerHtml;
}

function chatProfile(friend) {
    if (!friend) 
        return (``)

    return (`
        <div class="chat-header">
            <div class="chat-profile">
                <img src="${friend.avatar}" alt="friend">
                <p>${friend.username}</p>
            </div>
        </div>
    `)
}

function chatMessages(friend) {
    if (!friend) 
        return (``)

    return (`
        <div class="right">
            <p>hey, how are you? hey, how are you? hey, how are you? </p>
        </div>
        <div class="left">
            <p>hey, how are you? hey, how are you? hey, how are you? hey, how are you? hey, how are you? hey, how are you? hey, how are you? hey, how are you?</p>
        </div>
    `)    
}

function chatInput(friend) {
    if (!friend) 
        return (``)

    return (`
        <div class="chat-input">
            <input type="text" placeholder="Type a message...">
            <button>Send</button>
        </div>        
    `)
}

export async function chatScript() {
    const friends = document.querySelectorAll('.chat-friend');

    if (friends) {
        friends.forEach(friend => {
            friend.addEventListener('click', async () => {
                history.pushState(null, null, `/chat?user=${friend.id}`);
                urlHandler();
            })
        })
    }
}