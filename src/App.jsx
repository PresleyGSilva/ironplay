import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

import HomePage from "@/pages/HomePage";
import MoviesPage from "@/pages/MoviesPage";
import SeriesPage from "@/pages/SeriesPage";
import SportsPage from "@/pages/SportsPage";
import PlansPage from "@/pages/PlansPage";
import SupportPage from "@/pages/SupportPage";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Layout padrão */}
      <Route path="/" element={<AppLayout />}>
        {/* Página inicial */}
        <Route index element={<HomePage />} />

        {/* Rotas sem versão */}
        <Route path="filmes" element={<MoviesPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="esportes" element={<SportsPage />} />
        <Route path="planos" element={<PlansPage />} />
        <Route path="suporte" element={<SupportPage />} />

        {/* Rotas da V1 */}
        <Route path="v1" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="filmes" element={<MoviesPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="esportes" element={<SportsPage />} />
          <Route path="planos" element={<PlansPage />} />
        </Route>

        {/* Rotas da V2 */}
        <Route path="v2" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="filmes" element={<MoviesPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="esportes" element={<SportsPage />} />
          <Route path="planos" element={<PlansPage />} />
        </Route>

        {/* Rotas da V3 */}
        <Route path="v3" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="filmes" element={<MoviesPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="esportes" element={<SportsPage />} />
          <Route path="planos" element={<PlansPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
