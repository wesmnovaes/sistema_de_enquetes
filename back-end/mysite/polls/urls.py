from django.urls import path
from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:question_id>/', views.details, name='detail'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
    path('<int:question_id>/results/', views.results, name='results'),
    path('lista_questoes/', views.question_list, name='question_lista'),
    path('questao_byid/<int:question_id>', views.questao_byid, name='questionById'), 
    path('choices_byid/<int:question_id>', views.choices_byid, name='choices_byid'), 
    path('votar/<int:question_id>', views.vote_rest, name='vote_rest'),
    path('get_votos/<int:question_id>', views.result_choice, name='result_choice'),
] 