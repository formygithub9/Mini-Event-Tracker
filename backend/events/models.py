from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.
# class Event(models.Model):
#     title = models.CharField(max_length=200)
#     description = models.TextField(blank=True)
#     date = models.DateField()
#     location = models.CharField(max_length=200)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.title


class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    share_token = models.UUIDField(default=uuid.uuid4, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title