import { header, menu } from '../scripts/components.js'


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
                chat header
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
                chat content
            </div>

            <div class="chat-input">
                chat input
            </div>
        </div>
    `)
}