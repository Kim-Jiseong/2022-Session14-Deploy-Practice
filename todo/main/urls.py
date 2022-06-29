from django.urls import path
from main.views import home,  get_todo_notFinished, get_todo_finished, new_todo, delete_todo, check
urlpatterns = [
    path('', home, name='home'),
    path('get_notFinished', get_todo_notFinished, name='get_todo_notFinished'),
    path('get_finished', get_todo_finished, name='get_todo_finished'),
    path('new', new_todo, name='new_todo'),
    path('delete', delete_todo, name='delete_todo'),
    path('check', check, name='check'),
]