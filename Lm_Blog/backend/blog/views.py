from django.http import JsonResponse
from django.views import View

class ArticleListView(View):
    def get(self, request):
        # Example response
        return JsonResponse({"articles": []})

class ArticleDetailView(View):
    def get(self, request, id):
        # Example response
        return JsonResponse({"article": {"id": id}})