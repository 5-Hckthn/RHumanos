from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator

class Puestos(models.Model):
    puesto_ID = models.AutoField(primary_key=True)
    puesto_name = models.CharField(max_length=255, null=True, blank=True)

class Justificaciones(models.Model):
    justificacion_ID = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=255, null=True, blank=True)
    estado = models.CharField(max_length=10, choices=[('Aprobada', 'Aprobada'), ('Pendiente', 'Pendiente'), ('Denegada', 'Denegada')],null=True, blank=True)
    fecha_creacion = models.DateField(auto_now_add=True)
    fecha_inicial = models.DateField(null=True, blank=True)
    fecha_final = models.DateField(null=True, blank=True)

class Users(models.Model):
    id = models.AutoField(primary_key=True)
    cedula = models.CharField(
        max_length=10,  # Máximo de 10 caracteres
        validators=[RegexValidator(regex=r'^\d{8,10}$', message="La cédula debe tener entre 8 y 10 dígitos.")],
        unique=True,
        null=True, blank=True,
        verbose_name="Cédula")
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    password = models.CharField(max_length=255, null=True, blank=True)
    phone_number = models.CharField(max_length=8,null=True, blank=True)
    date_create = models.DateTimeField(auto_now_add=True)
    roles = models.CharField(max_length=11, choices=[('Director', 'Director'), ('Lider', 'Lider'), ('Colaborador', 'Colaborador')],null=True, blank=True)
    puesto = models.ForeignKey(Puestos, on_delete=models.CASCADE, null=True, blank=True)

class Asistencia(models.Model):
    asistencia_ID = models.AutoField(primary_key=True)
    estado = models.CharField(max_length=11, choices=[('Confirmada', 'Confirmada'), ('Justificada', 'Justificada'), ('Ausente', 'Ausente')],null=True, blank=True)
    fecha = models.DateField(auto_now_add=True,null=True, blank=True)
    hora = models.DateTimeField(auto_now_add=True,null=True, blank=True)
    usuario = models.ForeignKey(Users, on_delete=models.CASCADE, null=True, blank=True)
    justificacion = models.ForeignKey(Justificaciones, on_delete=models.CASCADE, null=True, blank=True)
