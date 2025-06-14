import NavBar from './components/nav_bar/Nav.jsx';
import Hero from './sections/hero/Hero.jsx';
import About from './sections/about/About.jsx';
import FeaturedProjects from './sections/projects/FeaturedProjects.jsx';
import MyCertificates from './sections/certificates/MyCertificates.jsx';
import Reviews from './sections/testimonials/Testimonials.jsx';
import TechStack from './sections/tech_stack/TechStack.jsx';
import GetInTouch from './sections/get_in_touch/GetInTouch.jsx';
import Section from './components/section/Section.jsx';
import Footer from './footer/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  return (
    <>
      <Outlet />
      <Section id="getintouch" content={<GetInTouch />} />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
