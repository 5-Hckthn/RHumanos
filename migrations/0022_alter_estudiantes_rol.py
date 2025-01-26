# Generated by Django 5.1.1 on 2024-10-22 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_alter_estudiantes_rol'),
    ]

    operations = [
        migrations.AlterField(
            model_name='estudiantes',
            name='rol',
            field=models.CharField(choices=[('estu', 'Estudiante'), ('prof', 'Profesor')], default='estu', max_length=50, null=True),
        ),
    ]
