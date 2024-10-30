export const globalState = {
    user: null,
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