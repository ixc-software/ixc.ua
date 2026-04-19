import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { News } from './components/News';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Products />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
