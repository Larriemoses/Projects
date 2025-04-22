from django.contrib import admin
from django.urls import path, include
from .views import ArticleListView, ArticleDetailView
from django.http import HttpResponse

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', lambda request: HttpResponse("Welcome to the Blog API!"), name='home'),
    path('articles/', ArticleListView.as_view(), name='article-list'),
    path('articles/<int:id>/', ArticleDetailView.as_view(), name='article-detail'),
]