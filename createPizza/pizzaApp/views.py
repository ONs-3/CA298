from django.shortcuts import render, redirect
from .models import *
from .forms import *
from django.http import HttpResponse

# Create your views here.
def base(request):
    return render(request, 'base.html')

def create_pizza(request):
    #If the request is a POST request, the user has submitted their pizza.
    if request.method == 'POST':
        #Then we retrieve the users selections for each part of the pizza
        size = request.POST['size']
        crust = request.POST['crust']
        sauce = request.POST['sauce']
        cheese = request.POST['cheese']
        toppings = request.POST['toppings']
        #Now we return the pizza that the user has created (づ ◕‿◕ )づ "DOMINOS AINT GOT SHIEZE ON ME !!!"
        pizza = PizzaMaker.objects.create(size=size, crust=crust, sauce=sauce, cheese=cheese, toppings=toppings)
        #Taking the user and redirecting them to the delivery details page where they must PAY!!! hahahhah capitalism
        return redirect('delivery_details')
    #This took me forever ಥ‿ಥ ... Here we are checking if the request is not a POST request, if not then the user
    #is visiting the pizza creating page for the first time so we just show the page's context which is the pizza options.
    else:
        context = {
            'sizes':PizzaMaker.PIZZA_SIZE,
            'crusts':PizzaMaker.PIZZA_CRUST,
            'sauces':PizzaMaker.PIZZA_SAUCE,
            'cheeses':PizzaMaker.PIZZA_CHEESE,
            'toppings':PizzaMaker.PIZZA_TOPPINGS,
        }
        #Now we just render the create a pizza page with these context variables. PIZZA TIME!!!
        return render(request, 'create_pizza.html', context)

#Here I just copied the same kind of format i used in create_pizza and used the return from your notes ... it worked i guess hehe :)
def delivery_details(request):
    if request.method == 'POST':
        form = DeliveryForm(request.POST)
        if form.is_valid():
            #We process the form data and extract is using the 'cleaned_data' dictionary hehehe EZ CLAP ...
            name = form.cleaned_data['name']
            address = form.cleaned_data['address']
            card_number = form.cleaned_data['card_number']
            card_expiry = form.cleaned_data['card_expiry']
            card_cvv = form.cleaned_data['card_cvv']
    else:
        form = DeliveryForm()

    return render(request, 'delivery_details.html', {'form': form})

#This is the view for lettings users review their order and complete the payment process ... gimme your money now ( •_•)
def order_confirmation(request):
    if request.method == 'POST':
        delivery_form = DeliveryForm(request.POST)
        if delivery_form.is_valid():
            delivery = delivery_form.save()
            size = request.session.get('size')
            crust = request.session.get('crust')
            sauce = request.session.get('sauce')
            cheese = request.session.get('cheese')
            toppings = request.session.get('toppings')
            #Create a new object for the user's pizza and save it to the db 
            pizza = PizzaMaker.objects.create(size=size, crust=crust, sauce=sauce, cheese=cheese, toppings=toppings)
            #Show a confirmation of order message to the user along with the details of their order
            context = {
                'delivery': delivery,
                'pizza': pizza,
            }
            return render(request, 'order_confirmation.html', context)
            #If there has been no form filled or submitted then show the delivery form page
        else:
            delivery_form = DeliveryForm()
            context = {'delivery_form': delivery_form}
            return render(request, 'order.html', context)