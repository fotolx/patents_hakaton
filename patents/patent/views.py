from django.shortcuts import render
from .models import *
from tablib import Dataset

# Create your views here.
def simple_upload(request):
    if request.method == 'POST':
        ind_resource = IndustrialDesignResource()
        dataset = Dataset()
        new_resource = request.FILES['myfile']
        imported_data = dataset.load(new_resource.read().decode('utf-8'),format='csv')                  
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
                            'analized':True,
                            'skipped':result.totals['skip'],
                            'new':result.totals['new'],
                            'update':result.totals['update'],
                            'error':result.totals['error'],
                            })
        else:
            return render(request, template_name="patent/static.html", 
                    context={'message':True,
                            'analized':False,
                            'skipped':result.totals['skip'],
                            'new':result.totals['new'],
                            'update':result.totals['update'],
                            'error':result.totals['error'],
                            })
    return render(request, template_name="patent/static.html", 
                  context={'message':False,'analized':False})