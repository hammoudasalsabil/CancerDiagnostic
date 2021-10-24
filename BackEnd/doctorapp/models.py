from django.db import models
from Core.models import User

# Create your models here.
class Patients(models.Model):
    IdPatient = models.AutoField(primary_key=True)
    IdUser = models.ForeignKey(User, on_delete=models.CASCADE)
    Name = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    Phone = models.IntegerField()
    Town = models.CharField(max_length=100)


class Sign(models.Model):
    IdSign = models.AutoField(primary_key=True)
    Sign = models.CharField(max_length=100) 


class Diagnostic_breast_1(models.Model):
    IdDiagnostic = models.AutoField(primary_key=True)
    IdPatient = models.ForeignKey(Patients, on_delete=models.CASCADE)
    Age = models.IntegerField()
    Maternite = models.IntegerField()
    Contraception = models.IntegerField()
    Antecedent_F = models.IntegerField()
    Antecedent = models.IntegerField()
    Cycle = models.IntegerField()
    IdSign = models.ForeignKey(Sign, on_delete=models.CASCADE)
    Date  = models.DateField(auto_now=True)




class Result_Dbreast_1(models.Model):
    IdResult = models.AutoField(primary_key=True)
    IdDiagnostic = models.ForeignKey(Diagnostic_breast_1, on_delete=models.CASCADE)
    Resultat = models.TextField()
    Modification = models.BooleanField(default=False)
    Echo = models.BooleanField()
    CA15 = models.BooleanField()



class Diagnostic_breast_2(models.Model):
    IdDiagnostic = models.AutoField(primary_key=True)
    IdDiagnostic1 = models.ForeignKey(Diagnostic_breast_1, on_delete=models.CASCADE)
    Echo = models.FileField() 
    CA15 = models.IntegerField()
    Date  = models.DateField(auto_now=True)
    


class Result_Dbreast_2(models.Model):
    IdResult = models.AutoField(primary_key=True)
    IdDiagnostic = models.ForeignKey(Diagnostic_breast_2, on_delete=models.CASCADE)
    Resultat = models.TextField()
    Modification = models.BooleanField(default=False)
    Echo = models.BooleanField()
    CA15 = models.BooleanField()
    



class Deficit_Neurologique(models.Model):
    IdType = models.AutoField(primary_key=True)
    Type = models.CharField(max_length=100) 

    
class Diagnostic_Brain_1(models.Model):
    dDiagnostic = models.AutoField(primary_key=True)
    IdPatient = models.ForeignKey(Patients, on_delete=models.CASCADE)
    Age = models.IntegerField()
    Cephalee = models.IntegerField()
    Vomissement = models.IntegerField()
    Trouble_Cognitifs = models.IntegerField()
    IdDeficitNeurologique = models.ForeignKey(Deficit_Neurologique, on_delete=models.CASCADE)
    CriseEpilepsie = models.IntegerField()
    Date  = models.DateField(auto_now=True)

class Result_DBrain_1(models.Model):
    IdResult = models.AutoField(primary_key=True)
    IdDiagnostic = models.ForeignKey(Diagnostic_Brain_1, on_delete=models.CASCADE)
    Resultat = models.TextField()
    Modification = models.BooleanField(default=False)
    IRM = models.BooleanField()


class Diagnostic_Brain_2(models.Model):
    IdDiagnostic = models.AutoField(primary_key=True)
    IdDiagnostic1 = models.ForeignKey(Diagnostic_Brain_1, on_delete=models.CASCADE)
    IRM = models.FileField()
    Date  = models.DateField(auto_now=True)

class Result_DBrain_2(models.Model):
    IdResult = models.AutoField(primary_key=True)
    IdDiagnostic = models.ForeignKey(Diagnostic_Brain_2, on_delete=models.CASCADE)
    Resultat = models.TextField()
    Modification = models.BooleanField(default=False)
    IRM = models.FileField()


class Alertes(models.Model):
    IdAlerte = models.AutoField(primary_key=True)
    Text = models.TextField()
    Date  = models.DateField(auto_now=True)


class Regles(models.Model):
    IdRegle = models.AutoField(primary_key=True)
    Text = models.TextField()
    Date  = models.DateField(auto_now=True)
