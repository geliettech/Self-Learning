# from django.shortcuts import render

# # Create your views here.
# from django.http import HttpResponse
# from django.shortcuts import render
# from .models import Flight

# def index(request):
#     return render(request, "flights/index.html", {
#         "flights": Flight.objects.all()
    # })
from django.shortcuts import render
from .models import Flight

def index(request):
    flights = Flight.objects.all()
    return render(request, "flights/index.html", {
        "flights": flights
    })
