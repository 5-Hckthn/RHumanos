from rest_framework.routers import DefaultRouter
from .views import UsersViewSet, PuestosViewSet, JustificacionesViewSet,AsistenciaViewSet

router = DefaultRouter()
router.register(r'users', UsersViewSet, basename='users')
router.register(r'puestos', PuestosViewSet, basename='puestos')
router.register(r'justificaciones', JustificacionesViewSet, basename='justificaciones')
router.register(r'asistencia', AsistenciaViewSet, basename='asistencia')