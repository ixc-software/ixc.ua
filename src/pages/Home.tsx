import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Products } from '../components/Products';
import { News } from '../components/News';
import { Team } from '../components/Team';

export const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <div className="section-alt">
        <Features />
      </div>
      <News />
      <div className="section-alt">
        <Team />
      </div>
    </>
  );
};
