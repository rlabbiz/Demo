import { showFriendRequest } from "./generalMessage.js";

export const globalState = {
    user: null,
    users: null,
    friends: null,
    requests: null,
    sendRequests: null,
    game: null,
    ws: null,
};
  
export async function fetchProfile() {
    const response = await fetch('http://127.0.0.1:8000/api/profile/', {
        method: 'GET',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json',
        }
    });

    const userData = await response.json();
    globalState.user = userData.user;
    globalState.requests = userData.user.friend_requests;
    globalState.sendRequests = userData.user.sent_requests;
    globalState.friends = userData.user.friends;
    globalState.game = userData.user.game_stats;

    if (!globalState.ws)
        globalState.ws = new WebSocket(`ws://127.0.0.1:8000/ws/realtimenotifications/${globalState.user.username}/`);
    globalState.ws.onmessage = function (e) {
        const data = JSON.parse(e.data);
        showFriendRequest();
        console.log('Friend request received');
    }

    globalState.ws.onclose = function (e) {
        globalState.ws.close();
        globalState.ws = null;
    }
}

export async function sendRealTimeNotification(type, message) {
    if (globalState.user === null)
        return ;
    if (globalState.ws.readyState !== 1)
        globalState.ws = new WebSocket(`ws://127.0.0.1:8000/ws/realtimenotifications/${globalState.user.username}/`);
    globalState.ws.send(JSON.stringify({
        type: type,
        message: message
    }));
}

export async function fetchUsers() {
    const response = await fetch('http://127.0.0.1:8000/api/users/', {
        method: 'GET',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json',
        }
    })
    const usersData = await response.json();
    globalState.users = usersData.users;
}