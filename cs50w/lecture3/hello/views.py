from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("Hello!")

def brian(request):
    return HttpResponse("Hello, Brian!")

def david(request):
    return HttpResponse("hello, David!")

def greet(request, name):
    return HttpResponse(f"Hello, {name.capitalize()}!")