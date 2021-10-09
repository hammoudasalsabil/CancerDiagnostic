from django.conf.urls import url 
from doctorapp import views
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [

    url(r'^Patient/$', views.patientsApi),
    url(r'^Patient/([0-9]+)$', views.patientsApi),

    url(r'^Sign/$', views.signsApi),
    url(r'^Sign/([0-9]+)$', views.signsApi),

    url(r'^Diagnostic_Breast_1/$', views.diagnostic_breast_1Api),
    url(r'^Diagnostic_Breast_1/([0-9]+)$', views.diagnostic_breast_1Api),

    url(r'^Diagnostic_Breast_2/$', views.diagnostic_breast_2Api),
    url(r'^Diagnostic_Breast_2/([0-9]+)$', views.diagnostic_breast_2Api),

    url(r'^Diagnostic_Brain_1/$', views.diagnostic_Brain_1Api),
    url(r'^Diagnostic_Brain_1/([0-9]+)$', views.diagnostic_Brain_1Api),

    url(r'^Diagnostic_Brain_2/$', views.diagnostic_Brain_2Api),
    url(r'^Diagnostic_Brain_2/([0-9]+)$', views.diagnostic_Brain_2Api),

    url(r'^Result_Diagnostic_Breast_1/$', views.result_Dbreast_1Api),
    url(r'^Result_Diagnostic_Breast_1/([0-9]+)$', views.result_Dbreast_1Api),

    url(r'^Result_Diagnostic_Breast_2/$', views.result_Dbreast_2Api),
    url(r'^Result_Diagnostic_Breast_2/([0-9]+)$', views.result_Dbreast_2Api),

    url(r'^Result_Diagnostic_Brain_1/$', views.result_DBrain_1Api),
    url(r'^Result_Diagnostic_Brain_1/([0-9]+)$', views.result_DBrain_1Api),

    url(r'^Result_Diagnostic_Brain_2/$', views.result_DBrain_2Api),
    url(r'^Result_Diagnostic_Brain_2/([0-9]+)$', views.result_DBrain_2Api),

    url(r'^Deficit_Neurologique/$', views.deficit_NeurologiqueApi),
    url(r'^Deficit_Neurologique/([0-9]+)$', views.deficit_NeurologiqueApi),
    
    url(r'^Deficit_Neurologique/$', views.deficit_NeurologiqueApi),
    url(r'^Deficit_Neurologique/([0-9]+)$', views.deficit_NeurologiqueApi),
    
    url(r'^Alertes/$', views.alertesApi),
    url(r'^Alertes/([0-9]+)$', views.alertesApi),
    
    url(r'^Règles/$', views.reglesApi),
    url(r'^Règles/([0-9]+)$', views.reglesApi),

    url(r'SaveFile$', views.SaveFile)

] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
