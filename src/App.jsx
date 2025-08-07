// App.jsx
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop'; // ⬅️ Importar aqui

import HomePage from '@/pages/HomePage';
import MoviesPage from '@/pages/MoviesPage';
import SeriesPage from '@/pages/SeriesPage';
import SportsPage from '@/pages/SportsPage';
import PlansPage from '@/pages/PlansPage';
import SupportPage from '@/pages/SupportPage';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      {/* ⬇️ ScrollToTop aqui dentro do layout, assim funciona com todas as rotas filhas */}
      <ScrollToTop />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="v1" element={<HomePage />} />
        <Route path="v2" element={<HomePage />} />
        <Route path="v3" element={<HomePage />} />
        <Route path="filmes" element={<MoviesPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="esportes" element={<SportsPage />} />
        <Route path="planos" element={<PlansPage />} />
        <Route path="v1/planos" element={<PlansPage />} />
        <Route path="v2/planos" element={<PlansPage />} />
        <Route path="v3/planos" element={<PlansPage />} />
        <Route path="suporte" element={<SupportPage />} />
      </Route>
    </Routes>
  );
}

export default App;
