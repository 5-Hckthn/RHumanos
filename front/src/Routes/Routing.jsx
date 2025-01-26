import { Routes, Route } from 'react-router-dom';

// Páginas
import Page404 from '../Pages/Page404/Page404';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Crud from '../Pages/Crud/Crud';
import { Button } from '@mui/material';
import Buttons from '../Components/Buttons/Buttons';
// Páginas

const Routing = () => {
  return (
    <Routes>
       <Route path='/' element={<Page404 />} /> {/* Este será el Loggin */}
      <Route path='/home' element={<Home />} />
      <Route path='/asistencia' element={<Page404 />} />
      <Route path='/crud' element={<Page404 />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<Page404 />} />
      <Route path='/a' element={<Buttons />} />
    </Routes>
  );
};

export default Routing; 