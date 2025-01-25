from rest_framework.viewsets import ModelViewSet
from .models import Users,Puestos,Justificaciones,Asistencia 
from .serializers import UsersSerializer,PuestosSerializer,JustificacionesSerializer,AsistenciaSerializer

class PuestosViewSet(ModelViewSet):
    queryset = Puestos.objects.all()
    serializer_class = PuestosSerializer

class JustificacionesViewSet(ModelViewSet):
    queryset = Justificaciones.objects.all()
    serializer_class = JustificacionesSerializer

class UsersViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class AsistenciaViewSet(ModelViewSet):
    queryset = Asistencia.objects.all()
    serializer_class = AsistenciaSerializer