from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense, Activation
from sklearn.metrics import mean_absolute_error,mean_squared_error
from tensorflow.keras.models import load_model
from doctorapp.models import *
from doctorapp.serializers import *
from  algo.ModelClassificationData import create_model_brain
from  algo.ModelClassificationData import create_model_breast
from django.core.files.storage import default_storage

# Create your views here.


@csrf_exempt
def patientsApi(request,id=0):
    if request.method=='GET':
        patients = Patients.objects.all()
        patients_serializer = PatientsSerializer(patients, many=True)
        return JsonResponse(patients_serializer.data, safe=False)

    elif request.method=='POST':
        patient_data=JSONParser().parse(request)
        patient_serializer = PatientsSerializer(data=patient_data)
        if patient_serializer.is_valid():
            patient_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        patient_data = JSONParser().parse(request)
        patient=Patients.objects.get(IdPatient=patient_data['IdPatient'])
        patient_serializer=PatientsSerializer(patient,data=patient_data)
        if patient_serializer.is_valid():
            patient_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        patient=Patients.objects.get(IdPatient=id)
        patient.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)










@csrf_exempt
def signsApi(request,id=0):
    if request.method=='GET':
        signs = Sign.objects.all()
        signs_serializer = SignSerializer(signs, many=True)
        return JsonResponse(signs_serializer.data, safe=False)

    elif request.method=='POST':
        sign_data=JSONParser().parse(request)
        sign_serializer = SignSerializer(data=sign_data)
        if sign_serializer.is_valid():
            sign_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        sign_data = JSONParser().parse(request)
        sign=Sign.objects.get(IdSign=sign_data['IdSign'])
        sign_serializer=SignSerializer(sign,data=sign_data)
        if sign_serializer.is_valid():
            sign_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        sign=Sign.objects.get(IdSign=id)
        sign.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
        









@csrf_exempt
def diagnostic_breast_1Api(request,id=0):
    if request.method=='GET':
        diagnostics = Diagnostic_breast_1.objects.all()
        diagnostics_serializer = Diagnostic_breast_1Serializer(diagnostics, many=True)
        return JsonResponse(diagnostics_serializer.data, safe=False)

    elif request.method=='POST':
        diagnostic_data=JSONParser().parse(request)
        diagnostic_serializer = Diagnostic_breast_1Serializer(data=diagnostic_data)
        if diagnostic_serializer.is_valid():
            diagnostic_serializer.save()
            id_diag = diagnostic_serializer['IdDiagnostic'].value
            model = load_model('C:/Users/Nour/CDApp/BackEnd/doctorapp/Breast_model.h5')
            scaler = create_model_breast.scaler()
            new_gem = [[diagnostic_serializer['Age'].value,
                        diagnostic_serializer['Maternite'].value,
                        diagnostic_serializer['Contraception'].value,
                        diagnostic_serializer['Antecedent_F'].value,
                        diagnostic_serializer['Antecedent'].value,
                        diagnostic_serializer['Cycle'].value,
                        diagnostic_serializer['IdSign'].value
                        ]]
            
            new_gem = scaler.transform(new_gem)
            result = model.predict(new_gem)
            diagnostic_data_res= {}
            diagnostic_data_res['IdDiagnostic'] = id_diag

            if  0.5 < result < 1.0 :
                diagnostic_data_res['Resultat'] = "There is a probability of having cancer"
                diagnostic_data_res['Echo'] = True
                diagnostic_data_res['CA15'] = True
            else:
                diagnostic_data_res['Resultat'] = "The probability of having cancer is low"
                diagnostic_data_res['Echo'] = False
                diagnostic_data_res['CA15'] = False
                
            result_serializer = Result_Dbreast_1Serializer(data=diagnostic_data_res)
            if result_serializer.is_valid():
                result_serializer.save()
                return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add."+str(diagnostic_data) ,safe=False)
    
    elif request.method=='PUT':
        diagnostic_data = JSONParser().parse(request)
        diagnostic=Diagnostic_breast_1.objects.get(IdDiagnostic=diagnostic_data['IdDiagnostic'])
        diagnostic_serializer=Diagnostic_breast_1Serializer(diagnostic,data=diagnostic_data)
        if diagnostic_serializer.is_valid():
            diagnostic_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        diagnostic=Diagnostic_breast_1.objects.get(IdDiagnostic=id)
        diagnostic.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
        









@csrf_exempt
def diagnostic_breast_2Api(request,id=0):
    if request.method=='GET':
        diagnostics = Diagnostic_breast_2.objects.all()
        diagnostics_serializer = Diagnostic_breast_2Serializer(diagnostics, many=True)
        return JsonResponse(diagnostics_serializer.data, safe=False)

    elif request.method=='POST':
        diagnostic_data=JSONParser().parse(request)
        diagnostic_serializer = Diagnostic_breast_2Serializer(data=diagnostic_data)
        if diagnostic_serializer.is_valid():
            diagnostic_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        diagnostic_data = JSONParser().parse(request)
        diagnostic=Diagnostic_breast_2.objects.get(IdDiagnostic=diagnostic_data['IdDiagnostic'])
        diagnostic_serializer=Diagnostic_breast_2Serializer(diagnostic,data=diagnostic_data)
        if diagnostic_serializer.is_valid():
            diagnostic_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        diagnostic=Diagnostic_breast_2.objects.get(IdDiagnostic=id)
        diagnostic.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
        









@csrf_exempt
def diagnostic_Brain_1Api(request,id=0):
    if request.method=='GET':
        diagnostics = Diagnostic_Brain_1.objects.all()
        diagnostics_serializer = Diagnostic_Brain_1Serializer(diagnostics, many=True)
        return JsonResponse(diagnostics_serializer.data, safe=False)

    elif request.method=='POST':
        diagnostic_data=JSONParser().parse(request)
        diagnostic_serializer = Diagnostic_Brain_1Serializer(data=diagnostic_data)
        if diagnostic_serializer.is_valid():
            diagnostic_serializer.save()

            id_diag = diagnostic_serializer['dDiagnostic'].value
            model = load_model('C:/Users/Nour/CDApp/BackEnd/doctorapp/Brain_model.h5')
            scaler = create_model_brain.scaler()
            new_gem = [[diagnostic_serializer['Age'].value,
                        diagnostic_serializer['Cephalee'].value,
                        diagnostic_serializer['Vomissement'].value,
                        diagnostic_serializer['Trouble_Cognitifs'].value,
                        diagnostic_serializer['CriseEpilepsie'].value,
                        diagnostic_serializer['IdDeficitNeurologique'].value
                        ]]
            
            new_gem = scaler.transform(new_gem)
            result = model.predict(new_gem)
            diagnostic_data_res= {}
            diagnostic_data_res['IdDiagnostic'] = id_diag
            print('++++++++++++result+++++++++++++++', result)
            if  0.5 < result < 1.0 :
                diagnostic_data_res['Resultat'] = "There is a probability of having cancer"
                diagnostic_data_res['IRM'] = True
            else:
                diagnostic_data_res['Resultat'] = "The probability of having cancer is low"
                diagnostic_data_res['IRM'] = False
                
        
            print('++++++++++++diagnostic_data_res[Resultat]+++++++++++++++', diagnostic_data_res['Resultat'])

            result_serializer = Result_DBrain_1Serializer(data=diagnostic_data_res)
            print("---------result_serializer---------", result_serializer)
            if result_serializer.is_valid():
                result_serializer.save()
                
                return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        diagnostic_data = JSONParser().parse(request)
        diagnostic=Diagnostic_Brain_1.objects.get(dDiagnostic=diagnostic_data['dDiagnostic'])
        diagnostic_serializer=Diagnostic_Brain_1Serializer(diagnostic,data=diagnostic_data)
        if diagnostic_serializer.is_valid():
            diagnostic_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        diagnostic=Diagnostic_Brain_1.objects.get(dDiagnostic=id)
        diagnostic.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
        









@csrf_exempt
def diagnostic_Brain_2Api(request,id=0):
    if request.method=='GET':
        diagnostics = Diagnostic_Brain_2.objects.all()
        diagnostics_serializer = Diagnostic_Brain_2Serializer(diagnostics, many=True)
        return JsonResponse(diagnostics_serializer.data, safe=False)

    elif request.method=='POST':
        diagnostic_data=JSONParser().parse(request)
        diagnostic_serializer = Diagnostic_Brain_2Serializer(data=diagnostic_data)
        if diagnostic_serializer.is_valid():
            diagnostic_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        diagnostic_data = JSONParser().parse(request)
        diagnostic=Diagnostic_Brain_2.objects.get(IdDiagnostic=diagnostic_data['IdDiagnostic'])
        diagnostic_serializer=Diagnostic_Brain_2Serializer(diagnostic,data=diagnostic_data)
        if diagnostic_serializer.is_valid():
            diagnostic_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        diagnostic=Diagnostic_Brain_2.objects.get(IdDiagnostic=id)
        diagnostic.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)        









@csrf_exempt
def result_Dbreast_1Api(request,id=0):
    if request.method=='GET':
        results = Result_Dbreast_1.objects.all()
        results_serializer = Result_Dbreast_1Serializer(results, many=True)
        return JsonResponse(results_serializer.data, safe=False)

    elif request.method=='POST':
        result_data=JSONParser().parse(request)
        result_serializer = Result_Dbreast_1Serializer(data=result_data)
        if result_serializer.is_valid():
            result_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        result_data = JSONParser().parse(request)
        result=Result_Dbreast_1.objects.get(IdResult=result_data['IdResult'])
        result_data['Modification'] = True
        result_serializer=Result_Dbreast_1Serializer(result,data=result_data)
        if result_serializer.is_valid():
            result_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        result=Result_Dbreast_1.objects.get(IdResult=id)
        result.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)









@csrf_exempt
def result_Dbreast_2Api(request,id=0):
    if request.method=='GET':
        results = Result_Dbreast_2.objects.all()
        results_serializer = Result_Dbreast_2Serializer(results, many=True)
        return JsonResponse(results_serializer.data, safe=False)

    elif request.method=='POST':
        result_data=JSONParser().parse(request)
        result_serializer = Result_Dbreast_2Serializer(data=result_data)
        if result_serializer.is_valid():
            result_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        result_data = JSONParser().parse(request)
        result=Result_Dbreast_2.objects.get(IdResult=result_data['IdResult'])
        result_serializer=Result_Dbreast_2Serializer(result,data=result_data)
        if result_serializer.is_valid():
            result_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        result=Result_Dbreast_2.objects.get(IdResult=id)
        result.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)










@csrf_exempt
def result_DBrain_1Api(request,id=0):
    if request.method=='GET':
        results = Result_DBrain_1.objects.all()
        results_serializer = Result_DBrain_1Serializer(results, many=True)
        return JsonResponse(results_serializer.data, safe=False)

    elif request.method=='POST':
        result_data=JSONParser().parse(request)
        result_serializer = Result_DBrain_1Serializer(data=result_data)
        if result_serializer.is_valid():
            result_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        result_data = JSONParser().parse(request)
        result=Result_DBrain_1.objects.get(IdResult=result_data['IdResult'])
        result_serializer=Result_DBrain_1Serializer(result,data=result_data)
        if result_serializer.is_valid():
            result_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        result=Result_DBrain_1.objects.get(IdResult=id)
        result.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)










@csrf_exempt
def result_DBrain_2Api(request,id=0):
    if request.method=='GET':
        results = Result_DBrain_2.objects.all()
        results_serializer = Result_DBrain_2Serializer(results, many=True)
        return JsonResponse(results_serializer.data, safe=False)

    elif request.method=='POST':
        result_data=JSONParser().parse(request)
        result_serializer = Result_DBrain_2Serializer(data=result_data)
        if result_serializer.is_valid():
            result_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        result_data = JSONParser().parse(request)
        result=Result_DBrain_2.objects.get(IdResult=result_data['IdResult'])
        result_serializer=Result_DBrain_2Serializer(result,data=result_data)
        if result_serializer.is_valid():
            result_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        result=Result_DBrain_2.objects.get(IdResult=id)
        result.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)










@csrf_exempt
def deficit_NeurologiqueApi(request,id=0):
    if request.method=='GET':
        ttypes = Deficit_Neurologique.objects.all()
        ttypes_serializer = Deficit_NeurologiqueSerializer(ttypes, many=True)
        return JsonResponse(ttypes_serializer.data, safe=False)

    elif request.method=='POST':
        ttype_data=JSONParser().parse(request)
        ttype_serializer = Deficit_NeurologiqueSerializer(data=ttype_data)
        if ttype_serializer.is_valid():
            ttype_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        ttype_data = JSONParser().parse(request)
        ttype=Deficit_Neurologique.objects.get(IdType=ttype_data['IdType'])
        ttype_serializer=Deficit_NeurologiqueSerializer(ttype,data=ttype_data)
        if ttype_serializer.is_valid():
            ttype_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        ttype=Deficit_Neurologique.objects.get(IdType=id)
        ttype.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)










@csrf_exempt
def alertesApi(request,id=0):
    if request.method=='GET':
        alertes = Alertes.objects.all()
        alertes_serializer = AlertesSerializer(alertes, many=True)
        return JsonResponse(alertes_serializer.data, safe=False)

    elif request.method=='POST':
        alerte_data=JSONParser().parse(request)
        alerte_serializer = AlertesSerializer(data=alerte_data)
        if alerte_serializer.is_valid():
            alerte_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        alerte_data = JSONParser().parse(request)
        alerte=Alertes.objects.get(IdAlerte=alerte_data['IdAlerte'])
        alerte_serializer=AlertesSerializer(alerte,data=alerte_data)
        if alerte_serializer.is_valid():
            alerte_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        alerte=Alertes.objects.get(IdAlerte=id)
        alerte.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)











@csrf_exempt
def reglesApi(request,id=0):
    if request.method=='GET':
        regles = Regles.objects.all()
        regles_serializer = ReglesSerializer(regles, many=True)
        return JsonResponse(regles_serializer.data, safe=False)

    elif request.method=='POST':
        regle_data=JSONParser().parse(request)
        regle_serializer = ReglesSerializer(data=regle_data)
        if regle_serializer.is_valid():
            regle_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        regle_data = JSONParser().parse(request)
        regle=Regles.objects.get(IdRegle=regle_data['IdRegle'])
        regle_serializer=ReglesSerializer(regle,data=regle_data)
        if regle_serializer.is_valid():
            regle_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        regle=Regles.objects.get(IdRegle=id)
        regle.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)







@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)