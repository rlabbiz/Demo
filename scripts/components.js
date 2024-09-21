export function gameComponent() {
  return (
    header() +
    menu() + 
    gameContent() +
    gameSidebar()
  )
}

export function gameSettingComponent() {
    return (
        header() +
        menu() +
        gameSettingContent()
    )
}

export function homeComponent() {
    return (
        header() +
        menu() +
        homeContent() +
        homeSidebar()
    )
}

export function header() {
    return (`
        <div class="header">
            <div class="search">
                <input type="text" placeholder="Search" />
            </div>
            <div class="profile">
                <i class="far fa-bell notification"></i>
                <i class="far fa-paper-plane send"></i>
                <img src="images/profile.png" class="header-profile-link" alt="profile">
            </div>
            <div class="header-menu">
                <a href="#" class="profile-link"><i class="fas fa-user"></i> Profile</a>
                <a href="#" class="setting-link"><i class="fas fa-cog" aria-hidden="true"></i> Setting</a>
                <a href="#" class="logout-link"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>
        </div>
    `)
}

export function gameSidebar() {
    return (`
        <div class="sidebar">
            <h2>Play With Friends</h2>
            <div class="friends">
                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#">Play</a>
                </div>

                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#">Play</a>
                </div>

                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#">Play</a>
                </div>

                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#">Play</a>
                </div>

                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#">Play</a>
                </div>

                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#">Play</a>
                </div>
            </div>
        </div>
    `)
}

export function menu() {
    return (`
        <div class="menu">
            <div class="logo">
                <img src="images/logo.png" alt="logo">
            </div>

            <div class="menu-items">
                <ul>
                    <li><a href="#" class="home"><i class="fas fa-home"></i></a></li>
                    <li><a href="#"><i class="fas fa-users"></i></a></li>
                    <li class="active"><a href="#" class="game"><i class="fas fa-play-circle"></i></a></li>
                    <li><a href="#" class="game-setting-link"><i class="fas fa-sliders-h"></i></a></li>
                    <li><a href="#"><i class="fas fa-store"></i></a></li>
                    <li><a href="#"><i class="fas fa-cog"></i></a></li>
                </ul>
            </div>
        </div>
    `)
}

export function gameContent() {
    return (`
        <div class="content">
            <div class="game-mode">
                <h2 class="heading">Games modes</h2>
                <div class="models">
                    <div class="model classic">
                        <h4>CLASSIC</h4>
                        <p>play online game, with random person.</p>
                        <img src="images/classic.png" alt="" />
                        <a href="#">Play now</a>
                    </div>

                    <div class="model center ai">
                        <h4>AI - MODE</h4>
                        <p>chose AI level and have fun.</p>
                        <img src="images/ai-mode.png" alt="" />
                        <a href="#">Play now</a>
                    </div>

                    <div class="model tournament">
                        <h4>TOURNAMENT</h4>
                        <p>Create tournament, or join to tournament.</p>
                        <img src="images/tournament .png" alt="" />
                        <a href="#">Play now</a>
                    </div>
                    
                </div>
            </div>

            <div class="best-players">
                <h2 class="heading">Best Players</h2>
                <div class="player">
                    <img src="images/profile.png" alt="" >
                    <h6>KAMAZLI</h6>
                    <p>2540PTS</p>
                    <span>9.2</span>
                </div>

                <div class="player">
                    <img src="images/profile.png" alt="" >
                    <h6>KAMAZLI</h6>
                    <p>2540PTS</p>
                    <span>9.2</span>
                </div>

                <div class="player">
                    <img src="images/profile.png" alt="" >
                    <h6>KAMAZLI</h6>
                    <p>2540PTS</p>
                    <span>9.2</span>
                </div>

                <div class="player">
                    <img src="images/profile.png" alt="" >
                    <h6>KAMAZLI</h6>
                    <p>2540PTS</p>
                    <span>9.2</span>
                </div>

                <div class="player">
                    <img src="images/profile.png" alt="" >
                    <h6>KAMAZLI</h6>
                    <p>2540PTS</p>
                    <span>9.2</span>
                </div>

                <div class="player">
                    <img src="images/profile.png" alt="" >
                    <h6>KAMAZLI</h6>
                    <p>2540PTS</p>
                    <span>9.2</span>
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

export function gameStartingComponent() {
    return (`
        <div class="classic-game">
            <h2>Wait for other player</h2>
            <div class="waiting">
                <div class="waiting__player">
                    <div class="image-cover">
                        <img src="images/profile.png" alt="">
                    </div>
                    <h4>Rlabbiz</h4>
                </div>
                <div class="waiting__player">
                    <div class="image-cover">
                        <!-- <img src="images/profile.png" alt=""> -->
                    </div>
                    <h4>waiting...</h4>
                </div>
            </div>
            <a href="#">Cancel</a>
        </div>    
    `)
}

export function gameAiComponent() {
    return (`
        <div class="game-container">
            <i class="fas fa-times"></i>
            <div class="player-field">
                <img src="images/profile.png" alt="">
                <h4>Player</h4>
            </div>
            <canvas id="pong" width="950px" height="500"></canvas>
            <div class="player-field">
                <img src="images/profile.png" alt="">
                <h4>Player</h4>
            </div>
        </div>
    `)
}

export function gameSettingContent() {
    return (`
        <div class="game-settings">
            <h2>Game Settings</h2>
            <div class="settings">
                <div class="player">
                    <h4>Player</h4>
                    <div class="direction">
                        <span>Left</span>
                        <span class="active">Default</span>
                        <span>Right</span>
                    </div>
                    <div class="color">
                        <span class="red" color="red"></span>
                        <span class="green" color="green"></span>
                        <span class="blue" color="blue"></span>
                    </div>
                </div>

                <div class="ball">
                    <h4>Ball</h4>
                    <div class="color">
                        <span class="red" color="red"></span>
                        <span class="green" color="green"></span>
                        <span class="blue" color="blue"></span>
                    </div>
                </div>

                <div class="net">
                    <h4>Net</h4>
                    <div class="direction">
                        <span class="active" direction="0">-------</span>
                        <span direction="1">~~~~~~~</span>
                    </div>
                    <div class="color">
                        <span class="red" color="red"></span>
                        <span class="green" color="green"></span>
                        <span class="blue" color="blue"></span>
                    </div>
                </div>

                <div class="table">
                    <h4>Table</h4>
                    <div class="color">
                        <span class="red" color="red"></span>
                        <span class="green" color="green"></span>
                        <span class="blue" color="blue"></span>
                    </div>
                </div>
            </div>
            <div class="live-settings">
                <h4>Live Settings</h4>
                <canvas id="game-setting-canvas"></canvas>
            </div>
        </div>
    `)
}


export function homeSidebar() {
    return (`
        <div class="sidebar">
            <div class="profile">
                <h2>Profile</h2>
                <div class="image-cover">
                        <img src="images/profile.png" alt="profile">
                        <div class="status">
                            <h4>SOLIX</h4>
                            <p>Level 6.18</p>
                        </div>
                </div>
                <div class="profile-info">
                    <div>
                        <p>Last Game</p>
                        <h4>Won</h4>
                    </div>

                    <div>
                        <p>Status</p>
                        <h4 class="offline">Offline</h4>
                    </div>

                    <div>
                        <p>Progress</p>
                        <h4 class="progress">+120PTS</h4>
                    </div>
                </div>
            </div>

            <h2>Friend Request</h2>
            <div class="friend-request">
                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#" class="accept">Accept</a>
                    <a href="#" class="reject">Decline</a>
                </div>

                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#" class="accept">Accept</a>
                    <a href="#" class="reject">Decline</a>
                </div>

                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#" class="accept">Accept</a>
                    <a href="#" class="reject">Decline</a>
                </div>

                <div class="friend">
                    <img src="images/profile.png" alt="">
                    <h4>Rida labbiz</h4>
                    <a href="#" class="accept">Accept</a>
                    <a href="#" class="reject">Decline</a>
                </div>
            </div>
        </div>    
    `)
}

export function homeContent() {
    return (`
        <div class="content">
            <div class="game-mode">
                <h2 class="heading">Games modes</h2>
                <div class="models">
                    <div class="model classic">
                        <h4>CLASSIC</h4>
                        <p>play online game, with random person.</p>
                        <img src="images/classic.png" alt="" />
                        <a href="#">Play now</a>
                    </div>

                    <div class="model center ai">
                        <h4>AI - MODE</h4>
                        <p>chose AI level and have fun.</p>
                        <img src="images/ai-mode.png" alt="" />
                        <a href="#">Play now</a>
                    </div>

                    <div class="model tournament">
                        <h4>TOURNAMENT</h4>
                        <p>Create tournament, or join to tournament.</p>
                        <img src="images/tournament .png" alt="" />
                        <a href="#">Play now</a>
                    </div>
                    
                </div>
            </div>
        </div>
    `)
}