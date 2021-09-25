from django.conf.urls import url 
from Core import views
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [

    url(r'^Users/$', views.userApi),
    url(r'^Users/([0-9]+)$', views.userApi),
]