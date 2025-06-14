import { useEffect, useState } from 'react';
import NavBar from '../components/nav_bar/Nav';
import Footer from '../footer/Footer';
import AboutMore from '../sections/about/more/AboutMore';
import Education from '../sections/about/education/Education';
import Section from '../components/section/Section';
import GetInTouch from '../sections/get_in_touch/GetInTouch';

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
      <NavBar links={links} />
      <Section id={'about-more'} content={<AboutMore />} />
      <Section id={'education'} content={<Education />} />
      <Section id={'getintouch'} content={<GetInTouch />} />
      <Footer />
    </>
  );
};

export default AboutPage;
