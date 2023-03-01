from django import forms
from .models import *


#Create forms here:
class DeliveryForm(forms.Form):
    name = forms.CharField(max_length=100, required=True)
    address = forms.CharField(widget=forms.Textarea, required=True) #I used a Textarea widget as it looks cleaner for inputting addresses.
    card_number = forms.CharField(required=True, max_length=16, min_length=16, widget=forms.TextInput(attrs={'placeholder':'XXXX-XXXX-XXXX-XXXX'}))
    card_expiry = forms.CharField(required=True, max_length=5, widget=forms.TextInput(attrs={'placeholder':'MM/YY'}))
    card_cvv = forms.CharField(required=True, max_length=3, min_length=3)

    #G-Checking the card number, expiry date and cvv to make sure they're valid ⊂(▀¯▀⊂)
    #If the sections aren't filled correctly then we have raises that inform the user why their input isnt valid
    def clean_card_number(self):
        card_number = self.cleaned_data['card_number']
        if not card_number.isdigit():
            raise forms.ValidationError("Card number should only contain 16 digits.")
        return card_number

    def clean_card_expiry(self):
        card_expiry = self.cleaned_data['card_expiry']
        if len(card_expiry) != 5:
            raise forms.ValidationError("Expiry date should be in the format MM/YY.")
        if not card_expiry[:2].isdigit() or not card_expiry[3:].isdigit():
            raise forms.ValidationError("Expiry date should be in the format MM/YY.")
        return card_expiry

    def clean_card_cvv(self):
        card_cvv = self.cleaned_data['card_cvv']
        if not card_cvv.isdigit():
            raise forms.ValidationError("CVV should only contain digits.")
        return card_cvv