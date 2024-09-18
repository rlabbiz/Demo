export function SingUpComponent() {
  return (`
    <div class="singup">
        <div class="singup-logo">
            <img src="../images/logo.png" alt="logo">
        </div>
        <div class="singup-title">
            <h2>Sign Up</h2>
        </div>
        <div class="singup-form">
            <form action="/singup" method="POST">
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required>
                </div>
                
                <div class="form-group">
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required>
                </div>

                <div class="form-group">
                    <label for="userName">User Name:</label>
                    <input type="text" id="userName" name="userName" required>
                </div>

                <div class="form-group">
                    <label for="email">email:</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>

                <div class="form-group">
                    <label for="re-password">Repeat Password:</label>
                    <input type="password" id="re-password" name="re-password" required>
                </div>
                
                <div class="form-group">
                    <input type="button" id="submit" value="Sing Up">
                </div>
            </form>
        </div>
    </div>
  `);
}