from rest_framework.urlpatterns import format_suffix_patterns
from public import views
from django.urls import include, path

urlpatterns = [
    path('', views.IndexView.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)