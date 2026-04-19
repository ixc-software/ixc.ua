import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Products } from '../components/Products';
import { Testimonials } from '../components/Testimonials';
import { News } from '../components/News';
import { Team } from '../components/Team';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <div className="section-alt">
        <Features />
      </div>
      <Testimonials />
      <div className="section-alt">
        <News />
      </div>
      <Team />
      <Contact />
    </>
  );
};
