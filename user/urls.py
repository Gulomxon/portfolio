from django.urls import path
from .views import *

# for creating my page urls
urlpatterns = [
    path('logout/', logout_view, name='logout'),
    path('test/', test, name='test'),
]