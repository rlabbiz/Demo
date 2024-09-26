import { header, menu } from '../scripts/components.js'

export function profileComponent() {
    return (
        header() +
        menu() +
        profileContent()
    )
}

export function profileContent() {
    return (`
        <div id="profile">
            <div class="profile-header" w-tid="11" style="/* transform: rotateY(-0.54deg) rotateX(-15.4deg); */">
                <div class="profile-pic-container" w-tid="12">
                    <img src="https://replicate.delivery/yhqm/U44bRVmR6YqhD991cppxgyxHmkz4fjIsHtWibr9fGwuQnufmA/out-0.webp" alt="Player's profile picture" class="profile-pic" w-tid="13" data-image_id="0" alt-rewritten="Neon-lit ping pong match captured in vibrant digital photograph." style="box-shadow: rgba(61, 189, 167, 0.5) 0px 0px 20px;">
                    <div class="rank-badge" w-tid="14">A+</div>
                </div>
                <div class="profile-info" w-tid="15">
                    <h1 w-tid="16">Sarah Johnson</h1>
                    <p w-tid="17">@sarahj</p>
                    <p w-tid="18">Ping Pong Prodigy</p>
                    <button class="edit-profile-btn" onclick="window._4ltzjkb485g.href='https://webs.im/settings/'" w-tid="19">Edit Profile</button>
                </div>
            </div>

            <div class="stats-container" w-tid="20">
                <div class="stat-box" w-tid="21">
                    <h3 w-tid="22">Matches Played</h3>
                    <p w-tid="23">538</p>
                </div>
                <div class="stat-box" w-tid="24">
                    <h3 w-tid="25">Win Rate</h3>
                    <p w-tid="26">72%</p>
                </div>
                <div class="stat-box" w-tid="27">
                    <h3 w-tid="28">Highest Score</h3>
                    <p w-tid="29">21-3</p>
                </div>
                <div class="stat-box" w-tid="30">
                    <h3 w-tid="31">Tournament Wins</h3>
                    <p w-tid="32">12</p>
                </div>
            </div>

            <div class="last-matches">
                <h2>Last Matches</h2>
                <div class="matches">
                    <div class="match win">
                        <img src="images/image 1.png" alt="">
                        <h4>telha</h4>
                        <span>5 : 0</span>
                        <i><img src="images/image 4.png" alt=""></i>
                    </div>

                    <div class="match lose">
                        <img src="images/image 1.png" alt="">
                        <h4>telha</h4>
                        <span>5 : 0</span>
                        <i><img src="images/image 6.png" alt=""></i>
                    </div>

                    <div class="match win">
                        <img src="images/image 1.png" alt="">
                        <h4>telha</h4>
                        <span>5 : 0</span>
                        <i><img src="images/image 4.png" alt=""></i>
                    </div>

                    <div class="match win">
                        <img src="images/image 1.png" alt="">
                        <h4>telha</h4>
                        <span>5 : 0</span>
                        <i><img src="images/image 4.png" alt=""></i>
                    </div>

                    <div class="match win">
                        <img src="images/image 1.png" alt="">
                        <h4>telha</h4>
                        <span>5 : 0</span>
                        <i><img src="images/image 4.png" alt=""></i>
                    </div>

                    <div class="match lose">
                        <img src="images/image 1.png" alt="">
                        <h4>telha</h4>
                        <span>5 : 0</span>
                        <i><img src="images/image 6.png" alt=""></i>
                    </div>
                </div>
            </div>
        </div>
    `)
}