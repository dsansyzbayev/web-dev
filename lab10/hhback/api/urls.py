from django.urls import path

from . import views
from .views_fbv import *
from .views_cbv import *
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    # login

    path('login/', obtain_jwt_token, name="login"),

    # views from lab 9

    # path('', views.index, name='index'),
    # path('companies/', views.get_all_companies, name='all companies'),
    # path('companies/<int:id>/', views.get_one_company, name='get one company'),
    # path('companies/<int:id>/vacancies/', views.get_vac_by_comp, name='vacancies by companies'),
    # path('vacancies/', views.get_all_vacancies, name='all vacancies'),
    # path('vacancies/<int:id>', views.get_vac_by_id, name='one vacancy'),
    # path('vacancies/top_ten', views.get_top_ten, name='top ten')

    # function based views

    # path('companies/', company_list, name='all companies'),
    # path('companies/<int:company_id>/', company_detail, name='get one company'),
    # path('companies/<int:company_id>/vacancies/', vacancy_by_company, name='vacancies by companies'),
    # path('vacancies/', vacancies_list, name='all vacancies'),
    # path('vacancies/<int:vacancy_id>', vacancy_detail, name='one vacancy'),
    # path('vacancies/top_ten', top_ten, name='top ten')

    # class based views

    path('companies/', CompanyListAPIView.as_view(), name='all companies'),
    path('companies/<int:company_id>/', CompanyDetailAPIView.as_view(), name='get one company'),
    path('companies/<int:company_id>/vacancies/', VacancyByCompanyAPIView.as_view(), name='vacancies by companies'),
    path('vacancies/', VacancyListAPIView.as_view(), name='all vacancies'),
    path('vacancies/<int:vacancy_id>/', VacancyDetailsAPIView.as_view(), name='one vacancy'),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view(), name='top ten')


]
