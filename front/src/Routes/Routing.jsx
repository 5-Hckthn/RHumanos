import { Routes, Route } from 'react-router-dom';

// Páginas
import Page404 from '../Pages/Page404/Page404';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Crud from '../Pages/Crud/Crud';
// Páginas

const Routing = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/crud' element={<Crud />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};

export default Routing; 