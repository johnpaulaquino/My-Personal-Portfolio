import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ImCross } from 'react-icons/im';
import { useRef } from 'react';
const SideBar = ({ links, isTrue, setIsTrue, setLinks, link }) => {
  return (
    <>
      {isTrue && (
        <div
          className=" h-full w-full flex justify-end top-0 bg-[#2e2e2e49]
           backdrop-blur-[5px] z-[999] fixed transition-all duration-[0.7s]"
        >
          <div
            className="w-fit h-full bg-[#2E2E2E] border-l-2 border-[#b0b0b046] 
          flex p-[15px] transition-all duration-[0.7s]"
          >
            <ul
              className="flex flex-col text-[#B0B0B0]
             max-sm:text-[0.3rem] max-sm:gap-[5px]"
            >
              <ImCross
                className="text-[2rem] cursor-pointer 
                max-sm:text-[0.4rem] "
                onClick={() => {
                  setIsTrue(false);
                }}
              ></ImCross>

              {links.map((element) => (
                <li
                  className={`hover:text-[#f8b600f5] ${link === element.destination ? 'text-[#f8b600f5] font-bold transition-all duration-[0.7s]' : ''} transition-all duration-[0.5s]`}
                >
                  <ScrollLink
                    className="cursor-pointer"
                    to={element.destination}
                    offset={-80}
                    smooth={'easeInQuad'}
                    duration={120}
                    spy={true}
                    onSetActive={() => {
                      setLinks(element.destination);
                    }}
                    onSetInactive={() => {
                      setLinks(link);
                    }}
                  >
                    {element.destinationText}
                  </ScrollLink>
                </li>
              ))}

              <ScrollLink
                to="getintouch"
                offset={0}
                isDynamic={true}
                className="cursor-pointer"
                smooth={'easeInQuad'}
                duration={120}
                spy={true}
              >
                <div
                  className="flex items-center justify-center bg-[#f8b600f5] w-[150px] h-[55px]
        rounded-[5px] max-sm:w-[45px] max-sm:h-[20px]"
                >
                  <button
                    className="w-full h-full cursor-pointer 
          text-[#0E0E0E] text-[1.1rem] font-[500] border-[#f8b600f5] 
          border-1 rounded-[5px]
          hover:bg-[#2E2E2E] hover:text-[#EAEAEA] transition-all 
          duration-[0.7s]
           max-sm:text-[0.3rem]  "
                  >
                    Get in touch
                  </button>
                </div>
              </ScrollLink>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default SideBar;
