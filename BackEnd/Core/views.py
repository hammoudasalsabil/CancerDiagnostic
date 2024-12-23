from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Core.models import *
from Core.serializer import *

from django.core.files.storage import default_storage

# Create your views here.


@csrf_exempt
def userApi(request,id=0):
    if request.method=='GET':
        users = User.objects.all()
        users_serializer = UserSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)
    elif request.method=='PUT':
        user_data = JSONParser().parse(request)
        user=User.objects.get(id=user_data['id'])
        user_serializer=UserSerializer(user,data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        user=User.objects.get(id=id)
        user.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)