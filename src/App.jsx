import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import WelcomeSection from "./components/WelcomeSection";
import TrendingProducts from "./components/TrendingProducts";
import ExportCountries from "./components/ExportCountries";
import ContactSection from "./components/ContactSection";
import ActualitesPage from "./components/ActualitesPage";
import NotreHistoireSection from "./components/NotreHistoireSection";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Produits from "./components/produits";

function App() {
  return (
    <Router>
      <Header />
      <HeroCarousel />
      <Routes>
        <Route path="/" element={<WelcomeSection />} />
        <Route path="/notre-histoire" element={<NotreHistoireSection />} />
        <Route path="/actualites" element={<ActualitesPage />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/exports" element={<ExportCountries />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
