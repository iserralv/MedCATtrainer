# Generated by Django 2.2.7 on 2019-11-24 01:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_annotatedentity_killed'),
    ]

    operations = [
        migrations.AddField(
            model_name='annotatedentity',
            name='correct',
            field=models.BooleanField(default=False),
        ),
    ]
