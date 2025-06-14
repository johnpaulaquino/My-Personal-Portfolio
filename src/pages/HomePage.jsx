import Section from '../components/section/Section';
import Hero from '../sections/hero/Hero.jsx';
import About from '../sections/about/About.jsx';
import FeaturedProjects from '../sections/projects/FeaturedProjects.jsx';
import MyCertificates from '../sections/certificates/MyCertificates.jsx';
import Reviews from '../sections/testimonials/Testimonials.jsx';
import TechStack from '../sections/tech_stack/TechStack.jsx';
import NavBar from '../components/nav_bar/Nav.jsx';
import { useState } from 'react';

const HomePage = () => {
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
      destination: 'testimonials',
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
      <Section id="testimonials" content={<Reviews />} />
    </>
  );
};
export default HomePage;
