from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator

class Puestos(models.Model):
    puesto_ID = models.AutoField(primary_key=True)
    puesto_name = models.CharField(max_length=255, null=False, blank=False)



class Roles(models.Model):
    role_ID = models.AutoField(primary_key=True)
    role_name = models.CharField(max_length=255, null=False, blank=False)

class Users(models.Model):
    id = models.AutoField(primary_key=True)
    cedula = models.CharField(
        max_length=10,  # Máximo de 10 caracteres
        validators=[RegexValidator(regex=r'^\d{8,10}$', message="La cédula debe tener entre 8 y 10 dígitos.")],
        unique=True,
        null=False, blank=False,
        verbose_name="Cédula")
    first_name = models.CharField(max_length=255, null=False, blank=False)
    last_name = models.CharField(max_length=255, null=False, blank=False)
    email = models.EmailField(max_length=255, null=False, blank=False)
    password = models.CharField(max_length=255, null=False, blank=False)
    phone_number = models.CharField(max_length=8,null=False, blank=False)
    date_create = models.DateTimeField(auto_now_add=True)
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE, null=False, blank=False)
    estado = models.BooleanField(default=True, null=False, blank=False)
    puesto = models.ForeignKey(Puestos, on_delete=models.CASCADE, null=False, blank=False)

class Justificaciones(models.Model):
    justificacion_ID = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=255, default="No hay descripcion", null=True, blank=True)
    estado = models.CharField(max_length=10, choices=[('Aprobada', 'Aprobada'), ('Pendiente', 'Pendiente'), ('Denegada', 'Denegada')],null=False, blank=False)
    fecha_creacion = models.DateField(auto_now_add=True)
    fecha_inicial = models.DateField(null=False, blank=False)
    fecha_final = models.DateField(null=False, blank=False)
    
                                                                                                                                                                                                                                                                                                                                                                                    
class Jornada(models.Model):
    jornada_ID = models.AutoField(primary_key=True)
    estado = models.CharField(max_length=10, choices=[('Aprobada', 'Aprobada'), ('Pendiente', 'Pendiente'), ('Denegada', 'Denegada')],null=False, blank=False)
    fecha = models.DateField(null=False, blank=False)
    hora_inicio = models.TimeField(null=False, blank=False)
    hora_salida = models.TimeField(null=False, blank=False)
    usuario = models.ForeignKey(Users, on_delete=models.CASCADE, null=False, blank=False)
    justificacion = models.ForeignKey(Justificaciones, on_delete=models.CASCADE, null=True, blank=True)

class Descansos(models.Model):
    descanso_ID = models.AutoField(primary_key=True)
    descanso_inicio = models.DateTimeField(auto_now_add=True)
    descanso_fin = models.DateTimeField(auto_now_add=True)
    descanso_total = models.DecimalField(max_digits=5, decimal_places=2, null=False, blank=False)
    jornada = models.ForeignKey(Jornada, on_delete=models.CASCADE, null=False, blank=False)

