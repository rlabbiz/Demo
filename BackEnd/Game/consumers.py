import json
import math
import random
import time
from channels.generic.websocket import AsyncWebsocketConsumer

games = []

class GameConsumer(AsyncWebsocketConsumer):
    users = []

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
        for game in games:
            if game['name'] == gameName:
                await self.channel_layer.group_add(gameName, game['users'][0])
                await self.channel_layer.group_add(gameName, game['users'][1])
                firstUser = None
                secondUser = None
                direction = random.choice(['left', 'right'])
                for user in self.users:
                    if game['users'][0] in user:
                        firstUser = user[game['users'][0]]['userInfo']
                        firstUser['direction'] = direction
                    elif game['users'][1] in user:
                        secondUser = user[game['users'][1]]['userInfo']
                        if direction == 'left':
                            secondUser['direction'] = 'right'
                        else:
                            secondUser['direction'] = 'left'
                await self.send_group_message(gameName, {
                    'type': 'game_start',
                    'message': {
                        'firstUser': firstUser,
                        'secondUser': secondUser,
                        'roomName': gameName
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
        for game in games:
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
        games.append({'users': [self.channel_name], 'free': True, 'name': ''})
    
    # function to handle user messages
    async def handleMessage(self, message):
        messageType = message['type']

        if messageType == 'join':
            await self.handleJoin(message)
        elif (messageType == 'game_update'):
            await self.update(message)
    
    
    canvas = {
        'width': 950,
        'height': 500
    }

    SPEED = 0.02
    BALL_START_SPEED = 5
    WINNING_SCORE = 5
    BALL_MAX_SPEED = 10

    async def update(self, message):
        Ball = message['ball']
        LeftPlayer = message['leftPlayer']
        RightPlayer = message['rightPlayer']
        print(Ball)
        print(LeftPlayer)
        print(RightPlayer)

        # Calculate the new position
        new_x = Ball['x'] + Ball['velocityX'] * Ball['speed']
        new_y = Ball['y'] + Ball['velocityY'] * Ball['speed']

        # Check for collisions with top and bottom walls
        if new_y + Ball['radius'] > self.canvas['height'] or new_y - Ball['radius'] < 0:
            Ball['velocityY'] = -Ball['velocityY']
            new_y = Ball['y'] + Ball['velocityY'] * Ball['speed']  # Recalculate new_y

        # Determine which player to check for collision
        player = LeftPlayer if new_x < self.canvas['width'] / 2 else RightPlayer

        # Check for collision with player paddle
        if self.line_rect(Ball['x'], Ball['y'], new_x, new_y, 
                    player['x'], player['y'], player['width'], player['height']):
            
            # Collision occurred, handle it
            collide_point = Ball['y'] - (player['y'] + player['height'] / 2)
            collide_point = collide_point / (player['height'] / 2)

            angle_rad = collide_point * math.pi / 4

            direction = 1 if Ball['x'] < self.canvas['width'] / 2 else -1

            Ball['velocityX'] = direction * Ball['speed'] * math.cos(angle_rad) * 8
            Ball['velocityY'] = Ball['speed'] * math.sin(angle_rad) * 8
            
            if Ball['speed'] < self.BALL_MAX_SPEED:
                Ball['speed'] += self.SPEED

            # Update new_x and new_y based on new velocities
            new_x = Ball['x'] + Ball['velocityX']
            new_y = Ball['y'] + Ball['velocityY']

        # Update ball position
        Ball['x'] = new_x
        Ball['y'] = new_y

        # Check for scoring
        if Ball['x'] - Ball['radius'] < 0:
            if RightPlayer['score'] == self.WINNING_SCORE - 1:
                RightPlayer['score'] += 1
                # game_over('Right Player')
                # return
            RightPlayer['score'] += 1
            self.reset_ball(Ball)
        elif Ball['x'] + Ball['radius'] > self.canvas['width']:
            if LeftPlayer['score'] == self.WINNING_SCORE - 1:
                LeftPlayer['score'] += 1
                # game_over('Left Player')
                # return
            LeftPlayer['score'] += 1
            self.reset_ball(Ball)
        await self.send_group_message(message['roomName'], {
            'type': 'game_update',
            'message': {
                'ball': Ball,
                'leftPlayer': LeftPlayer,
                'rightPlayer': RightPlayer
            }
        })

    def line_rect(self, x1, y1, x2, y2, rx, ry, rw, rh):
        # Check if the line has hit any of the rectangle's sides
        # uses the line_line function (assumed to be defined elsewhere)
        left = self.line_line(x1, y1, x2, y2, rx, ry, rx, ry + rh)
        right = self.line_line(x1, y1, x2, y2, rx + rw, ry, rx + rw, ry + rh)
        top = self.line_line(x1, y1, x2, y2, rx, ry, rx + rw, ry)
        bottom = self.line_line(x1, y1, x2, y2, rx, ry + rh, rx + rw, ry + rh)

        # If ANY of the above are true, the line has hit the rectangle
        if left or right or top or bottom:
            return True
        return False
    
    def line_line(self, x1, y1, x2, y2, x3, y3, x4, y4):
        # Calculate the direction of the lines
        denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
        
        # Check if lines are parallel (denominator == 0)
        if denominator == 0:
            return False
        
        u_a = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
        u_b = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

        # If uA and uB are between 0-1, lines are colliding
        if 0 <= u_a <= 1 and 0 <= u_b <= 1:
            return True
        return False
    
    def reset_ball(self, Ball):

        Ball['x'] = self.canvas['width'] / 2
        Ball['y'] = self.canvas['height'] / 2
        Ball['velocityX'] = -Ball['velocityX']
        Ball['velocityY'] = -Ball['velocityY']
        Ball['speed'] = 0

        time.sleep(3)
        Ball['speed'] = self.BALL_START_SPEED

