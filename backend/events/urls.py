from django.urls import path
from .views import EventCreateView, EventListView, ShareEventView


urlpatterns = [

    path('', EventListView.as_view()),
    path('create/', EventCreateView.as_view()),
    path('share/<uuid:token>/', ShareEventView.as_view()),

]