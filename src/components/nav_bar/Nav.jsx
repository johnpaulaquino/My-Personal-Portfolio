import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideBar from '../sidebar/SideBar';

const NavBar = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [activeSection, setActiveSection] = useState('');
  const [getSidebar, setSideBar] = useState(false);

  const aboutLinks = [
    {
      destination: 'about-more',
      destinationText: 'About Me',
    },
    {
      destination: 'education',
      destinationText: 'Education',
    },
  ];
  const homeLinks = [
    {
      destination: 'home',
      destinationText: 'Home',
    },
    {
      destination: 'about',
      destinationText: 'About Me',
    },
    {
      destination: 'feat_proj',
      destinationText: 'Featured Projects',
    },

    {
      destination: 'certificates',
      destinationText: 'Certificates',
    },
    {
      destination: 'testimonials',
      destinationText: 'Testimonials',
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setNavLinks(homeLinks);
    } else if (location.pathname === '/about/read-more') {
      setNavLinks(aboutLinks);
    } else {
      setNavLinks([]);
    }
  }, [location.pathname]);
  return (
    <>
      <SideBar
        isTrue={getSidebar}
        setIsTrue={setSideBar}
        links={navLinks}
        setLinks={setActiveSection}
        link={activeSection}
      />
      <header
        className="sticky top-0 z-[100] mx-auto backdrop-blur-[3px] 
      max-sm:max-w-[550px] 
      max-sm:min-w-[250px]
       max-sm:mx-[30px]"
      >
        <div
          className="flex items-center justify-between mx-[90px]  my-[30px] 
      bg-[#2E2E2E] p-[15px] rounded-[10px] relative 
      max-sm:mx-[0] max-sm:p-[10px] "
        >
          <h1
            className="text-[2.5rem]"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            <LinkRouter to={'/'} className="text-[#f8b600f5] cursor-pointer max-sm:text-[1.2rem]">
              Pa<span className="text-[#EAEAEA]">ul</span>
            </LinkRouter>
          </h1>

          <ul className="flex gap-10 text-[#B0B0B0] max-xl:hidden ">
            {navLinks.map((element) => (
              <li
                key={element.destination}
                className={`hover:text-[#f8b600f5] ${activeSection === element.destination ? 'text-[#f8b600f5] font-bold transition-all duration-[0.7s]' : ''} transition-all duration-[0.5s]`}
              >
                <ScrollLink
                  className="cursor-pointer"
                  to={element.destination}
                  offset={-80}
                  smooth={'easeInQuad'}
                  duration={120}
                  spy={true}
                  onSetActive={() => {
                    setActiveSection(element.destination);
                  }}
                >
                  {element.destinationText}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* if the screen size is in 75% */}
          <span
            className="absolute right-0 m-[30px] text-[3rem]
         hidden max-xl:block cursor-pointer max-sm:text-[1.5rem]"
            onClick={() => {
              setSideBar(true);
            }}
          >
            <GiHamburgerMenu></GiHamburgerMenu>
          </span>

          <ScrollLink
            to="getintouch"
            offset={0}
            isDynamic={true}
            className="cursor-pointer"
            smooth={'easeInQuad'}
            duration={120}
            spy={true}
            activeClass="text-[#f8b600f5] font-bold transition-all duration-[0.7s] "
          >
            <div
              className="flex items-center justify-center bg-[#f8b600f5] w-[150px] h-[55px]
        rounded-[10px] max-xl:hidden"
            >
              <button
                className="w-full h-full cursor-pointer 
          text-[#0E0E0E] text-[1.1rem] font-[500] border-[#f8b600f5] 
          border-[2px] rounded-[5px]
          hover:bg-[#2E2E2E] hover:text-[#EAEAEA] transition-all 
          duration-[0.7s]"
              >
                Get in touch
              </button>
            </div>
          </ScrollLink>
        </div>
      </header>
    </>
  );
};

export default NavBar;
