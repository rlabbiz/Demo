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
                      <div class="filed">
                          <label for="password"><i class="fas fa-lock"></i></label>
                          <input type="password" id="password" name="password" placeholder="Password" required />
                      </div>
                      <button type="submit-singup">Sign In <i class="fas fa-sign-in-alt"></i></button>
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
