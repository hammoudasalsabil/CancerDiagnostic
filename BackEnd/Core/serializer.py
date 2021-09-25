from rest_framework import serializers
from Core.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ( 'id',
                    'is_superuser',
                    'username',
                    'email',
                    'name',
                    'is_active',
                    'is_staff',
                    'objects',
                    'USERNAME_FIELD')