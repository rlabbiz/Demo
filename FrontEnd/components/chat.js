import { header, homeComponent, menu } from '../scripts/components.js'


export function ChatComponent() {
    return (
        header() +
        menu() +
        chatContent()
    )
}

export function chatContent() {
    return (`
        <div class="chat">
            <div class="chat-header">
                <div class="chat-profile">
                    <img src="../images/profile.png" alt="friend">
                    <p>rlabbiz</p>
                </div>
            </div>

            <div class="chat-friends">
                <div class="chat-friend">
                    <img src="../images/profile.png" alt="friend">
                    <p>rlabbiz</p>
                    <span class="online"></span>
                </div>
                <div class="chat-friend">
                    <img src="../images/profile.png" alt="friend">
                    <p>rlabbiz</p>
                    <span class="online"></span>
                </div>  
                <div class="chat-friend">
                    <img src="../images/profile.png" alt="friend">
                    <p>rlabbiz</p>
                    <span class="offline"></span>
                </div>
                <div class="chat-friend">
                    <img src="../images/profile.png" alt="friend">
                    <p>rlabbiz</p>
                    <span class="offline"></span>
                </div>  
            </div>

            <div class="chat-content">
                <div class="right">
                    <p>hey, how are you? hey, how are you? hey, how are you? </p>
                </div>
                <div class="left">
                    <p>hey, how are you? hey, how are you? hey, how are you? hey, how are you? hey, how are you? hey, how are you? hey, how are you? hey, how are you?</p>
                </div>
            </div>

            <div class="chat-input">
                <input type="text" placeholder="Type a message...">
                <button>Send</button
            </div>
        </div>
    `)
}