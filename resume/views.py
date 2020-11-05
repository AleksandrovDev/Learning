from django.http import HttpResponse, HttpResponseForbidden, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth.models import User

# Create your views here.
from django.views import View
from resume.models import Resume
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User

from vacancy.views import CreateDescriptionForm


class MainPage(View):
    def get(self, request, *args, **kwargs):
        user = User.objects.all()
        return render(request, "base.html", context={'user': user})


class ResumeView(View):
    def get(self, request, *args, **kwargs):
        resume = Resume.objects.all()
        return render(request, "resume_page.html", context={'resume': resume})


class MyLoginView(LoginView):
    form_class = AuthenticationForm
    redirect_authenticated_user = True
    template_name = "login.html"
    success_url = "/"


class SignUpView(CreateView):
    form_class = UserCreationForm
    success_url = "login"
    template_name = "signup.html"


class CreateResumeView(View):
    def post(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            description = request.POST.get('description')
            user = request.user
            Resume.objects.create(description=description, author=user)
            return redirect("/home/")
        else:
            return HttpResponseForbidden()


class HomePageView(View):
    def get(self, request, *args, **kwargs):
        create_description_form = CreateDescriptionForm()
        return render(request, "home.html", context=
        {'create_description_form': create_description_form,
         'staff': request.user.is_staff,
         })

