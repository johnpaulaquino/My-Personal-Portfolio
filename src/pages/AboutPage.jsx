import { useEffect, useState } from 'react';
import NavBar from '../components/nav_bar/Nav';
import AboutMore from '../sections/about/more/AboutMore';
import Education from '../sections/about/education/Education';
import Section from '../components/section/Section';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, width: 0, transition: { duration: 0.3 } }}
        animate={{ opacity: 1, width: '100%', transition: { duration: 0.3 } }}
        exit={{ opacity: 1, width: window.innerWidth, transition: { duration: 0.3 } }}
      >
        <NavBar />
        <Section id={'about-more'} content={<AboutMore />} />
        <Section id={'education'} content={<Education />} />
      </motion.div>
    </>
  );
};

export default AboutPage;
