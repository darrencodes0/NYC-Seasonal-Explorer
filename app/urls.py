from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('manhattan/', views.manhattan, name='manhattan'),
    path('brooklyn/', views.brooklyn,name='brooklyn'),
    path('bronx/', views.bronx, name='bronx'),
    path('queens/', views.queens, name='queens'),
    path('staten_island/', views.staten_island, name='staten_island'),
    path('recommendations/', views.recommendations, name='recommendations'),
    path('winter_bronx/', views.winter_bronx, name='winter_bronx'),
    path('winter_manhattan/', views.winter_manhattan, name='winter_manhattan'),
    path('winter_brooklyn/', views.winter_brooklyn, name='winter_brooklyn'),
    path('winter_queens/', views.winter_queens, name='winter_queens'),
    path('winter_staten_island/', views.winter_staten_island, name='winter_staten_island'),

]
