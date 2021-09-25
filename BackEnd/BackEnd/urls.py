
from django.contrib import admin
from django.contrib.auth.models import User
from django.urls import include, path
from rest_framework import routers
from django.conf.urls import url
from doctorapp import views
from accounts import views
from public import views
from Core import views





urlpatterns = [
    path('', include('public.urls')),
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('doctor/', include('doctorapp.urls')),
    path('core/', include('Core.urls')),
   
]