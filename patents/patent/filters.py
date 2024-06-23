from django_filters import FilterSet # импортируем filterset, чем-то напоминающий знакомые дженерики
from .models import IndustrialDesign
 
 
# создаём фильтр
class IndustrialDesignFilter(FilterSet):
    def __init__(self, data, *args, **kwargs):
        data = data.copy()
        # data.setdefault('format', 'paperback')
        data.setdefault('order', '-registration_number')
        super().__init__(data, *args, **kwargs)

    class Meta:
        model = IndustrialDesign
        fields = {'inn': ['exact'],
        'registration_number': ['exact'],
        'industrial_design_name': ['icontains'],
        'authors': ['icontains'],
        'patent_holders': ['icontains'],
        'correspondence_address': ['icontains'],
        } 