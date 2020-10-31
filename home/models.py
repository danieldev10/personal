from django.db import models

# Create your models here.
class Post(models.Model):
    image = models.ImageField(upload_to='home/images')
    title = models.CharField(max_length = 50)
    description = models.CharField(max_length=250)
    url = models.URLField()

    def __str__(self):
        return self.title
