import json
from channels.generic.websocket import AsyncWebsocketConsumer

class GameConsumer(AsyncWebsocketConsumer):
    users = []
    games = []

    async def connect(self):
        await self.accept()
        self.append_user()
        # send channel name to the client
        await self.send(text_data=json.dumps({
            'type': 'channel_name',
            'channel_name': self.channel_name,
        }))

    async def disconnect(self, close_code):
        # remove user from the users list
        for user in self.users:
            if self.channel_name in user:
                self.users.remove(user)
                break
        print(self.channel_name, " disconnected " + str(len(self.users)))

    async def receive(self, text_data):
        message = json.loads(text_data)
        # send message to all users
        await self.handleMessage(message)

    async def send_group_message(self, gameName, message):
        await self.channel_layer.group_send(
            gameName,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    async def chat_message(self, event):
        message = event['message']
        await self.send(text_data=json.dumps(message))

    # function to append user to the users list
    def append_user(self):
        self.users.append({self.channel_name: {'obj': self, 'userInfo': None } })
        print(self.channel_name, " connected " + str(len(self.users)))
    
    async def launchGame(self, gameName):
        print('Game is starting ' + gameName)

        for game in self.games:
            if game['name'] == gameName:
                await self.channel_layer.group_add(gameName, game['users'][0])
                await self.channel_layer.group_add(gameName, game['users'][1])
                print('message is sent to all group members')
                firstUser = None
                secondUser = None
                for user in self.users:
                    if game['users'][0] in user:
                        firstUser = user[game['users'][0]]['userInfo']
                    elif game['users'][1] in user:
                        secondUser = user[game['users'][1]]['userInfo']
                await self.send_group_message(gameName, {
                    'type': 'game_start',
                    'message': {
                        'firstUser': firstUser,
                        'secondUser': secondUser
                    }
                })
                return 

    async def game_start(self, event):
        message = event['message']
        await self.send(text_data=json.dumps({
            'type': 'game_start',
            'message': message
        }))

    # function to get group name
    def getGroupName(self, game):
        print(game)
        user1Id = game['users'][0].split('_')[1]
        return game['users'][0] + game['users'][1]
        


    # function to handle join players
    async def handleJoin(self, message):
        # set user info to user object
        for user in self.users:
            if self.channel_name in user:
                user[self.channel_name]['userInfo'] = message['user']
                print(user[self.channel_name]['userInfo'])
                break
        
        # join user to the game
        for game in self.games:
            if game['free'] == True:
                # check first one is still connected
                for user in self.users:
                    if game['users'][0] in user:
                        game['users'].append(self.channel_name)
                        game['free'] = False
                        # game['name'] = self.getGroupName(game)
                        game['name'] = game['users'][0].split('!')[1] + game['users'][1].split('!')[1]
                        await self.launchGame(game['name'])
                        return

        # create new game
        self.games.append({'users': [self.channel_name], 'free': True, 'name': ''})
    
    # function to handle user messages
    async def handleMessage(self, message):
        messageType = message['type']

        if messageType == 'join':
            await self.handleJoin(message)
    

