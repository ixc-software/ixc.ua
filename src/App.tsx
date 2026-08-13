import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import { hashToId, scrollToElementById } from './utils/scrollToElementId';
import { URL_PREFIX_LANGUAGES } from './i18n/localePath';

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

/** `/en` and `/en/...` → unprefixed English canonical. */
function EnPrefixRedirect() {
  const { pathname, search, hash } = useLocation();
  const dest = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return <Navigate to={`${dest}${search}${hash}`} replace />;
}

function withPrefix(prefix: string, path: string): string {
  if (!prefix) return path;
  return path === '/' ? prefix : `${prefix}${path}`;
}

function makePageRoutes(prefix: string) {
  const key = prefix || 'en';
  return [
    <Route key={`${key}-home`} path={withPrefix(prefix, '/')} element={<Home />} />,
    <Route key={`${key}-about`} path={withPrefix(prefix, '/about-us')} element={<AboutUs />} />,
    <Route key={`${key}-club`} path={withPrefix(prefix, '/ixc-club')} element={<IxcClubPage />} />,
    <Route
      key={`${key}-privacy`}
      path={withPrefix(prefix, '/privacy-policy')}
      element={<PrivacyPolicy />}
    />,
    <Route
      key={`${key}-brochure`}
      path={withPrefix(prefix, '/platform-brochure')}
      element={<PlatformBrochurePage />}
    />,
    <Route key={`${key}-blog`} path={withPrefix(prefix, '/blog')} element={<Blog />} />,
    <Route key={`${key}-blog-slug`} path={withPrefix(prefix, '/blog/:slug')} element={<BlogPost />} />,
    ...blogPosts
      .filter((p) => p.path)
      .map((p) => (
        <Route
          key={`${key}-${p.slug}`}
          path={withPrefix(prefix, getPostPath(p))}
          element={<BlogPost />}
        />
      )),
    <Route
      key={`${key}-products`}
      path={withPrefix(prefix, '/products/:slug')}
      element={<ProductPage />}
    />,
    <Route key={`${key}-news`} path={withPrefix(prefix, '/news/:slug')} element={<NewsArticle />} />
  ];
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
            <Route path="/en" element={<EnPrefixRedirect />} />
            <Route path="/en/*" element={<EnPrefixRedirect />} />
            {makePageRoutes('')}
            {URL_PREFIX_LANGUAGES.flatMap((lang) => makePageRoutes(`/${lang}`))}
          </Routes>
        </main>
        <Footer />
      </div>
      <FloatingContact />
    </>
  );
}

export default App;
