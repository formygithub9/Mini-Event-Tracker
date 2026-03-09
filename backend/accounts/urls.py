from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [

    path('signup/', RegisterView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
    path("me/", CurrentUserAPIView.as_view(), name="current-user")

]