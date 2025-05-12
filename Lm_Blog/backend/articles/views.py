from rest_framework import viewsets
from rest_framework.response import Response
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from .models import Article
from .serializers import ArticleSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def list(self, request):
        articles = self.get_queryset()
        serializer = self.get_serializer(articles, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        article = self.get_object()
        serializer = self.get_serializer(article)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        article = serializer.save()
        return Response(self.get_serializer(article).data, status=201)

    def update(self, request, pk=None):
        article = self.get_object()
        serializer = self.get_serializer(article, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        article = serializer.save()
        return Response(self.get_serializer(article).data)

    def destroy(self, request, pk=None):
        article = self.get_object()
        article.delete()
        return Response(status=204)

@method_decorator(csrf_exempt, name='dispatch')
class ArticleCreateView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            article = Article.objects.create(
                title=data['title'],
                content=data['content']
            )
            return JsonResponse({'id': article.id, 'title': article.title, 'content': article.content}, status=201)
        except KeyError:
            return JsonResponse({'error': 'Invalid data'}, status=400)