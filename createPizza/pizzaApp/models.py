from django.db import models

# Create your models here.
class PizzaMaker(models.Model):
    #Define the options for each part of the pizza as tuples in this form (value, display_name)
    PIZZA_SIZE = (("S", "Small"), ("M", "Medium"), ("L", "Large"))
    PIZZA_CRUST = (("N", "Normal"), ("T", "Thin"), ("TH", "Thick"), ("GF", "Gluten Free"))
    PIZZA_SAUCE = (("T", "Tomato"), ("BBQ", "Barbeque"), ("ST&G", "Sundried Tomato & Garlic"))
    PIZZA_CHEESE = (("M", "Mozzarella"), ("P", "Parmesan"), ("D", "Double Cheese"), ("LF", "Low Fat"))
    PIZZA_TOPPINGS = (('PE', 'Pepperoni'), ('CH', 'Chicken'), ('HA', 'Ham'), ('PI', 'Pineapple'), ('PEP', 'Peppers'), ('M', 'Mushrooms'), ('O', 'Onions'),)

    #Define each pizza part's field with the corresponding choices
    #Found the ChoiceField on the Django forums and used the following Stackoverflow forum for inspiration: https://stackoverflow.com/questions/8077840/choicefield-in-django-model
    size = models.CharField(max_length = 1, choices=PIZZA_SIZE)
    crust = models.CharField(max_length = 2, choices=PIZZA_CRUST)
    sauce = models.CharField(max_length = 4, choices=PIZZA_SAUCE)
    cheese = models.CharField(max_length = 2, choices=PIZZA_CHEESE)
    toppings = models.CharField(max_length = 3, choices=PIZZA_TOPPINGS)
    
