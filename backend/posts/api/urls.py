from django.urls import path
from .views import PostViewSet
from rest_framework.routers import DefaultRouter # type: ignore

post_router = DefaultRouter()
post_router.register(r'posts', PostViewSet)