import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
        <Route path="filmes" element={<MoviesPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="esportes" element={<SportsPage />} />
        <Route path="planos" element={<PlansPage />} />
        <Route path="suporte" element={<SupportPage />} />
      </Route>
    </Routes>
  );
}

export default App;