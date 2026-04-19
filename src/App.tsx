import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MeshBackground } from './components/MeshBackground';
import { FloatingContact } from './components/FloatingContact';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ProductPage } from './pages/ProductPage';
import { NewsArticle } from './pages/NewsArticle';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <MeshBackground />
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <FloatingContact />
    </>
  );
}

export default App;
