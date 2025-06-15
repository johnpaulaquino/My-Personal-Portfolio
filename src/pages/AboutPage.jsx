import { useEffect, useState } from 'react';
import NavBar from '../components/nav_bar/Nav';
import Footer from '../footer/Footer';
import AboutMore from '../sections/about/more/AboutMore';
import Education from '../sections/about/education/Education';
import Section from '../components/section/Section';
import GetInTouch from '../sections/get_in_touch/GetInTouch';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const [links] = useState([
    {
      destination: 'about-more',
      destinationText: 'About Me',
    },
    {
      destination: 'education',
      destinationText: 'Education',
    },
  ]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, width: 0, transition: { duration: 2 } }}
        animate={{ opacity: 1, width: '100%', transition: { duration: 2 } }}
        exit={{ opacity: 1, width: window.innerWidth, transition: { duration: 2 } }}
      >
        <NavBar links={links} />
        <Section id={'about-more'} content={<AboutMore />} />
        <Section id={'education'} content={<Education />} />
      </motion.div>
    </>
  );
};

export default AboutPage;
