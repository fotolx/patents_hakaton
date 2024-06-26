"""
URL configuration for ad_site project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
# from travels.views import * # AdsList #,CustomLoginView, ResetPasswordView, profile, ChangePasswordView
from django.contrib.auth import views as auth_views
from auth_users.forms import LoginForm, RegisterForm
from auth_users.views import CustomLoginView, ResetPasswordView, profile, ChangePasswordView, ChangePasswordView, CustomLoginView, ResetPasswordView, RegisterView 
# from .views import ChangePasswordView, CustomLoginView, ResetPasswordView, home, RegisterView 
from django.views.generic import TemplateView
from patent.views import *

urlpatterns = [
    # path('', AdsList.as_view()), 
    # path('auth/', include('auth_users.urls')),
    path('admin/', admin.site.urls),
    # path('login/', CustomLoginView.as_view(redirect_authenticated_user=True, template_name='users/login.html',
    #                                        authentication_form=LoginForm), name='login'),
    # path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    # path('password-reset/', ResetPasswordView.as_view(), name='password_reset'),
    # path('password-reset-confirm/<uidb64>/<token>/',
    #      auth_views.PasswordResetConfirmView.as_view(template_name='users/password_reset_confirm.html'),
    #      name='password_reset_confirm'),
    # path('password-reset-complete/',
    #      auth_views.PasswordResetCompleteView.as_view(template_name='users/password_reset_complete.html'),
    #      name='password_reset_complete'),
    # path('profile/', profile, name='users-profile'),
    # path('password-change/', ChangePasswordView.as_view(), name='password_change'),
    # path('', include('travels.urls')),
    path('pages/', include('django.contrib.flatpages.urls')),
    path('summernote/', include('django_summernote.urls')),
    path('profile/', profile, name='users-profile'),
    path('password-change/', ChangePasswordView.as_view(), name='password_change'),

    path('register/', RegisterView.as_view(), name='register'),
    # path('register/', CustomLoginView.as_view(redirect_authenticated_user=True, template_name='russpass/registration.html',
    #                                        authentication_form=RegisterForm), name='register'),
    path('login/', CustomLoginView.as_view(redirect_authenticated_user=True, template_name='russpass/authorization.html',
                                           authentication_form=LoginForm), name='login'),
    # path('logout/', auth_views.LogoutView.as_view(template_name='flatpages/mainpage.html'), name='logout'),
    path('logout/', auth_views.LogoutView.as_view(next_page='/'), name='logout'),
    path('password-reset/', ResetPasswordView.as_view(), name='password_reset'),
    path('password-reset-confirm/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(template_name='users/password_reset_confirm.html'),
         name='password_reset_confirm'),
    path('password-reset-complete/',
         auth_views.PasswordResetCompleteView.as_view(template_name='users/password_reset_complete.html'),
         name='password_reset_complete'),
    # path('profile/', profile, name='users-profile'),
    # path('password-change/', ChangePasswordView.as_view(), name='password_change'),

    # Static pages
    path("links/", TemplateView.as_view(template_name="patent/links.html"), name='links'),
    path("region-bg/", TemplateView.as_view(template_name="patent/region-bg.html"), name='region-bg'),
    path("country-all/", TemplateView.as_view(template_name="patent/country-all.html"), name='country-all'),
    path("country/", TemplateView.as_view(template_name="patent/country.html"), name='country'),
    path("date-regions", TemplateView.as_view(template_name="patent/date-regions.html"), name='date-regions'),
    path("enter/", TemplateView.as_view(template_name="patent/enter.html"), name='enter'),
    path("hear-map/", TemplateView.as_view(template_name="patent/hear-map.html"), name='hear-map'),
    path("recover/", TemplateView.as_view(template_name="patent/recover.html"), name='recover'),
    path("region/", TemplateView.as_view(template_name="patent/region.html"), name='region'),
    path("registration/", TemplateView.as_view(template_name="patent/registration.html"), name='registration'),
    # path("stat/", TemplateView.as_view(template_name="patent/static.html"), name='stat'),
    path("stat/", simple_upload, name='stat'),
    #path('upload/', login_required(simple_upload), name='upload'),
    path("subscribe/", TemplateView.as_view(template_name="patent/subscribe.html"), name='subscribe'),
    # path("doc-rf/", TemplateView.as_view(template_name="patent/doc-rf.html"), name='doc-rf'),
    path("inn-check/", inn_upload, name='inn-check'),
    path("doc-rf/", IndustrialDesignList.as_view(template_name="patent/doc-rf.html"), name='doc-rf'),
    path("analitic-klas/", TemplateView.as_view(template_name="patent/analitic-klas.html"), name='analitic-klas'),
    # path("", TemplateView.as_view(template_name="patent/analitic-klas.html"), name='main'),
    path("", IndustrialDesignList.as_view(template_name="patent/doc-rf.html"), name='main'),
    # path("enter/", TemplateView.as_view(template_name="patent/enter.html"), name='enter'),
    # path("dashboard/", TemplateView.as_view(template_name="russpass/dashboard.html"), name='dashboard'),
    # path("marshrut/", TemplateView.as_view(template_name="russpass/marshrut.html"), name='marshrut'),
    # path("park/", TemplateView.as_view(template_name="russpass/park.html"), name='park'),
    # path("plan/", TemplateView.as_view(template_name="russpass/plan.html"), name='plan'),
    # path("bonus/", TemplateView.as_view(template_name="russpass/bonus.html"), name='bonus'),
    # path("constructor/", TemplateView.as_view(template_name="russpass/constructor.html"), name='constructor'),
    # path("start/", TemplateView.as_view(template_name="russpass/start.html"), name='start'),
    # path("route_add/", TemplateView.as_view(template_name="russpass/dyn/route_add.html"), name='route_add'),
    path("404/", TemplateView.as_view(template_name="patent/404.html"), name='404'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
