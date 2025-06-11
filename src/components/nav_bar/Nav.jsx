import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-[100] max-w-[1500px] mx-auto backdrop-blur-[3px] scroll-pb-[1200px]">
      <div
        className="flex items-center justify-between mx-[90px] my-[30px] 
      bg-[#2E2E2E] p-[15px] rounded-[10px]"
      >
        <h1 className="text-[2.5rem]">
          <a href="#home" className="text-[#f8b600f5] ">
            Pa<span className="text-[#EAEAEA]">ul</span>
          </a>
        </h1>
        <ul className="flex gap-10 text-[#B0B0B0]">
          <li className="hover:text-[#f8b600f5] transition-all duration-[0.5s]">
            <Link className="cursor-pointer" to="hero" duration={100}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#f8b600f5] transition-all duration-[0.5s]">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:text-[#f8b600f5] transition-all duration-[0.5s]">
            <a href="#selected_projects">Projects</a>
          </li>
          <li className="hover:text-[#f8b600f5] transition-all duration-[0.5s]">
            <a href="#certificates">Certificates</a>
          </li>
          <li className="hover:text-[#f8b600f5] transition-all duration-[0.5s]">
            <a href="#certificates">Contacts</a>
          </li>
        </ul>

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
            <a
              href="#contact"
              className="
          "
            >
              Get in touch
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
