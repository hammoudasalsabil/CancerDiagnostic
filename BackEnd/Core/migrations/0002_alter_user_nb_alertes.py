# Generated by Django 3.2.7 on 2021-10-18 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='nb_alertes',
            field=models.IntegerField(default=0, max_length=255),
        ),
    ]
