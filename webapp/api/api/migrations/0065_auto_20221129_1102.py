# Generated by Django 2.2.28 on 2022-11-29 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0064_auto_20220606_1253'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectannotateentities',
            name='cdb_search_filter',
            field=models.ManyToManyField(blank=True, default=None, help_text='The CDB that will be used for concept lookup. This specific CDB should have been "imported" via the CDB admin screen', related_name='concept_source', to='api.ConceptDB'),
        ),
    ]
