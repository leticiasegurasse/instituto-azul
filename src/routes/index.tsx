// Definição das rotas principais
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../features/site/pages/Home';
import CursoABAFono from '../features/landingpage/pages/CursoABAFono';
import { ROUTES } from '../config/routes'

const AppRoutes = () => (
  <BrowserRouter>
    <DefaultLayout>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.cursoABAFono} element={<CursoABAFono />} />
      </Routes>
    </DefaultLayout>
  </BrowserRouter>
);

export default AppRoutes; 