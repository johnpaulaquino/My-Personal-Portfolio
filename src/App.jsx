import { useState } from 'react'
import NavBar from './components/nav_bar/Nav.jsx';
import Hero from './sections/hero/Hero.jsx';
import CardTemplate from './sections/projects/Projects.jsx';
import About from './sections/about/About.jsx';


const App = () => {



  return (
    <>
    <NavBar />
    
  <section id='hero'>
      <Hero />
    </section>

    <section id='about'>
      <About />
    </section>
    
    {  /* <section id='projects'>
  <CardTemplate />
    </section> */}
    </>
  )
}

export default App;
