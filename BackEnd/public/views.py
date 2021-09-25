from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

class IndexView(APIView):

    def get(self, request, format=None):
        content = {
            'wms': 'Welcome the Doctors :) '
        }
        return Response(content)
