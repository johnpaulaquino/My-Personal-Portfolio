import GetInTouch from './sections/get_in_touch/GetInTouch.jsx';
import Section from './components/section/Section.jsx';
import Footer from './footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import NavBar from './components/nav_bar/Nav.jsx';

const App = () => {
  return (
    <>
      <NavBar />

      <Outlet />

      <Section id="getintouch" content={<GetInTouch />} />

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
