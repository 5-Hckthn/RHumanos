import { Routes, Route } from 'react-router-dom';

// Páginas
import Page404 from '../Pages/Page404/Page404';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Crud from '../Pages/Crud/Crud';
// Páginas
import Login from '../Pages/Login/Login';
import Perfil from '../Pages/Perfil/Perfil';
import Asistencias from '../Pages/Asistencias/Asistencias';
import Justificaciones from '../Pages/Justificaciones/Justificaciones';


const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} /> {/* Este será el Loggin */}
      <Route path='/home' element={<Home />} />
      <Route path='/asistencia' element={<Asistencias />} />
      <Route path='/crud' element={<Crud  />} />
      <Route path='/register' element={<Register />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='*' element={<Page404 />} />
      <Route path='/justificaciones' element={<Justificaciones />} />
    </Routes>
  );
};

export default Routing; 