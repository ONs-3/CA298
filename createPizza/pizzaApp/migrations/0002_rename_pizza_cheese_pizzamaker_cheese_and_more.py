# Generated by Django 4.1.7 on 2023-02-24 16:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pizzaApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pizzamaker',
            old_name='pizza_cheese',
            new_name='cheese',
        ),
        migrations.RenameField(
            model_name='pizzamaker',
            old_name='pizza_crust',
            new_name='crust',
        ),
        migrations.RenameField(
            model_name='pizzamaker',
            old_name='pizza_sauce',
            new_name='sauce',
        ),
        migrations.RenameField(
            model_name='pizzamaker',
            old_name='pizza_size',
            new_name='size',
        ),
        migrations.RenameField(
            model_name='pizzamaker',
            old_name='pizza_toppings',
            new_name='toppings',
        ),
    ]