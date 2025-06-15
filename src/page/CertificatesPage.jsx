import Section from '../components/section/Section';
import NavBar from '../components/nav_bar/Nav';
import FullProjects from '../sections/projects/all/AllProjects';
import MyCertificates from '../sections/certificates/MyCertificates';
import { motion } from 'framer-motion';

const CertificatesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0, transition: { duration: 0.3 } }}
      animate={{ opacity: 1, width: '100%', transition: { duration: 0.3 } }}
      exit={{ opacity: 1, width: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <Section id={'full-certificates'} content={<MyCertificates />} />
    </motion.div>
  );
};

export default CertificatesPage;
