from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib.auth import login, authenticate, logout
from .form import RegistrationForm, LoginAccauntForm
from django.contrib.auth.decorators import login_required


def register_view(request):
    context = {}
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            accaunt = authenticate(username=username, password=password)
            login(request, accaunt)
            return HttpResponseRedirect('/admin/')
        else:
            context['formfields'] = form
    else:
        form = RegistrationForm()
    loginform = LoginAccauntForm()
    context['loginfields'] = loginform
    context['formfields'] = form
    
    return render(request, 'authentication/register.html', context)

def login_view(request):
    context = {}

    if request.POST:
        
        form = LoginAccauntForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['logusername']
            password = form.cleaned_data['logpassword']
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                if request.GET.get('next', None):
                    return redirect('admin')
                return redirect('home')        
    else:
        loginform = LoginAccauntForm()
        context['loginfields'] = loginform
    formfields = RegistrationForm()
    context['formfields'] = formfields
    loginform = LoginAccauntForm()
    context['loginfields'] = loginform
    return render(request, 'authentication/register.html', context)
    
def logout_view(request):
    logout(request)
    context = {}
    context['log'] = True
    return redirect('register')

@login_required(login_url='/login/')
def test(request):
    context ={}
    return render(request,'pages/test.html', context)



