# Generated by Django 5.1.1 on 2024-11-03 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0025_alter_users_rol'),
    ]

    operations = [
        migrations.AddField(
            model_name='hist_pagos',
            name='activo',
            field=models.BooleanField(default=True),
        ),
    ]
