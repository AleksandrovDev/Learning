from django.views import View
from django.http.response import HttpResponse
from django.shortcuts import render, redirect
from django import forms
from collections import deque

global dict_list, oil, tires, diag, ticket_number, next_client
dict_list = {"oil": [], "tires": [], "diagnostic": []}
oil = deque(dict_list["oil"])
tires = deque(dict_list["tires"])
diag = deque(dict_list["diagnostic"])
ticket_number = 1
next_client = None


class WelcomeView(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse('<h2>Welcome to the Hypercar Service!</h2>')


class MenuView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "menu.html")


class ChangeOilView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "get_ticket.html", {"queue": len(oil),
                                                   "time": len(oil)*2,
                                                   "add": queue_function(request.path_info)}, )


class InflateTiresView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "get_ticket.html", {"time": len(oil)*2 + len(tires)*5,
                                                   "queue": len(oil) + len(tires),
                                                   "add": queue_function(request.path_info)}, )


class GetDiagnosticTestView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "get_ticket.html", {"time": len(oil)*2 + len(tires)*5 + len(diag)*30,
                                                   "queue": len(oil) + len(tires) + len(diag),
                                                   "add": queue_function(request.path_info)}, )


class ProcessingView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "processing.html", {"oil_queue": len(oil),
                                                   "tires_queue": len(tires),
                                                   "diagnostic_queue": len(diag), })

    def post(self, request, *args, **kwargs):
        global next_client
        if len(oil) != 0:
            next_client = oil.pop()
        elif len(tires) != 0:
            next_client = tires.pop()
        elif len(diag) != 0:
            next_client = diag.pop()
        else:
            next_client = None
        return redirect("processing/")



class NextView(View):
    def get(self, request, *args, **kwargs):
        next = next_client
        return render(request, "next.html", {"ticket": next})


def queue_function(path):
    global dict_list, ticket_number
    if path == "/get_ticket/change_oil":
        oil.appendleft(ticket_number)
    elif path == "/get_ticket/inflate_tires":
        tires.appendleft(ticket_number)
    else:
        diag.appendleft(ticket_number)
    ticket_number += 1

