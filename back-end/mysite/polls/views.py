from ast import keyword
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import Question, Choice
from django.template import loader
from django.urls import reverse
from django.core import serializers

from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
 
from polls.serializers import QuestionSerializer, ChoiceSerializer


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('polls/index.html')
    context = {
        'latest_question_list': latest_question_list,
    }
    return HttpResponse(template.render(context, request))

def details(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/details.html', {'question': question})

def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})
    
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

@api_view(['GET', 'POST', 'DELETE'])
def question_list(request):
    if request.method == 'GET':
        questions = Question.objects.all()      
        title = request.GET.get('title', None)
        if title is not None:
            tutorials = tutorials.filter(title__icontains=title)
        
        questions_serializer = QuestionSerializer(questions, many=True)
        return JsonResponse(questions_serializer.data, safe=False)
        
@api_view(['GET', 'POST', 'DELETE'])
def questao_byid(request, question_id):
    question = Question.objects.get(pk=question_id)
    if request.method == 'GET':
        questionbyIdserializer = QuestionSerializer(question)
        return JsonResponse(questionbyIdserializer.data, safe=False)
    if request.method == 'DELETE':
        question.delete()
        return JsonResponse({'message': 'Enquete excluída com sucesso!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def choices_byid(request, question_id):
    choices = Choice.objects.filter(question=question_id)
    choicesSerializer = ChoiceSerializer(choices, many=True)
    return JsonResponse(choicesSerializer.data, safe=False)


@api_view(['GET', 'POST','PUT', 'DELETE'])
def vote_resto(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    dataS = ChoiceSerializer(request.POST)
    try:
        selected_choice = question.choice_set.get(pk=dataS.id)
    except (KeyError, Choice.DoesNotExist):
        return render(request, 'polls/details.html', {
            'question': question,
            'erro_mensage': 'Voce deve selecionar uma opção'
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        return JsonResponse(dataS.data)

@api_view(['GET', 'POST','PUT', 'DELETE'])
def vote_rest(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    dataS =  request.data.get("id")
    selected_choice = question.choice_set.get(pk=dataS)
    selected_choice.votes += 1
    selected_choice.save()
    return JsonResponse({'message': 'Mudar aqui'}, status=status)