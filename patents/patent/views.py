from django.shortcuts import render
from .models import *
from tablib import Dataset
from django.views.generic import ListView, DetailView

# Create your views here.
def simple_upload(request):
    if request.method == 'POST':
        ind_resource = IndustrialDesignResource()
        dataset = Dataset()
        new_resource = request.FILES['modalfile']
        imported_data = dataset.load(new_resource.read().decode('utf-8'),format='csv',delimiter=';')                  
        result = ind_resource.import_data(imported_data, dry_run=True)  # Test the data import

        if not result.has_errors():
            ind_resource.import_data(imported_data, dry_run=False)  # Actually import now
        a=[]
        for row in result.rows:
            if row.import_type=='new' or row.import_type=='update':
                data_row = IndustrialDesign.objects.get(pk=row.object_id).prepare_data()
                a.append(data_row)
        if len(a)>0:
            return render(request, template_name="patent/static.html", 
                    context={'message':True,
                            'skipped':result.totals['skip'],
                            'new':result.totals['new'],
                            'update':result.totals['update'],
                            'error':result.totals['error'],
                            'invalid':result.totals['invalid'],
                            })
        else:
            return render(request, template_name="patent/static.html", 
                    context={'message':True,
                            'skipped':result.totals['skip'],
                            'new':result.totals['new'],
                            'update':result.totals['update'],
                            'error':result.totals['error'],
                            'invalid':result.totals['invalid'],
                            })
    return render(request, template_name="patent/static.html", 
                  context={'message':False})

class IndustrialDesignList(ListView):
    model = IndustrialDesign
    context_object_name = 'patents'
    template_name = 'template/doc-rf.html'
    paginate_by = 10
    # allow_empty = False
    queryset = IndustrialDesign.objects.order_by('registration_number')
    pass

    def get_context_data(self, **kwargs): 
        context = super().get_context_data(**kwargs)
        context['type'] = "Пром образец"
    #     context['latest_info'] = dict(Person.objects.filter(pk__in=Person.objects.order_by().values('worker_id').annotate(max_id=Max('id')).values('max_id')).values_list('worker_id','dismiss'))
    #     context['period_info'] = dict(Person.objects.filter(pk__in=Person.objects.order_by().values('worker_id').annotate(max_id=Max('id')).values('max_id')).values_list('worker_id','period'))
    #     context['directors'] = Director.objects.all()
    #     context['departments'] = Department.objects.all()
    #     if len(context['latest_info']) == 0:
    #         context['no_info'] = True
    #     else:
    #         context['no_info'] = False
    #         context['successful_workers'] = sum(map(lambda x:x<=50, list(context['latest_info'].values())))
    #         context['bad_workers'] = sum(map(lambda x:x>50, list(context['latest_info'].values())))
        return context
    # def get_paginate_by(self, queryset):
    #     if self.template_name=='person_list.html':
    #         return 10
    #     else:
    #         return 6