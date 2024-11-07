from channels.generic.websocket import AsyncWebsocketConsumer
import json

# Connected users like that {user: channel_name, user: channel_name, ...}
connections = {}


class RealTimeNotificationsConsumer(AsyncWebsocketConsumer):
    # get the username from the url
    async def connect(self):
        user = self.scope['url_route']['kwargs']['id']
        if user not in connections:
            connections[user] = self.channel_name
        print(connections)
        await self.accept()
        
    
    async def disconnect(self, close_code):
        user = self.scope['user']
        if user in connections:
            del connections[user]
            print(connections)
    
    async def receive(self, text_data):
        user = self.scope['user']
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        print(message)