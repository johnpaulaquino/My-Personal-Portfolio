import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { useEffect } from 'react';

const NavBar = ({ links = [] }) => {
  return (
    <header className="sticky top-0 z-[100] max-w-[1500px] mx-auto backdrop-blur-[3px] scroll-pb-[1200px]">
      <div
        className="flex items-center justify-between mx-[90px] my-[30px] 
      bg-[#2E2E2E] p-[15px] rounded-[10px]"
      >
        <h1 className="text-[2.5rem]">
          <LinkRouter to={'/'} className="text-[#f8b600f5] cursor-pointer">
            Pa<span className="text-[#EAEAEA]">ul</span>
          </LinkRouter>
        </h1>
        <ul className="flex gap-10 text-[#B0B0B0]">
          {links.map((element) => (
            <li className="hover:text-[#f8b600f5] transition-all duration-[0.5s]">
              <ScrollLink
                className="cursor-pointer"
                to={element.destination}
                offset={-100}
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

        <ScrollLink
          to="getintouch"
          offset={-100}
          isDynamic={true}
          className="cursor-pointer"
          smooth={'easeInQuad'}
          duration={120}
          spy={true}
          activeClass="text-[#f8b600f5] font-bold transition-all duration-[0.7s]"
        >
          <div
            className="flex items-center justify-center bg-[#f8b600f5] w-[150px] h-[55px]
        rounded-[10px]"
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
  );
};

export default NavBar;
