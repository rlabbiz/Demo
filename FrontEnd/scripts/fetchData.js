import { gameAiComponent } from "./components";

export const globalState = {
    user: null,
    users: null,
    friends: null,
    requests: null,
    sendRequests: null,
    game: null,
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