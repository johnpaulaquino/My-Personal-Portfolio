import NavBar from './components/nav_bar/Nav.jsx';
import Hero from './sections/hero/Hero.jsx';
import About from './sections/about/About.jsx';
import FeaturedProjects from './sections/projects/FeaturedProjects.jsx';
import MyCertificates from './sections/certificates/MyCertificates.jsx';
import Reviews from './sections/reviews/Reviews.jsx';
import TechStack from './sections/tech_stack/TechStack.jsx';

const App = () => {
  return (
    <body>
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

      <section id="tech_stack">
        <TechStack />
      </section>

      <section id="certificates">
        <MyCertificates />
      </section>

      <section id="reviews">
        <Reviews />
      </section>
    </body>
  );
};

export default App;
