from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(PizzaMaker)

#Giving admin permission to create new pizza sizes, add new cheese types and new sauce types
class PizzaPete(admin.ModelAdmin):
    list_display = ['size', 'crust', 'sauce', 'cheese', 'toppings']
    list_filter = ['size', 'crust', 'sauce', 'cheese', 'toppings']
    search_fields = ['size', 'crust', 'sauce', 'cheese', 'toppings']
    ordering = ['size', 'crust', 'sauce', 'cheese', 'toppings']