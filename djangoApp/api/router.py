from rest_framework.routers import DefaultRouter
from .views import UsersViewSet, PuestosViewSet, JustificacionesViewSet, DescansosViewSet , JornadaViewSet , RolesViewSet

router = DefaultRouter()
router.register(r'users', UsersViewSet, basename='users')
router.register(r'puestos', PuestosViewSet, basename='puestos')
router.register(r'justificaciones', JustificacionesViewSet, basename='justificaciones')
router.register(r'descansos', DescansosViewSet, basename='descansos')
router.register(r'jornadas', JornadaViewSet, basename='jornadas')
router.register(r'roles', RolesViewSet, basename='roles')