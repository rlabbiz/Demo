import { header, menu } from '../scripts/components.js'

export function accountSettingComponent() {
    return (
        header() +
        menu() +
        accountSettingContent()
    )
}


export function accountSettingContent() {
    return (`
        <div class="account-setting">
            <div class="setting-group" w-tid="16">
                <img src="https://page-images.websim.ai/Current profile picture_1024x1024xemJ2jr7UINRqya9Hdx9654623cf1966.jpg" alt="Current profile picture" class="profile-pic" id="profilePic" w-tid="17" data-image_id="0" alt-rewritten="Current profile picture">
                <input type="file" id="avatarUpload" style="display: none;" accept="image/*" w-tid="18">
                <button type="button" class="upload-btn">Upload Avatar</button>
                
                <div class="avatar-selection" w-tid="20">
                    <img src="https://page-images.websim.ai/Avatar option 1_1024x1024xemJ2jr7UINRqya9Hdxa0371ad0442e3.jpg" alt="Avatar option 1" class="avatar-option" onclick="selectAvatar(this)" w-tid="21" data-image_id="1" alt-rewritten="An illustrated avatar icon in a simple, cartoon-like style.">
                    <img src="https://page-images.websim.ai/Avatar option 2_1024x1024xemJ2jr7UINRqya9Hdx50b29b899b783.jpg" alt="Avatar option 2" class="avatar-option" onclick="selectAvatar(this)" w-tid="22" data-image_id="2" alt-rewritten="A simple, stylized digital avatar illustration of a head with basic facial features.">
                    <img src="https://page-images.websim.ai/Avatar option 3_1024x1024xemJ2jr7UINRqya9Hdx6b1540d5d67c9.jpg" alt="Avatar option 3" class="avatar-option" onclick="selectAvatar(this)" w-tid="23" data-image_id="3" alt-rewritten="Illustrated avatar profile picture, simple stylized portrait.">
                    <img src="https://page-images.websim.ai/Avatar option 4_1024x1024xemJ2jr7UINRqya9Hdx0f7f690b93205.jpg" alt="Avatar option 4" class="avatar-option" onclick="selectAvatar(this)" w-tid="24" data-image_id="4" alt-rewritten="Avatar option 4">
                </div>
            </div>

            <div class="setting-group" w-tid="25">
                <div class="setting-item" w-tid="26">
                    <label for="firstName" w-tid="27">First Name</label>
                    <input type="text" id="firstName" name="firstName" value="John" w-tid="28">
                </div>
                <div class="setting-item" w-tid="29">
                    <label for="lastName" w-tid="30">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value="Doe" w-tid="31">
                </div>
            </div>

            <div class="setting-group" w-tid="32">
                <div class="setting-item" w-tid="33">
                    <label for="email" w-tid="34">Email</label>
                    <input type="email" id="email" name="email" value="john.doe@example.com" w-tid="35">
                </div>
                <div class="setting-item" w-tid="36">
                    <label for="newPassword" w-tid="37">New Password (leave blank if unchanged)</label>
                    <input type="password" id="newPassword" name="newPassword" placeholder="Enter new password" w-tid="38">
                </div>
            </div>
            <button type="button" class="save-btn" onclick="showPasswordModal()" w-tid="39">Save Changes</button>
        </div>

        <div id="passwordModal" class="modal" w-tid="40" style="display: block;">
            <div class="modal-content" w-tid="41">
                <span class="close" onclick="closePasswordModal()" w-tid="42">×</span>
                <h2 w-tid="43">Confirm Changes</h2>
                <p w-tid="44">Please enter your current password to save changes:</p>
                <input type="password" id="currentPassword" placeholder="Current Password" style="display: block; margin: 20px auto;" w-tid="45">
                <div style="display: flex; justify-content: space-between; margin-top: 20px;" w-tid="46">
                    <button class="save-btn" onclick="saveChanges()" style="margin-top: 0;" w-tid="47">Confirm</button>
                    <button class="save-btn" onclick="closePasswordModal()" style="margin-top: 0; background-color: #FF6B6B;" w-tid="48">Cancel</button>
                </div>
            </div>
        </div>
        
    `)
}
