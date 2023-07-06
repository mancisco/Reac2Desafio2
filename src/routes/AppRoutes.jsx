import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Products from '../pages/Products';
import Contact from '../pages/Contact';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  )
}

export default AppRoutes;
