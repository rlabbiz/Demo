import { navigate } from '../main.js';

let socket;

export function renderSignIn() {
  const signup = document.getElementById("header");
  const content = document.getElementById('content');
  content.innerHTML = "";
  const login = (e) => {
    console.log("reda");

    const loginData = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    console.log(loginData);
    fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(loginData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("ikhdm ghaya");
      console.log(data);
      if (data) {
        console.log(data);
        // localStorage.setItem("access_token", data.jwt.access_token);
        // localStorage.setItem("refresh_token", data.jwt.refresh_token);
        alert("Login successful!");
        initializeWebSocket();
        window.history.pushState({ page: "profile" }, "profile", "/profile");
        navigate("/profile");
      } 
      else 
      {
        alert("Login failed: " + data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
    });
  };

  signup.innerHTML = `
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div id="borderSignin" class="container mt-5">
          <div class="row justify-content-center">
              <div class="col-md-6">
                  <h2 class="text-center" style="color:#000;">Sign In</h2>
                  <div id="signInForm" style="font-family: 'Fantasy', cursive;">
                      <div class="mb-3">
                          <label for="username" class="form-label" style="color:#000;">Username</label>
                          <input type="text" class="form-control" id="username" required>
                      </div>
                      <div class="mb-3">
                        <label for="password" class="form-label" style="color:#000;">Password</label>
                        <input type="password" class="form-control" id="password" required>
                      </div>
                      <button id="signInFormBtn" type="submit" class="btn btn-primary w-100 mt-2">Sign In</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  `;
  document.getElementById("signInFormBtn").onclick = login;
}



//websocket
function initializeWebSocket() 
{
  var user_id = getUserIdFromToken(); 
  socket = new WebSocket(`ws://127.0.0.1:8000/ws/is_online/${user_id}/`);
  console.log("WebSocket connection being established...");

  socket.onopen = function() {
    console.log('WebSocket connection established.');
    sendLoginStatus(); 
  };

  socket.onmessage = function(event) {
    console.log('Received message:');
    console.log('Event Data:', event.data);
    
    const data = JSON.parse(event.data);

    if (data.type === 'user_status') {
      console.log('User status received');
      
      // Get the user_id and online status from the WebSocket message
      const userId = data.user_id; 
      // const isOnline = data.is_online;

      console.log("---> User ID: " + userId);
    }
  };

  socket.onerror = function(error) {
    console.error('WebSocket Error:', error);
  };

  socket.onclose = function() {
    console.log('WebSocket connection closed.');
  };
}


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function getUserIdFromToken() {
  const token = getCookie('access_token');  // Retrieve token from cookies
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.user_id; 
  } catch (error) {
    console.error('Failed to decode token or parse payload:', error);
    return null;
  }
}

function sendLoginStatus() {
  const userId = getUserIdFromToken();
  console.log("ghiiiiiid");
  console.log(userId);
  if (socket && socket.readyState === WebSocket.OPEN) 
  {
    socket.send(JSON.stringify({
      'type': 'login_status',
      'user_id': userId, 
      'is_online': true
    }));
  } 
  else 
  {
    console.error('WebSocket is not open. Cannot send login status.');
  }
}
