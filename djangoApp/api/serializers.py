from rest_framework import serializers
from .models import Users,Puestos, Justificaciones, Descansos, Jornada

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

class DescansoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Descansos
        fields = '__all__'

class JornadaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jornada
        fields = '__all__'

