from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.base, name='base'),
    path('create_pizza/', views.create_pizza, name="create_pizza"),
    path('delivery_details/', views.delivery_details, name="delivery_details"),
    path('order_confirmation/', views.order_confirmation, name="order_confirmation"),
]
