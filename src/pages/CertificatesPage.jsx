import Section from '../components/section/Section';
import NavBar from '../components/nav_bar/Nav';
import FullProjects from '../sections/projects/all/AllProjects';
import MyCertificates from '../sections/certificates/MyCertificates';

const CertificatesPage = () => {
  return (
    <>
      <NavBar />
      <Section id={'full-certificates'} content={<MyCertificates />} />
    </>
  );
};

export default CertificatesPage;
