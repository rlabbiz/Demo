
export function renderChat()
{
  const body = document.getElementById('body');
  body.innerHTML=
  `
  <div class="container-fluid w-100" style="font-family: 'Monospace';">
  <div class="row w-100">
      <!-- Bloc des amis -->
      <div class="col-md-4 border-end ">
          <div class="d-flex bg-light ">
              <div class="bg-primary text-white p-2 w-25">Chat</div>
              
              <div class="bg-success text-white p-2 w-75 text-end"> <i class="fa-solid fa-user-group"></i>  +5 Online</div>
          </div>
          <ul class="list-unstyled">
              <li id="solix" class="d-flex media p-2" onclick="myFunction()">
                  <img src="avatars/avatar2.png" alt="Avatar" width="80" height="80" class="m-2 rounded-circle">
                  <div class="media-body p-2">
                      <h6 class="mt-0 mb-1 " style="color:#ffff">Solix</h>
                      <p class="" style="margin-bottom:2px; font-size:15px; font-style:italic; color:rgb(169, 171, 167)">How Are You?</p>
                      <span class="badge online-badge"><div class=""></div></span>
                  </div>
              </li>
              <li class="d-flex media p-2" onclick="change_box()">
                  <img src="avatars/avatar3.png" alt="Avatar" width="80" height="80" class="m-2 rounded-circle">
                  <div class="media-body p-2">
                      <h6 class="mt-0 mb-1" style="color:#ffff">Morad</h>
                      <p class="" style="margin-bottom:2px; font-size:15px; font-style:italic; color:rgb(25, 25, 25)">How Are You?</p>
                      <span class="badge online-badge"><div class=""></div></span>
                  </div>
              </li>
              <li class="d-flex media p-2" onclick="change_box()">
                  <img src="avatars/avatar4.png" alt="Avatar" width="80" height="80" class="m-2 rounded-circle">
                  <div class="media-body p-2">
                      <h6 class="mt-0 mb-1" style="color:#ffff">Joba</h>
                      <p class="" style="margin-bottom:2px; font-size:15px; font-style:italic; color:rgb(169, 171, 167)">How Are You?</p>
                      <span class="badge online-badge"><div class=""></div></span>
                  </div>
              </li>
              <li class="d-flex media p-2" onclick="change_box()">
                  <img src="avatars/avatar5.png" alt="Avatar" width="80" height="80" class="m-2 rounded-circle">
                  <div class="media-body p-2">
                      <h6 class="mt-0 mb-1" style="color:#ffff">Ali</h>
                      <p class="" style="margin-bottom:2px; font-size:15px; font-style:italic; color:rgb(169, 171, 167)">How Are You?</p>
                      <span class="badge online-badge"><div class=""></div></span>
                  </div>
              </li>
              <li class="d-flex media p-2" onclick="change_box()">
                  <img src="avatars/avatar2.png" alt="Avatar" width="80" height="80" class="m-2 rounded-circle">
                  <div class="media-body p-2">
                      <h6 class="mt-0 mb-1" style="color:#ffff">Amine</h>
                      <p class="" style="margin-bottom:2px; font-size:15px; font-style:italic; color:rgb(169, 171, 167)">How Are You?</p>
                      <span class="badge online-badge"><div class=""></div></span>
                  </div>
              </li>
              <li class="d-flex media p-2 onclick="change_box()">
                  <img src="avatars/avatar3.png" alt="Avatar" width="80" height="80" class="m-2 rounded-circle">
                  <div class="media-body p-2">
                      <h6 class="mt-0 mb-1" style="color:#ffff">Simo</h>
                      <p class="" style="margin-bottom:2px; font-size:15px; font-style:italic; color:rgb(25, 25, 25)">How Are You?</p>
                      <span class="badge online-badge"><div class=""></div></span>
                  </div>
              </li>
              <li class="d-flex media p-2" onclick="change_box()">
                  <img src="avatars/avatar4.png" alt="Avatar" width="80" height="80" class="m-2 rounded-circle">
                  <div class="media-body p-2">
                      <h6 class="mt-0 mb-1" style="color:#ffff">Reda</h6>
                      <p class="" style="margin-bottom:2px; font-size:15px; font-style:italic; color:rgb(25, 25, 25)">How Are You?</p>
                      <span class="badge online-badge"><div class=""></div></span>
                  </div>
              </li>
              <!-- Répétez pour chaque ami -->
          </ul>
      </div>
      
      <!-- Bloc de discussion et détails de l'utilisateur -->
      <div class="col-md-8">
          <!-- <h3 class="mb-3">Détails de l'Utilisateur</h3> -->
          <div class="d-flex media mb-3">
              <img src="avatars/avatar2.png" alt="Avatar" width="80" height="80" class="m-2 rounded-circle">
              <div class="part2-media-body">
                  <h5 class="" style="margin-bottom: 0px;color:#0000;">Solix</h5>
                  <span class="badge offline-badge p-1"><div class=""></div></span>
              </div>
          </div>
          <!-- Zone de discussion -->
          <div id="chat-box" class="chat-box">
              <!-- Messages de discussion ici -->
          </div>
          <!-- Champ pour envoyer des messages -->
          <div class="input-group mt-3">
              <input id="input-box" type="text" class="form-control" placeholder="Votre message...">
              <button id="new_message" class="btn btn-primary" onclick="new_message()">Envoyer</button>
          </div>
      </div>
  </div>
</div>
  `

const login = (e) => 
{
    new_message()
}
document.getElementById("new_message").onclick = login;
}

function addMessage(message, sender) 
{
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('p');
  if (sender === 'user') 
  {
    messageElement.classList.add('message-right');
  } 
  else 
  {
    messageElement.classList.add('message-left');
  }
  
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
}

function new_message()
{
    const messageInput = document.getElementById('input-box');
    const message = messageInput.value;
    
    if (message.trim()!== '') 
    {
      addMessage(message, 'user');
      messageInput.value = '';
    }
}