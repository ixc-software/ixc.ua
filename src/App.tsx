import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DocumentMeta } from './components/DocumentMeta';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MeshBackground } from './components/MeshBackground';
import { FloatingContact } from './components/FloatingContact';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ProductPage } from './pages/ProductPage';
import { NewsArticle } from './pages/NewsArticle';
import { PlatformBrochurePage } from './pages/PlatformBrochurePage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { hashToId, scrollToElementById } from './utils/scrollToElementId';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const id = hashToId(hash);
    if (id) {
      scrollToElementById(id);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <>
      <DocumentMeta />
      <MeshBackground />
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/platform-brochure" element={<PlatformBrochurePage />} />
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
