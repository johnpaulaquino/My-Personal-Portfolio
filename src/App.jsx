import NavBar from './components/nav_bar/Nav.jsx';
import Hero from './sections/hero/Hero.jsx';
import About from './sections/about/About.jsx';
import FeaturedProjects from './sections/projects/FeaturedProjects.jsx';
import MyCertificates from './sections/certificates/MyCertificates.jsx';
import Reviews from './sections/reviews/Reviews.jsx';
import TechStack from './sections/tech_stack/TechStack.jsx';
import GetInTouch from './sections/get_in_touch/GetInTouch.jsx';
import Section from './components/section/Section.jsx';
import Footer from './footer/Footer.jsx';
import { useState } from 'react';

const App = () => {
  const [links] = useState([
    {
      destination: 'hero',
      destinationText: 'Home',
    },
    {
      destination: 'about',
      destinationText: 'About Me',
    },
    {
      destination: 'feat_proj',
      destinationText: 'Featured Projects',
    },

    {
      destination: 'certificates',
      destinationText: 'Certificates',
    },
    {
      destination: 'tetimonials',
      destinationText: 'Testimonials',
    },
  ]);
  return (
    <>
      <NavBar links={links} />

      <Section id="hero" content={<Hero />} />

      <Section id="about" content={<About />} />

      <Section id="feat_proj" content={<FeaturedProjects />} />

      <Section id="tech" content={<TechStack />} />

      <Section id="certificates" content={<MyCertificates />} />

      <Section id="tetimonials" content={<Reviews />} />

      <Section id="getintouch" content={<GetInTouch />} />

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
