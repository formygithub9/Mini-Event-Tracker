from rest_framework import generics, permissions
from .models import Event
from .serializers import EventSerializer
from django.utils import timezone

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny


class EventCreateView(generics.CreateAPIView):

    serializer_class = EventSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)



class EventListView(generics.ListAPIView):

    serializer_class = EventSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):

        filter_type = self.request.GET.get('filter')

        events = Event.objects.filter(user=self.request.user)

        if filter_type == "upcoming":
            events = events.filter(datetime__gte=timezone.now())

        if filter_type == "past":
            events = events.filter(datetime__lt=timezone.now())

        return events
    

class ShareEventView(APIView):

    permission_classes = [AllowAny]

    def get(self, request, token):

        try:
            event = Event.objects.get(share_token=token)
            serializer = EventSerializer(event)
            return Response(serializer.data)

        except Event.DoesNotExist:
            return Response({"error": "Event not found"})