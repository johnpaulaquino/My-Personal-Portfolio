import Section from '../components/section/Section';
import NavBar from '../components/nav_bar/Nav';
import FullProjects from '../sections/projects/all/AllProjects';

import { motion } from 'framer-motion';


const ProjectsPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, width: 0, transition: { duration: 2 } }}
        animate={{ opacity: 1, width: '100%', transition: { duration: 2 } }}
        exit={{ opacity: 1, width: window.innerWidth, transition: { duration: 2 } }}
      >
        <NavBar />
        <Section id={'full-project'} content={<FullProjects />} />
      </motion.div>
    </>
  );
};

export default ProjectsPage;
