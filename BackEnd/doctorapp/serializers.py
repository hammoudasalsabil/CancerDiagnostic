from rest_framework import serializers
from doctorapp.models import *


class PatientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = ('IdPatient',
                'Name', 
                'LastName',
                'Phone',
                'Town',
                'IdUser')


class SignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sign
        fields = ('IdSign',
                'Sign')


class Diagnostic_breast_1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostic_breast_1
        fields = ('IdDiagnostic',
                'Age', 
                'Maternite',
                'Contraception',
                'Antecedent_F',
                'Antecedent',
                'Cycle',
                'Date',
                'IdSign',
                'IdPatient')


class Result_Dbreast_1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Result_Dbreast_1
        fields = ('IdResult',
                'Resultat',
                'Modification',
                'Echo',
                'CA15',
                'IdDiagnostic')


class Diagnostic_breast_2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostic_breast_2
        fields = ('IdDiagnostic',
                'Echo',
                'CA15',
                
                'IdDiagnostic1')


class Result_Dbreast_2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Result_Dbreast_2
        fields = ('IdResult',
                'Resultat',
                'Modification',
                'Echo',
                'CA15',
                'IdDiagnostic')


class Deficit_NeurologiqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deficit_Neurologique
        fields = ('IdType',
                'Type')


class Diagnostic_Brain_1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostic_Brain_1
        fields = ('dDiagnostic',
                'Age',
                'Cephalee',
                'Vomissement',
                'Trouble_Cognitifs',
                'CriseEpilepsie',
                'Date',
                'IdDeficitNeurologique',
                'IdPatient')


class Result_DBrain_1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Result_DBrain_1
        fields = ('IdResult',
                'Resultat',
                'Modification',
                'IRM',
                'IdDiagnostic')


class Diagnostic_Brain_2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostic_Brain_2
        fields = ('IdDiagnostic',
                'IRM',
                'IdDiagnostic1',
                'Date')


class Result_DBrain_2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Result_DBrain_2
        fields = ('IdResult',
                'Resultat',
                'Modification',
                'IRM',
                'IdDiagnostic')


class AlertesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alertes
        fields = ('IdAlerte',
                'Text',
                'Date')


class ReglesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Regles
        fields = ('IdRegle',
                'Text',
                'Date')