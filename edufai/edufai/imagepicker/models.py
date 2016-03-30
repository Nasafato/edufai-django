from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Image(models.Model):
	name = models.CharField(max_length=200)
	imageName = models.CharField(max_length=500)
	description = models.CharField(max_length=500)