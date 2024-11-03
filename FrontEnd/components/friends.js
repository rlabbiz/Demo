import { header, menu } from '../scripts/components.js'
import { fetchProfile, globalState, fetchUsers } from '../scripts/fetchData.js';
import { urlHandler } from '../scripts/routes.js';

export async function friendsComponent() {
    if (globalState.user === null) 
        await fetchProfile();
    if (globalState.user === null)
        return (`cant fetch user data`)

    return (
        header() +
        menu() +
        friendsContent()
    )
}

export function friendsContent() {
    console.log(globalState.user)
    return (`
    <div class="friends-list" w-tid="6">
        <div class="friend-header" w-tid="7">
            <h2 w-tid="8">Friends Hub</h2>
            <div class="friend-stats" w-tid="9">
                <div class="stat-card" w-tid="10">
                    <div class="stat-number" w-tid="11">${globalState.friends.length}</div>
                    <div class="stat-label" w-tid="12">Total Friends</div>
                </div>
                <div class="stat-card" w-tid="13">
                    <div class="stat-number" w-tid="14">0</div>
                    <div class="stat-label" w-tid="15">Online Now</div>
                </div>
                <div class="stat-card" w-tid="16">
                    <div class="stat-number" w-tid="17">${globalState.requests.length}</div>
                    <div class="stat-label" w-tid="18">New Requests</div>
                </div>
            </div>
            <div class="search-bar" w-tid="19">
                <input type="text" class="search-input" placeholder="Search friends..." w-tid="20">
            </div>
        </div>
        
        <h3 w-tid="21">Friend Requests</h3>
        <div class="friend-requests" w-tid="22">

            ${friendsRequests()}

            <div class="friend-card" w-tid="36" style="display: flex;">
                <div class="friend-info" w-tid="37">
                    <div class="friend-avatar-container" w-tid="38">
                        <img src="https://page-images.websim.ai/Ryan Garcia_1024x563xrRI3XTSKVNalK1uIDxf0d7043044806.jpg" alt="Ryan Garcia" class="friend-avatar" w-tid="39" data-image_id="1" alt-rewritten="Ryan Garcia, a young boxer with a determined expression, stands in boxing stance within a visually striking black and white portrait photograph.">
                    </div>
                    <div class="friend-details" w-tid="40">
                        <div class="friend-name" w-tid="41">Ryan Garcia</div>
                        <div class="friend-level" w-tid="42">Level: 37</div>
                        <div class="friend-registered" w-tid="43">Registered: April 15, 2023</div>
                        <div class="friend-message" w-tid="45">"I'm looking for a guild mate. Interested in joining forces?"</div>
                    </div>
                </div>
                <div class="friend-actions" w-tid="46">
                    <button class="btn btn-accept" w-tid="47">Accept</button>
                    <button class="btn btn-decline" w-tid="48">Decline</button>
                </div>
            </div>
        </div>

        <h3 w-tid="49">Friends List</h3>
        <div class="friends-list" w-tid="50">
            <div class="friend-card" w-tid="51" style="display: flex;">
                <div class="friend-info" w-tid="52">
                    <div class="friend-avatar-container" w-tid="53">
                        <img src="https://page-images.websim.ai/Alex Johnson_1024x563xrRI3XTSKVNalK1uIDx6bb1960e75e23.jpg" alt="Alex Johnson" class="friend-avatar" w-tid="54" data-image_id="2" alt-rewritten="A friendly, warm-toned portrait of Alex Johnson, a close friend.">
                        <div class="status-indicator status-online" w-tid="55"></div>
                    </div>
                    <div class="friend-details" w-tid="56">
                        <div class="friend-name" w-tid="57">Alex Johnson</div>
                        <div class="friend-level" w-tid="58">Level: 42</div>
                        <div class="friend-registered" w-tid="59">Registered: May 15, 2022</div>
                    </div>
                </div>
                <div class="friend-actions" w-tid="60">
                    <button class="btn btn-message" w-tid="61">Send Message</button>
                    <button class="btn btn-remove" w-tid="62">Remove Friend</button>
                </div>
            </div>
            <div class="friend-card" w-tid="63" style="display: flex;">
                <div class="friend-info" w-tid="64">
                    <div class="friend-avatar-container" w-tid="65">
                        <img src="https://page-images.websim.ai/Sarah Lee_1024x563xrRI3XTSKVNalK1uIDxaafb1fa6d9b7.jpg" alt="Sarah Lee" class="friend-avatar" w-tid="66" data-image_id="3" alt-rewritten="A casual portrait photograph of Sarah Lee, a smiling woman with shoulder-length brown hair against a plain background.">
                        <div class="status-indicator status-offline" w-tid="67"></div>
                    </div>
                    <div class="friend-details" w-tid="68">
                        <div class="friend-name" w-tid="69">Sarah Lee</div>
                        <div class="friend-level" w-tid="70">Level: 78</div>
                        <div class="friend-registered" w-tid="71">Registered: January 3, 2021</div>
                    </div>
                </div>
                <div class="friend-actions" w-tid="73">
                    <button class="btn btn-message" w-tid="74">Send Message</button>
                    <button class="btn btn-remove" w-tid="75">Remove Friend</button>
                </div>
            </div>
            <div class="friend-card" w-tid="76" style="display: flex;">
                <div class="friend-info" w-tid="77">
                    <div class="friend-avatar-container" w-tid="78">
                        <img src="https://page-images.websim.ai/Mike Brown_1024x563xrRI3XTSKVNalK1uIDx0d5812386f5ff.jpg" alt="Mike Brown" class="friend-avatar" w-tid="79" data-image_id="4" alt-rewritten="&quot;A friendly portrait photograph of Mike Brown, a smiling middle-aged man with short brown hair and a casual t-shirt.&quot;">
                        <div class="status-indicator status-online" w-tid="80"></div>
                    </div>
                    <div class="friend-details" w-tid="81">
                        <div class="friend-name" w-tid="82">Mike Brown</div>
                        <div class="friend-level" w-tid="83">Level: 31</div>
                        <div class="friend-registered" w-tid="84">Registered: August 20, 2022</div>
                    </div>
                </div>
                <div class="friend-actions" w-tid="85">
                    <button class="btn btn-message" w-tid="86">Send Message</button>
                    <button class="btn btn-remove" w-tid="87">Remove Friend</button>
                </div>
            </div>
        </div>
    </div>
    `)
}

function friendsRequests() {
    console.log(globalState.requests)
    const requests = globalState.requests.map(r => {
        return (`
            <div class="friend-card" w-tid="23" style="display: flex;">
                <div class="friend-info" w-tid="24">
                    <div class="friend-avatar-container" w-tid="25">
                        <img src="${r.sender.avatar}" alt="${r.sender.username}" class="friend-avatar" w-tid="26" data-image_id="1" alt-rewritten="${r.sender.first_name} ${r.sender.last_name}, a young boxer with a determined expression, stands in boxing stance within a visually striking black and white portrait photograph.">
                    </div>
                    <div class="friend-details" w-tid="27">
                        <div class="friend-name" w-tid="28">${r.sender.first_name} ${r.sender.last_name}</div>
                        <div class="friend-level" w-tid="29">Level: ${r.sender.id}</div>
                        <div class="friend-registered" w-tid="30">Registered: </div>
                    </div>
                </div>
                <div class="friend-actions" w-tid="33">
                    <button class="btn btn-accept" w-tid="34">Accept</button>
                    <button class="btn btn-decline" w-tid="35">Decline</button>
                </div>
            </div>
        `)
    })

    return requests.join('\n')
}