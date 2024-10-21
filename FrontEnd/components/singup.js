export function SingUpComponent() {
  return (`
    <div class="sing-forms">
        <div class="logo">
            <img src="../images/logo.png" alt="logo" />
        </div>
        <div class="form">
            <div class="form-titles">
                <h4 class="singin">Sign In</h4>
                <h4 class="active singup">Sign Up</h4>
            </div>
            <div class="form-inputs">
                <form action="/singup" method="post">
                    <div class="filed">
                        <label for="firstName"><i class="far fa-user-circle"></i></label>
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" required/>
                    </div>
                    <div class="filed">
                        <label for="lastName"><i class="far fa-user-circle"></i></label>
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                    </div>
                    <div class="filed">
                        <label for="userName"><i class="far fa-user-circle"></i></label>
                        <input type="text" id="userName" name="userName" placeholder="Username" required />
                    </div>
                    <div class="filed">
                        <label for="email"><i class="fas fa-at"></i></label>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div class="filed password">
                        <label for="password"><i class="fas fa-lock"></i></label>
                        <input type="password" id="password" name="password" placeholder="Password" required />
                        <span class="password-eye"><i class="fas fa-eye-slash"></i></span>
                    </div>
                    <div class="filed">
                        <label for="re-password"><i class="fas fa-check"></i></label>
                        <input type="password" id="re-password" name="re-password" placeholder="Confirm Password" required />
                    </div>
                    <div class="gender-items">
                        <span>Gender</span>
                        <div class="radio">
                            <input type="radio" name="gender" id="gender-male" />
                            <label for="gender-male">Male</label>
                            <input type="radio" name="gender" id="gender-female" />
                            <label for="gender-female">Female</label>
                        </div>
                    </div>

                    <button type="submit-singup">Sign Up <i class="fas fa-user-plus"></i></button>
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
export function singupScript() {
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

    const rePassword = document.querySelector('#re-password');
    if (rePassword) {
        rePassword.addEventListener('paste', function (e) {
            e.preventDefault();
        })
        rePassword.addEventListener('copy', function (e) {
            e.preventDefault();
        })
    }
}