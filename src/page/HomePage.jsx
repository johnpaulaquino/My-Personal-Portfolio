import Section from '../components/section/Section.jsx';
import Hero from '../sections/hero/Hero.jsx';
import About from '../sections/about/About.jsx';
import FeaturedProjects from '../sections/projects/FeaturedProjects.jsx';
import MyCertificates from '../sections/certificates/MyCertificates.jsx';
import Reviews from '../sections/testimonials/Testimonials.jsx';
import TechStack from '../sections/tech_stack/TechStack.jsx';
import NavBar from '../components/nav_bar/Nav.jsx';
import { useState } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0, transition: { duration: 0.3 } }}
      animate={{ opacity: 1, width: '100%', transition: { duration: 0.3 } }}
      exit={{ opacity: 1, width: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <Section id="hero" content={<Hero />} />
      <Section id="about" content={<About />} />
      <Section id="feat_proj" content={<FeaturedProjects />} />
      <Section id="tech" content={<TechStack />} />
      <Section id="certificates" content={<MyCertificates />} />
      <Section id="testimonials" content={<Reviews />} />
    </motion.div>
  );
};
export default HomePage;
