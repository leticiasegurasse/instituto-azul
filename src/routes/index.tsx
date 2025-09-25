// Definição das rotas principais
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import { ROUTES } from '../config/routes'

const AppRoutes = () => (
  <BrowserRouter>
    <DefaultLayout>
      <Routes>
      </Routes>
    </DefaultLayout>
  </BrowserRouter>
);

export default AppRoutes; 