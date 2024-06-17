from django.db import models
from import_export import resources

# Create your models here.
class IndustrialDesign(models.Model):
    registration_number = models.IntegerField()
    registration_date = models.DateField(verbose_name='Дата регистрации')
    application_number = models.IntegerField()
    application_date = models.DateField(verbose_name='Дата публикации')
    authors = models.CharField(max_length=500, verbose_name='Авторы')
    authors_in_latin = models.CharField(max_length=500, verbose_name='Авторы на латинице')
    patent_holders = models.CharField(max_length=500, verbose_name='Держатели патента')
    patent_holders_in_latin = models.CharField(max_length=500, verbose_name='Держатели патента на латинице')
    correspondence_address = models.CharField(max_length=500, verbose_name='Почтовый адрес')
    correspondence_address_in_latin = models.CharField(max_length=500, verbose_name='Почтовый адрес на латинице')
    industrial_design_name = models.CharField(max_length=500, verbose_name='Название')
    patent_starting_date = models.CharField(max_length=200)
    Crimean_industrial_design_application_number_for_state_registration_in_Ukraine = models.CharField(max_length=100, null=True,db_column='Crimean_industrial_design_application_number_for_state_registra')
    Crimean_industrial_design_application_date_for_state_registration_in_Ukraine = models.DateField(null=True,db_column='Crimean_industrial_design_application_date_for_state_registrati')
    Crimean_industrial_design_patent_number_in_Ukraine = models.CharField(max_length=100, null=True)
    receipt_date_of_additional_data_to_application = models.DateField(null=True)
    date_of_application_to_which_additional_data_has_been_received = models.DateField(null=True)
    number_of_application_to_which_additional_data_has_been_received = models.CharField(max_length=100,null=True,db_column='number_of_application_to_which_additional_data_has_been_receive')
    initial_application_number = models.CharField(max_length=100, null=True)
    initial_application_date = models.DateField(null=True)
    initial_application_priority_date = models.DateField(null=True)
    previous_application_number = models.CharField(max_length=100,null=True)
    previous_application_date = models.DateField(null=True)
    paris_convention_priority_number = models.CharField(max_length=100,null=True)
    paris_convention_priority_date = models.CharField(max_length=200,null=True)
    paris_convention_priority_country_code = models.CharField(max_length=100, null=True)
    patent_grant_publish_date = models.CharField(max_length=200, null=True)
    patent_grant_publish_number = models.IntegerField(null=True)
    revoked_patent_number = models.IntegerField(null=True)
    expiration_date = models.CharField(max_length=200,null=True)
    numbers_of_list_of_essential_features_for_which_patent_term_is_prolonged = models.CharField(max_length=100,null=True,db_column='numbers_of_list_of_essential_features_for_which_patent_term_is_')
    industrial_designs_names_and_number_for_which_patent_term_is_prolonged = models.CharField(max_length=10, null=True,db_column='industrial_designs_names_and_number_for_which_patent_term_is_pr')
    actual = models.CharField(max_length=100)
    publication_URL = models.CharField(max_length=1024,null=True)
    actual_date = models.CharField(max_length=200)
    mkpo = models.CharField(max_length=10,null=True)
    inn = models.CharField(max_length=20,null=True)

    def __str__(self) -> str:
            return str(self.registration_number)+' ('+str(self.registration_date)+') '+ self.mkpo +' ['+str(self.authors)+']'
 
    def prepare_data(self) -> list:
        x = [self.id,
             self.registration_number,
             self.registration_date,
            self.application_number,
            self.application_date,
            self.authors,
            self.authors_in_latin,
            self.patent_holders,
            self.patent_holders_in_latin,
            self.correspondence_address,
            self.correspondence_address_in_latin,
            self.industrial_design_name,
            self.patent_starting_date,
            self.Crimean_industrial_design_application_number_for_state_registra, #Crimean_industrial_design_application_number_for_state_registration_in_Ukraine,
            self.Crimean_industrial_design_application_date_for_state_registrati, #Crimean_industrial_design_application_date_for_state_registration_in_Ukraine,
            self.Crimean_industrial_design_patent_number_in_Ukraine,
            self.receipt_date_of_additional_data_to_application,
            self.date_of_application_to_which_additional_data_has_been_received,
            self.number_of_application_to_which_additional_data_has_been_receive, #number_of_application_to_which_additional_data_has_been_received,
            self.initial_application_number,
            self.initial_application_date,
            self.initial_application_priority_date,
            self.previous_application_number,
            self.previous_application_date,
            self.paris_convention_priority_number,
            self.paris_convention_priority_date,
            self.paris_convention_priority_country_code,
            self.patent_grant_publish_date,
            self.patent_grant_publish_number,
            self.revoked_patent_number,
            self.expiration_date,
            self.numbers_of_list_of_essential_features_for_which_patent_term_is_, #numbers_of_list_of_essential_features_for_which_patent_term_is_prolonged,
            self.industrial_designs_names_and_number_for_which_patent_term_is_pr, #industrial_designs_names_and_number_for_which_patent_term_is_prolonged,
            self.actual,
            self.publication_URL,
            self.actual_date,
            self.mkpo,
            self.inn]
        return x

class IndustrialDesignResource(resources.ModelResource):
    
    def skip_row(self, instance, original, row, import_validation_errors=None):
        if IndustrialDesign.objects.filter(registration_number=row["registration_number"]).count()>0:
            return True
        else:
            return False
    
    class Meta:
        model = IndustrialDesign