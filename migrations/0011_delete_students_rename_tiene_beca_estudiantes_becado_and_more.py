# Generated by Django 5.1.1 on 2024-10-02 17:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_merge_20241002_1528'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Students',
        ),
        migrations.RenameField(
            model_name='estudiantes',
            old_name='tiene_beca',
            new_name='becado',
        ),
        migrations.RenameField(
            model_name='estudiantes',
            old_name='grado',
            new_name='seccion',
        ),
    ]
