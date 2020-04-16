from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import Company, Vacancy

# Create your views here.
def index(request):
    return HttpResponse('It is some page')


def get_all_companies(request):
    companies = Company.objects.all()
    json_comp = serializers.serialize('json', companies)
    return HttpResponse(json_comp, content_type='application/json')


def get_one_company(request, id):
    company = Company.objects.filter(pk=id)
    json_c = serializers.serialize('json', company)
    return HttpResponse(json_c, content_type='application/json')


def get_vac_by_comp(request, id):
    vacancies = Vacancy.objects.filter(company=id)
    json_vac = serializers.serialize('json', vacancies)
    return HttpResponse(json_vac, content_type='application/json')


def get_all_vacancies(request):
    vacancies = Vacancy.objects.all()
    json_vacs = serializers.serialize('json', vacancies)
    return HttpResponse(json_vacs, content_type='application/json')


def get_vac_by_id(request, id):
    vacancy = Vacancy.objects.filter(pk=id)
    json_vac = serializers.serialize('json', vacancy)
    return HttpResponse(json_vac,content_type='application/json')


def get_top_ten(request):
    top10 = Vacancy.objects.order_by('salary')[:10]
    json_top10 = serializers.serialize('json', top10)
    return HttpResponse(json_top10, content_type='application/json')
