# Generated by Django 3.2.7 on 2021-09-17 12:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Alertes',
            fields=[
                ('IdAlerte', models.AutoField(primary_key=True, serialize=False)),
                ('Text', models.TextField()),
                ('Date', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Deficit_Neurologique',
            fields=[
                ('IdType', models.AutoField(primary_key=True, serialize=False)),
                ('Type', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Diagnostic_Brain_1',
            fields=[
                ('dDiagnostic', models.AutoField(primary_key=True, serialize=False)),
                ('Age', models.IntegerField()),
                ('Cephalee', models.BooleanField()),
                ('Vomissement', models.CharField(max_length=100)),
                ('Trouble_Cognitifs', models.BooleanField()),
                ('CriseEpilepsie', models.CharField(max_length=100)),
                ('Date', models.DateField(auto_now=True)),
                ('IdDeficitNeurologique', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.deficit_neurologique')),
            ],
        ),
        migrations.CreateModel(
            name='Diagnostic_Brain_2',
            fields=[
                ('IdDiagnostic', models.AutoField(primary_key=True, serialize=False)),
                ('IRM', models.FileField(upload_to='')),
                ('Date', models.DateField(auto_now=True)),
                ('IdDiagnostic1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.diagnostic_brain_1')),
            ],
        ),
        migrations.CreateModel(
            name='Diagnostic_breast_1',
            fields=[
                ('IdDiagnostic', models.AutoField(primary_key=True, serialize=False)),
                ('Age', models.IntegerField()),
                ('Maternite', models.CharField(max_length=100)),
                ('Contraception', models.CharField(max_length=100)),
                ('Antecedent_F', models.CharField(max_length=100)),
                ('Antecedent', models.CharField(max_length=100)),
                ('Cycle', models.CharField(max_length=100)),
                ('Date', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Diagnostic_breast_2',
            fields=[
                ('IdDiagnostic', models.AutoField(primary_key=True, serialize=False)),
                ('Echo', models.FileField(upload_to='')),
                ('CA15', models.IntegerField()),
                ('IdDiagnostic1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.diagnostic_breast_1')),
            ],
        ),
        migrations.CreateModel(
            name='Patients',
            fields=[
                ('IdPatient', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=100)),
                ('LastName', models.CharField(max_length=100)),
                ('Phone', models.IntegerField()),
                ('Town', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Regles',
            fields=[
                ('IdRegle', models.AutoField(primary_key=True, serialize=False)),
                ('Text', models.TextField()),
                ('Date', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Sign',
            fields=[
                ('IdSign', models.AutoField(primary_key=True, serialize=False)),
                ('Sign', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Result_Dbreast_2',
            fields=[
                ('IdResult', models.AutoField(primary_key=True, serialize=False)),
                ('Resultat', models.TextField()),
                ('Modification', models.BooleanField(default=False)),
                ('Echo', models.BooleanField()),
                ('CA15', models.BooleanField()),
                ('Date', models.DateField(auto_now=True)),
                ('IdDiagnostic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.diagnostic_breast_2')),
            ],
        ),
        migrations.CreateModel(
            name='Result_Dbreast_1',
            fields=[
                ('IdResult', models.AutoField(primary_key=True, serialize=False)),
                ('Resultat', models.TextField()),
                ('Modification', models.BooleanField(default=False)),
                ('Echo', models.BooleanField()),
                ('CA15', models.BooleanField()),
                ('IdDiagnostic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.diagnostic_breast_1')),
            ],
        ),
        migrations.CreateModel(
            name='Result_DBrain_2',
            fields=[
                ('IdResult', models.AutoField(primary_key=True, serialize=False)),
                ('Resultat', models.TextField()),
                ('Modification', models.BooleanField(default=False)),
                ('IRM', models.FileField(upload_to='')),
                ('IdDiagnostic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.diagnostic_brain_2')),
            ],
        ),
        migrations.CreateModel(
            name='Result_DBrain_1',
            fields=[
                ('IdResult', models.AutoField(primary_key=True, serialize=False)),
                ('Resultat', models.TextField()),
                ('Modification', models.BooleanField(default=False)),
                ('IRM', models.BooleanField()),
                ('IdDiagnostic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.diagnostic_brain_1')),
            ],
        ),
        migrations.AddField(
            model_name='diagnostic_breast_1',
            name='IdPatient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.patients'),
        ),
        migrations.AddField(
            model_name='diagnostic_breast_1',
            name='IdSign',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.sign'),
        ),
        migrations.AddField(
            model_name='diagnostic_brain_1',
            name='IdPatient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctorapp.patients'),
        ),
    ]
