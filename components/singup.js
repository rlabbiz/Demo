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
                    <div class="filed">
                        <label for="password"><i class="fas fa-lock"></i></label>
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    <div class="filed">
                        <label for="re-password"><i class="fas fa-check"></i></label>
                        <input type="password" id="re-password" name="re-password" placeholder="Confirm Password" required />
                    </div>

                    <div class="chose-avatar">
                        <div class="title">
                            <h4>Choose an Avatar: </h4>
                        </div>
                        <div class="avatars">
                            <img class="active" src="../images/avatars/avatar1.webp" alt="avatar1" />
                            <img src="../images/avatars/avatar2.webp" alt="avatar1" />
                            <img src="../images/avatars/avatar3.webp" alt="avatar1" />
                            <img src="../images/avatars/avatar4.webp" alt="avatar1" />
                        </div>
                    </div>

                    <div class="upload-avatar">
                        <div class="title">
                            <h4><label for="avatar-input">Or upload your own: </label></h4>
                        </div>
                        <label class="choose-label" for="avatar-input">Choose File</i></label>
                        <input type="file" id="avatar-input" name="avatar" accept="image/*" />
                    </div>

                    <div class="form-link">
                        <a href="/singin">Already have an account? <span>Sing In</span></a>
                    </div>
                    <button type="submit-singup">Sign Up <i class="fas fa-user-plus"></i></button>
                </form>
                <div class="form-social">
                    <div class="line">
                        <span> OR </span>
                    </div>
                    <div class="social-icons">
                        <a class="intra" href="#"><img src="../images/42intra.png" alt="42 intra" /> Sing up with 42 Intra</a>
                        <a class="github" href="#"><img src="../images/github.png" alt="42 intra" /> Sing up with Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `);
}
export function singupScript() {
    const avatarInput = document.querySelectorAll('.avatars img');
    if (avatarInput) {
        avatarInput.forEach((avatar) => {
            avatar.addEventListener('click', function (e) {
                avatarInput.forEach((avatar) => {
                    avatar.classList.remove('active');
                });
                e.target.classList.add('active');
            })
        })
    }
}