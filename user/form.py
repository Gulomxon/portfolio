from django import forms
from django.contrib.auth.forms import UserCreationForm, UsernameField
from .models import Accaunt
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate
from django.contrib.auth import password_validation

class RegistrationForm(forms.ModelForm):
    password1 = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(label="Confirm password", widget=forms.PasswordInput)

    class Meta:
        model = Accaunt
        fields = ['first_name', 'last_name', 'username', 'email']

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("The two password fields didn't match.")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user



class LoginAccauntForm(forms.ModelForm):
    logpassword = forms.CharField(label="Logpassword", widget=forms.PasswordInput)
    logusername = forms.CharField(label="Logusername", widget=forms.TextInput)

    class Meta:
        model = Accaunt
        fields = []


    def clean(self):
        username = self.cleaned_data['logusername']
        password = self.cleaned_data['logpassword']
        if not authenticate(username=username, password=password):
            raise forms.ValidationError('login invalied')