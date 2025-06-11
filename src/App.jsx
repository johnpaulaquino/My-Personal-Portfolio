import NavBar from './components/nav_bar/Nav.jsx';
import Hero from './sections/hero/Hero.jsx';
import About from './sections/about/About.jsx';
import FeaturedProjects from './sections/projects/FeaturedProjects.jsx';
import MyCertificates from './sections/certificates/MyCertificates.jsx';

const App = () => {
  return (
    <>
      <NavBar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="selected_projects">
        <FeaturedProjects />
      </section>

      <section id="certificates">
        <MyCertificates />
      </section>
    </>
  );
};

export default App;
