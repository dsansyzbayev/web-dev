from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('companies/', views.get_all_companies, name='all companies'),
    path('companies/<int:id>/', views.get_one_company, name='get one company'),
    path('companies/<int:id>/vacancies/', views.get_vac_by_comp, name='vacancies by companies'),
    path('vacancies/', views.get_all_vacancies, name='all vacancies'),
    path('vacancies/<int:id>', views.get_vac_by_id, name='one vacancy'),
    path('vacancies/top_ten', views.get_top_ten, name='top ten')
]
