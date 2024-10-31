import { header, menu } from '../scripts/components.js'
import { 
    fetchProfile, 
    globalState,
    fetchUsers,
} from '../scripts/fetchData.js';
    
export async function profileComponent() {
    if (globalState.user === null) {
        await fetchProfile();
    } 
    if (globalState.user === null) {
        return (`cant fetch user data`)
    }
    return (
        header() +
        menu() +
        profileContent()
    )
}

export function profileContent() {
    console.log(globalState.user)
    return (`
        <div id="profile">
            <div class="profile-header" w-tid="11" style="/* transform: rotateY(-0.54deg) rotateX(-15.4deg); */">
                <div class="profile-pic-container" w-tid="12">
                    <img src="${globalState.user.avatar}" alt="Player's profile picture" class="profile-pic" w-tid="13" data-image_id="0" alt-rewritten="Neon-lit ping pong match captured in vibrant digital photograph." style="box-shadow: rgba(61, 189, 167, 0.5) 0px 0px 20px;">
                </div>
                <div class="profile-info" w-tid="15">
                    <h1 w-tid="16">${globalState.user.first_name} ${globalState.user.last_name}</h1>
                    <p w-tid="17">@${globalState.user.username}</p>
                    <p w-tid="18">Level ${globalState.user.game_stats[0].level}</p>
                    <button class="edit-profile-btn" w-tid="19">Edit Profile</button>
                </div>
            </div>

            <div class="stats-container" w-tid="20">
                <div class="stat-box" w-tid="21">
                    <h3 w-tid="22">Matches Played</h3>
                    <p w-tid="23">${globalState.user.game_stats[0].total_games}</p>
                </div>
                <div class="stat-box" w-tid="24">
                    <h3 w-tid="25">Match Loses</h3>
                    <p w-tid="26">${globalState.user.game_stats[0].lost_games}</p>
                </div>
                <div class="stat-box" w-tid="27">
                    <h3 w-tid="28">Match Wins</h3>
                    <p w-tid="29">${globalState.user.game_stats[0].won_games}</p>
                </div>
                <div class="stat-box" w-tid="30">
                    <h3 w-tid="31">Tournament Wins</h3>
                    <p w-tid="32">${globalState.user.game_stats[0].won_tournaments}</p>
                </div>
            </div>

            <div class="match-history" w-tid="42">
                <h2 w-tid="43" class="">Recent Matches</h2>
                <div class="match-list" w-tid="44">
                    <div class="match-item" w-tid="45">
                        <span w-tid="46">vs. John Doe</span>
                        <span w-tid="47">Score: 21-18</span>
                        <span class="match-result win" w-tid="48">Win</span>
                    </div>
                    <div class="match-item" w-tid="49">
                        <span w-tid="50">vs. Emma Smith</span>
                        <span w-tid="51">Score: 19-21</span>
                        <span class="match-result loss" w-tid="52">Loss</span>
                    </div>
                    <div class="match-item" w-tid="53">
                        <span w-tid="54">vs. Mike Johnson</span>
                        <span w-tid="55">Score: 21-15</span>
                        <span class="match-result win" w-tid="56">Win</span>
                    </div>
                    <div class="match-item" w-tid="57">
                        <span w-tid="58">vs. Lisa Brown</span>
                        <span w-tid="59">Score: 21-12</span>
                        <span class="match-result win" w-tid="60">Win</span>
                    </div>
                    <div class="match-item" w-tid="61">
                        <span w-tid="62">vs. Tom Wilson</span>
                        <span w-tid="63">Score: 18-21</span>
                        <span class="match-result loss" w-tid="64">Loss</span>
                    </div>
                </div>
            </div>
            <div class="achievements" w-tid="65">
                <h2 w-tid="66">Achievements</h2>
                <div class="achievement-grid" w-tid="67">
                    <div class="achievement-item" w-tid="68">
                        <div class="achievement-icon" w-tid="69">🏆</div>
                        <div class="achievement-info" w-tid="70">
                            <h3 w-tid="71">Tournament Champion</h3>
                            <p w-tid="72">Win a major PingPongMasters tournament</p>
                        </div>
                    </div>
                    <div class="achievement-item" w-tid="73">
                        <div class="achievement-icon" w-tid="74">🔥</div>
                        <div class="achievement-info" w-tid="75">
                            <h3 w-tid="76">On Fire</h3>
                            <p w-tid="77">Win 10 matches in a row</p>
                        </div>
                    </div>
                    <div class="achievement-item" w-tid="78">
                        <div class="achievement-icon" w-tid="79">🎯</div>
                        <div class="achievement-info" w-tid="80">
                            <h3 w-tid="81">Precision Master</h3>
                            <p w-tid="82">Achieve 95% serve accuracy in 50 matches</p>
                        </div>
                    </div>
                    <div class="achievement-item" w-tid="83">
                        <div class="achievement-icon" w-tid="84">⚡</div>
                        <div class="achievement-info" w-tid="85">
                            <h3 w-tid="86">Speed Demon</h3>
                            <p w-tid="87">Win a match in under 5 minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)
}