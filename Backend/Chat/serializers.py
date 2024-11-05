from rest_framework import serializers
from .models import *
from API.models import UserInfo
from API.serializers import UserSerializer

class MessageSerializer(serializers.ModelSerializer):
  sender = UserSerializer(read_only=True)
  receiver = UserSerializer(read_only=True)
  
  class Meta:
    model = Message
    fields = ('id', 'sender', 'receiver', 'content', 'time', 'is_read', 'conversation_id')
    
class ConversationSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True) 

    class Meta:
        model = Conversation
        fields = ['id', 'roomname', 'participants', 'messages'] 

class UserStatusSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  class Meta:
    model = UserStatus
    fields = ('id', 'user', 'is_online', 'last_activite')



c