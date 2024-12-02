from django.db import models

# Create your models here.


class Stock(models.Model):
    category = models.Charfield(max_length=100, null=True, blank=True)
    stock_name = models.Charfield(max_length=100, null=True, blank=True)
    quantity = models.IntegerField(default=0)
    quantity_purchased = models.IntegerField(default=0)
    purchased_by = models.Charfield(max_length=100, null=True, blank=True)
    quantity_sold = models.IntegerField(default=0)
    sold_by = models.Charfield(max_length=100, null=True, blank=True)
    sold_to = models.Charfield(max_length=100, null=True, blank=True)
    recorder_level = models.IntegerField(default=0)
    date_registered = models.DateTimeField(auto_now_add=True, auto_now=False)
    date_registered = models.DateTimeField(auto_now_add=True, auto_now=False)
    export_to_csv = models.BooleanField(Default=False)

def __str__(self):
    return self.stock_name + "" +str(self.quantity)


