import Section from '../components/section/Section';
import NavBar from '../components/nav_bar/Nav';
import AllTestimonials from '../sections/testimonials/all/AllTestimonials';

const TestimonialsPage = () => {
  return (
    <>
      <NavBar />
      <Section id={'full-testimonials'} content={<AllTestimonials />} />
    </>
  );
};

export default TestimonialsPage;
