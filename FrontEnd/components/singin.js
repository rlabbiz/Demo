import { urlHandler } from '../scripts/routes.js';

export function SingInComponent() {
    return (`
      <div class="sing-forms">
          <div class="logo">
              <img src="../images/logo.png" alt="logo" />
          </div>
          <div class="form">
              <div class="form-titles">
                  <h4 class="active singin">Sign In</h4>
                  <h4 class="singup">Sign Up</h4>
              </div>
              <div class="form-inputs">
                  <form action="/singup" method="post">
                      <div class="filed">
                            <label for="userName"><i class="far fa-user-circle"></i></label>
                            <input type="text" id="userName" name="userName" placeholder="Username" required />
                      </div>
                      <div class="filed password">
                            <label for="password"><i class="fas fa-lock"></i></label>
                            <input type="password" id="password" name="password" placeholder="Password" required />
                            <span class="password-eye"><i class="fas fa-eye-slash"></i></span>
                      </div>
                      <button type="submit-singup">Sign In <i class="fas fa-sign-in-alt"></i></button>
                  </form>
                  <div class="form-social">
                      <div class="line">
                          <span> OR </span>
                      </div>
                      <div class="social-icons">
                          <a class="intra" href="#"><img src="../images/42intra.png" alt="42 intra" /> Sing up with 42 Intra</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `);
}

export function SingUpComponentScript() {
    const passwordEye = document.querySelector('.password-eye');
    const password = document.querySelector('#password');
    if (password) {
        password.addEventListener('paste', function (e) {
            e.preventDefault();
        })
        password.addEventListener('copy', function (e) {
            e.preventDefault();
        })
    }
    if (passwordEye && password) {
        passwordEye.addEventListener('click', function () {
            if (password.type === 'password') {
                password.type = 'text';
                passwordEye.innerHTML = '<i class="fas fa-eye"></i>';

            } else {
                password.type = 'password';
                passwordEye.innerHTML = '<i class="fas fa-eye-slash"></i>';
            }
        })
    }

    // handle form submit event for sign up 
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const userName = document.querySelector('#userName').value;
            const password = document.querySelector('#password').value;

            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'username': userName,
                    'password': password
                })
            });

            response.json().then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    document.cookie = `user=${userName}`;
                    // fetch user data
                    console.log(`the data`, data);
                    // fetchData();
                    // history.pushState(null, null, '/');
                    // urlHandler();
                }
            })
        })
    }

}

async function fetchData() {
    const response = await fetch(`http://127.0.0.1:8000/api/profile/rida/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                console.log(data);
            }
        })
    }
