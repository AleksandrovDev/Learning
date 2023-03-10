from django.db import models

# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=120, default="No title")
    text = models.CharField(max_length=1000, default="No text")

