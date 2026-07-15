import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DocumentMeta } from './components/DocumentMeta';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MeshBackground } from './components/MeshBackground';
import { FloatingContact } from './components/FloatingContact';
import { Home } from './pages/Home';
import { IxcClubPage } from './pages/IxcClubPage';
import { AboutUs } from './pages/AboutUs';
import { ProductPage } from './pages/ProductPage';
import { NewsArticle } from './pages/NewsArticle';
import { PlatformBrochurePage } from './pages/PlatformBrochurePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { blogPosts, getPostPath } from './content/blogPosts';
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
            <Route path="/ixc-club" element={<IxcClubPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/platform-brochure" element={<PlatformBrochurePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {blogPosts
              .filter((p) => p.path)
              .map((p) => (
                <Route key={p.slug} path={getPostPath(p)} element={<BlogPost />} />
              ))}
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
