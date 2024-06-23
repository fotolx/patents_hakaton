from django import forms
from .models import IndustrialDesign

class IndustrialDesignForm(forms.ModelForm):
    inn = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class': 'inn form-control'}))
    registration_number = forms.IntegerField( widget=forms.TextInput(attrs={'class': 'registration_number form-control'}))
    industrial_design_name = forms.CharField(max_length=500, widget=forms.TextInput(attrs={'class': 'industrial_design_name form-control'}))
    authors = forms.CharField(max_length=500, widget=forms.TextInput(attrs={'class': 'authors form-control'}))
    patent_holders = forms.CharField(max_length=500, widget=forms.TextInput(attrs={'class': 'patent_holders form-control'}))
    correspondence_address = forms.CharField(max_length=500, widget=forms.TextInput(attrs={'class': 'correspondence_address form-control'}))
    # fields = {'inn': ['exact'],
    #     'registration_number': ['exact'],
    #     'industrial_design_name': ['icontains'],
    #     'authors': ['icontains'],
    #     'patent_holders': ['icontains'],
    #     'correspondence_address': ['icontains'],
    #     } 
    class Meta:
        model = IndustrialDesign
        fields = ['registration_number', 'inn', 'industrial_design_name', 'authors',
                   'patent_holders', 'correspondence_address']