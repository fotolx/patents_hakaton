from django.shortcuts import render
from .models import *
from tablib import Dataset
from django.views.generic import ListView, DetailView
from .filters import *
from .forms import *
from openpyxl import load_workbook

# Create your views here.

def inn_upload(request):
    if request.method == 'POST':
        inn_resource = request.FILES['modal-file']
        wb = load_workbook(filename=inn_resource, read_only=True).active

        # Читаем файл построчно 
        inn_to_check = []
        for row in wb.rows:
            inn_to_check.append(row[0].value)
        inn_list = []
        inn_not_found = []
        for item in set(inn_to_check[1:]):
            if len(IndustrialDesign.objects.filter(inn=item)):
                for rec in IndustrialDesign.objects.filter(inn=item):
                    inn_list.append(rec)
            else:
                inn_not_found.append(item)
        return render(request, template_name="patent/doc-rf.html", context={'message':True, 'new':inn_to_check, 'inn_list':inn_list,
                                                                            'inn_not_found':inn_not_found})
    return render(request, template_name="patent/doc-rf.html", 
                    context={'message':False})

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


class FilteredListView(ListView):
    filterset_class = None

    def get_queryset(self):
        # Получите набор запросов, как обычно. Например:
        queryset = super().get_queryset()
        # Затем используйте параметры запроса и набор запросов,
        # чтобы создать экземпляр набора фильтров и сохранить его как атрибут.
        self.filterset = self.filterset_class(self.request.GET, queryset=queryset)
        # Return the filtered queryset
        return self.filterset.qs.distinct()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Передайте набор фильтров в шаблон — он обеспечивает форму.
        context['filterset'] = self.filterset
        return context


class IndustrialDesignList(FilteredListView):
    filterset_class = IndustrialDesignFilter
    form_class = IndustrialDesignForm
    # model = IndustrialDesign
    context_object_name = 'patents'
    template_name = 'template/doc-rf.html'
    paginate_by = 20
    # allow_empty = False
    queryset = IndustrialDesign.objects.order_by('-registration_number')
    pass

    def get_context_data(self, **kwargs): 
        context = super().get_context_data(**kwargs)
        context['type'] = "Пром образец"
        context['filter'] = IndustrialDesignFilter (self.request.GET, queryset=self.get_queryset())
        return context