from ast import keyword
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import Question, Choice
from django.template import loader
from django.urls import reverse
from django.core import serializers

def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('polls/index.html')
    context = {
        'latest_question_list': latest_question_list,
    }
    return HttpResponse(template.render(context, request))
    return  serializers.serialize("json", latest_question_list)
    #data = serializers.serialize("json", latest_question_list, fields=('question_text','pub_date'))
    #return HttpResponse(data)

def lista(request):
    data = '{model: 1, pk: 1}'
    #return HttpResponse(data)
    return JsonResponse(data, safe=False)



def details(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/details.html', {'question': question})

def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})
    return HttpResponse(request, question)
    #return JsonResponse(question, safe=False)

    

def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        return render(request, 'polls/details.html', {
            'question': question,
            'erro_mensage': 'Voce deve selecionar uma opção'
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))