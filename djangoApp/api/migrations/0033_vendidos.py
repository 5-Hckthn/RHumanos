# Generated by Django 5.1.4 on 2025-01-21 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0032_remove_hist_pagos_estudiante_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vendidos',
            fields=[
                ('vendidos_id', models.AutoField(primary_key=True, serialize=False)),
                ('producto', models.CharField(blank=True, max_length=255, null=True)),
                ('cantidad', models.IntegerField(blank=True, null=True)),
                ('fecha', models.DateField(blank=True, null=True)),
                ('ganancia', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
