import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideBar from '../sidebar/SideBar';

const NavBar = ({ links = [] }) => {
  const [getSidebar, setSideBar] = useState(false);

  const [menu, setMenu] = useState('home');

  return (
    <>
      <SideBar isTrue={getSidebar} setIsTrue={setSideBar} links={links} />
      <header className="sticky top-0 z-[100] max-w-[1500px] mx-auto backdrop-blur-[3px] scroll-pb-[1200px]">
        <div
          className="flex items-center justify-between mx-[90px] my-[30px] 
      bg-[#2E2E2E] p-[15px] rounded-[10px] relative"
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
            <LinkRouter to={'/'} className="text-[#f8b600f5] cursor-pointer">
              Pa<span className="text-[#EAEAEA]">ul</span>
            </LinkRouter>
          </h1>

          <ul className="flex gap-10 text-[#B0B0B0] max-xl:hidden ">
            {links.map((element) => (
              <li className={`hover:text-[#f8b600f5] transition-all duration-[0.5s]`}>
                <ScrollLink
                  className="cursor-pointer"
                  to={element.destination}
                  offset={-85}
                  smooth={'easeInQuad'}
                  duration={120}
                  spy={true}
                  activeClass="text-[#f8b600f5] font-bold transition-all duration-[0.7s]"
                >
                  {element.destinationText}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* if the screen size is in 75% */}
          <span
            className="absolute right-0 m-[30px] text-[3rem]
         hidden max-xl:block cursor-pointer"
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
