from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def manhattan(request):
    return render(request, 'manhattan/manhattan.html')

def brooklyn(request):
    return render(request, 'brooklyn/brooklyn.html')

def bronx(request):
    return render(request, 'bronx/bronx.html')

def queens(request):
    return render(request, 'queens/queens.html')

def staten_island(request):
    return render(request, 'staten_island/si.html')

def winter_bronx(request):
    return render(request, 'bronx/winterbronx.html')

def winter_brooklyn(request):
    return render(request, 'brooklyn/winterbrooklyn.html')

def winter_queens(request):
    return render(request, 'queens/winterqueens.html')

def winter_staten_island(request):
    return render(request, 'staten_island/wintersi.html')

def winter_manhattan(request):
    return render(request, 'manhattan/wintermanhattan.html')

def recommendations(request):
    return render(request, 'recommendations/rec.html')
