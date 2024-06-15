from django.db import models
from import_export import resources

# Create your models here.
class IndustrialDesign(models.Model):
    # worker_id = models.IntegerField(verbose_name='Табельный номер')
    # fio = models.CharField(max_length=50, verbose_name='ФИО')
    # email = models.EmailField()
    # department = models.CharField(max_length=150, verbose_name='Отдел', blank=True)
    # period = models.DateField(verbose_name='Период')
    # msgs_sent = models.IntegerField(verbose_name='Количество отправленных сообщений')
    # msgs_recvd = models.IntegerField(verbose_name='Количество получаемых сообщений')
    # msgs_sent_recipients = models.IntegerField(verbose_name='Количество адресатов в отправляемых сообщениях')
    # msgs_sent_recipients_hidden = models.IntegerField(verbose_name='Количество сообщений с адресатами в поле «скрытая копия»')
    # msgs_sent_recipients_copy = models.IntegerField(verbose_name='Количество сообщений с адресатами в поле «копия»')
    # msgs_late_read = models.IntegerField(verbose_name='Количество сообщений, прочитанных позднее времени получения на 4 часа')
    # msg_days2read = models.IntegerField(verbose_name='Количество дней между датой получения и датой прочтения сообщения')
    # msg_responded = models.IntegerField(verbose_name='Количество сообщений, на которые произведен ответ')
    # msgs_sent_length = models.IntegerField(verbose_name='Количество символов текста в исходящих сообщениях')
    # msgs_sent_afterwork = models.IntegerField(verbose_name='Количество сообщений, отправленных вне рамок рабочего дня')
    # msgs_sent_rcvd = models.FloatField(verbose_name='Соотношение количества полученных и отправленных сообщений')
    # msgs_sent_rcvd_bytes = models.FloatField(verbose_name='Соотношение объема в байтах получаемых и отправляемых сообщений')
    # msgs_rcvd_question_no_respns = models.IntegerField(verbose_name='Количество входящих сообщений без ответа, имеющих вопросительные знаки в тексте')
    # dismiss = models.FloatField(verbose_name='Вероятность увольнения', default=-1.0)


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
    patent_starting_date = models.DateField()
    Crimean_industrial_design_application_number_for_state_registration_in_Ukraine = models.CharField(max_length=100)
    Crimean_industrial_design_application_date_for_state_registration_in_Ukraine = models.DateField()
    Crimean_industrial_design_patent_number_in_Ukraine = models.CharField(max_length=100)
    receipt_date_of_additional_data_to_application = models.DateField()
    date_of_application_to_which_additional_data_has_been_received = models.DateField()
    number_of_application_to_which_additional_data_has_been_received = models.CharField(max_length=100)
    initial_application_number = models.CharField(max_length=100)
    initial_application_date = models.DateField()
    initial_application_priority_date = models.DateField()
    previous_application_number = models.CharField(max_length=100)
    previous_application_date = models.DateField()
    paris_convention_priority_number = models.CharField(max_length=100)
    paris_convention_priority_date = models.DateField()
    paris_convention_priority_country_code = models.CharField(max_length=100)
    patent_grant_publish_date = models.DateField()
    patent_grant_publish_number = models.IntegerField()
    revoked_patent_number = models.IntegerField()
    expiration_date = models.DateField()
    numbers_of_list_of_essential_features_for_which_patent_term_is_prolonged = models.CharField(max_length=100)
    industrial_designs_names_and_number_for_which_patent_term_is_prolonged = models.CharField(max_length=10)
    actual = models.CharField(max_length=100)
    publication_URL = models.CharField(max_length=1024)
    actual_date = models.DateField()
    mkpo = models.CharField(max_length=10)

    def __str__(self) -> str:
            return self.registration_number+' ('+self.registration_date+') '+ self.mkpo +' ['+str(self.authors)+']'
 
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
            self.Crimean_industrial_design_application_number_for_state_registration_in_Ukraine,
            self.Crimean_industrial_design_application_date_for_state_registration_in_Ukraine,
            self.Crimean_industrial_design_patent_number_in_Ukraine,
            self.receipt_date_of_additional_data_to_application,
            self.date_of_application_to_which_additional_data_has_been_received,
            self.number_of_application_to_which_additional_data_has_been_received,
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
            self.numbers_of_list_of_essential_features_for_which_patent_term_is_prolonged,
            self.industrial_designs_names_and_number_for_which_patent_term_is_prolonged,
            self.actual,
            self.publication_URL,
            self.actual_date,
            self.mkpo]
        return x

class IndustrialDesignResource(resources.ModelResource):
    # def before_import_row(self, row, **kwargs):
    #     worker_id = row["worker_id"]
    #     worker_name = row["fio"]
    #     worker_email = row["email"]
    #     worker_department = row["department"]
    #     Worker.objects.get_or_create(worker_id=worker_id, name=worker_name, email=worker_email, department=worker_department,
    #                                  defaults={"worker_id": worker_id,"name": worker_name, "email": worker_email, "department": worker_department})

    def skip_row(self, instance, original, row, import_validation_errors=None):
        if IndustrialDesign.objects.filter(registration_number=row["registration_number"]).count()>0:
            return True
        else:
            return False
    
    class Meta:
        model = IndustrialDesign