from django.db import models
from django.utils import timezone
# Create your models here.
class Todo(models.Model):
    content = models.TextField()
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(default= timezone.now())