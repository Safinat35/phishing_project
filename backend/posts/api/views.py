from rest_framework import viewsets # type: ignore
from posts.models import Post
from posts.api.serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer 