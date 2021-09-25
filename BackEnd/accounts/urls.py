from django.urls import path
from . import views

urlpatterns = [
    path('add_doctor/',views.CreateUserView.as_view(),name='add_doctor'),
    path('login/',views.LoginView.as_view(),name='login')

]
