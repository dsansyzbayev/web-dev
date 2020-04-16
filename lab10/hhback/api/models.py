from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    city = models.CharField(max_length=100)
    address = models.TextField(max_length=250)

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies")
