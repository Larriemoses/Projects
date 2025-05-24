# backend/blog/serializers.py
from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.get_full_name', read_only=True)
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    
    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'author', 'author_name',
            'category', 'category_display', 'content', 'excerpt',
            'featured_image', 'is_published', 'is_featured',
            'published_at', 'meta_title', 'meta_description'
        ]
        read_only_fields = ['slug', 'author']