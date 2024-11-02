export const globalState = {
    user: null,
    users: null,
    friends: null,
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

    // fetch friends 
    const responseFriends = await fetch('http://127.0.0.1:8000/api/friends/', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const friendsData = await responseFriends.json();
    globalState.friends = friendsData.friends;
    console.log(globalState.friends)
}