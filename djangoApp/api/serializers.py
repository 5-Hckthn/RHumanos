from rest_framework import serializers
from .models import Users,Puestos, Justificaciones, Asistencia

class PuestosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Puestos
        fields = '__all__'

class JustificacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Justificaciones
        fields = '__all__'

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class AsistenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asistencia
        fields = '__all__'

