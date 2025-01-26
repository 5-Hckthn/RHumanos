from rest_framework.viewsets import ModelViewSet
from .models import Users,Puestos,Justificaciones, Descansos, Jornada , Roles
from .serializers import UsersSerializer, PuestosSerializer, JustificacionesSerializer, DescansoSerializer, JornadaSerializer, RolesSerializer

class PuestosViewSet(ModelViewSet):
    queryset = Puestos.objects.all()
    serializer_class = PuestosSerializer

class RolesViewSet(ModelViewSet):
    queryset = Roles.objects.all()
    serializer_class = RolesSerializer

class JustificacionesViewSet(ModelViewSet):
    queryset = Justificaciones.objects.all()
    serializer_class = JustificacionesSerializer

class UsersViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class DescansosViewSet(ModelViewSet):
    queryset = Descansos.objects.all()
    serializer_class = DescansoSerializer

class JornadaViewSet(ModelViewSet):
    queryset = Jornada.objects.all()
    serializer_class = JornadaSerializer