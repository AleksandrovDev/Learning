from django.http import HttpResponseForbidden
from django.shortcuts import render, redirect
from django.views import View
from django.db import models
from vacancy.models import Vacancy
from django import forms
from django.contrib.auth.models import User
# Create your views here.


class VacancyView(View):
    def get(self, request, *args, **kwargs):
        vacancy = Vacancy.objects.all()
        return render(request, "vacancy_page.html", context={'vacancy': vacancy})


class CreateVacancyView(View):
    def post(self, request, *args, **kwargs):
        if request.user.is_authenticated and request.user.is_staff:
            description = request.POST.get('description')
            user = request.user
            Vacancy.objects.create(description=description, author=user)
            return redirect("/home/")
        else:
            return HttpResponseForbidden()


class CreateDescriptionForm(forms.Form):
    description = forms.CharField(widget=forms.Textarea, label="Description:")



