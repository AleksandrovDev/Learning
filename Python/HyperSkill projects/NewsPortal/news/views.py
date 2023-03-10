import itertools
import os
import sys
from itertools import groupby

from django.shortcuts import render, redirect
from django.views import View
from django.http import HttpResponse
import json
from random import randint, seed, random
from datetime import date, datetime
from collections import defaultdict
from pathlib import Path

# Create your views here.
from datetime import date, datetime

qoq = []
filename = os.path.dirname(os.getcwd()) + "\\news.json"

try:
    with open(filename) as json_file:  # change to "news.json: to pass test
        qoq = json.load(json_file)
except:
    pass


class MainPageView(View):
    def get(self, request, *args, **kwargs):
        return redirect("/news/")


class NewsView(View):
    def get(self, request, link, *args, **kwargs):
        neededlink = {}
        for k in qoq:
            if k["link"] == int(link):
                neededlink = k
        return render(request, "news/index.html", context=neededlink)


class NewsMain(View):
    def get(self, request, *args, **kwargs):

        what_search_for = request.GET.get("q")
        if what_search_for is not None:
            searched = search_news(what_search_for, qoq)
        else:
            searched = qoq
        sorted_news = sort_news(searched)
        grupped_news = group_news(sorted_news)
        return render(request, "news/news.html", context={
            'news': grupped_news,
        })


def search_news(phrase, dictionary):
    new_list = []
    for k in dictionary:
        if phrase in k['title']:
            new_list.append(k)
    return new_list


def sort_news(list_to_sort):
    sorted_news = sorted(list_to_sort, key=lambda i: i['created'], reverse=True)
    return sorted_news


def group_news(news):
    dict_groupped = {}
    for k, v in groupby(news, key=lambda x: x['created'][:10]):
        dict_groupped[k] = list(v)
    return dict_groupped


class CreateNews(View):
    global today
    today = datetime.now()

    def post(self, request, *args, **kwargs):
        created_dict = {}
        created_dict["title"] = request.POST.get("title")
        created_dict["text"] = request.POST.get("text")
        created_dict["link"] = randint(1, sys.maxsize)
        created_dict["created"] = today.strftime("%Y-%m-%d %H:%M:%S")
        qoq.append(created_dict)
        with open(filename, "w") as json_file:
            json.dump(qoq, json_file)
        return redirect("/news/")

    def get(self, request, *args, **kwargs):
        return render(request, "news/create_news.html")
