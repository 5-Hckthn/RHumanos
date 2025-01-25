# Generated by Django 5.1.1 on 2025-01-25 04:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0034_asistencia_justificaciones_puestos_roles_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='users',
            name='role',
        ),
        migrations.AddField(
            model_name='users',
            name='roles',
            field=models.CharField(blank=True, choices=[('Director', 'Director'), ('Lider', 'Lider'), ('Colaborador', 'Colaborador')], max_length=11, null=True),
        ),
        migrations.AlterField(
            model_name='asistencia',
            name='estado',
            field=models.CharField(blank=True, choices=[('Confirmada', 'Confirmada'), ('Justificada', 'Justificada'), ('Ausente', 'Ausente')], max_length=11, null=True),
        ),
        migrations.AlterField(
            model_name='justificaciones',
            name='estado',
            field=models.CharField(blank=True, choices=[('Aprobada', 'Aprobada'), ('Pendiente', 'Pendiente'), ('Denegada', 'Denegada')], max_length=10, null=True),
        ),
        migrations.DeleteModel(
            name='Roles',
        ),
    ]
