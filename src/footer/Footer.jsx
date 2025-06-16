import { FaFacebook } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" w-full bg-[#2e2e2e49] border-t-2 border-[#2E2E2E] h-[100px] *">
      <section className="h-full mx-auto max-w-[1500px]">
        <div
          className="flex justify-between items-center h-full mx-[90px] 
        max-sm:mx-[30px]"
        >
          <div className="flex w-full">
            <p className="text-[#B0B0B0] text-[1.2rem] max-sm:text-[0.8rem]">
              Copyright
              <span className="text-[#f8b600f5]"> © </span> {new Date().getFullYear()}{' '}
              <span className="text-[#f8b600f5]">John Paul Aquino</span>
            </p>
          </div>
          <div className="flex w-full flex-col items-end justify-center gap-[5px] text-[1.6rem] max-sm:text-[0.8rem]">
            <div className="flex flex-col gap-[5px]">
              <p className="text-[1rem] text-[#f8b600f5]">Follow me on</p>

              <div className="flex gap-[15px]">
                <span className="cursor-pointer transition-all duration-[0.7s] hover:text-[#1e81b0]">
                  <FaFacebook className="" />
                </span>
                <span className="cursor-pointer transition-all duration-[0.7s] hover:text-[#1e81b0]">
                  <IoLogoGithub />
                </span>
                <span className="cursor-pointer transition-all duration-[0.7s] hover:text-[#1e81b0]">
                  <FaLinkedin />
                </span>
                <span className="cursor-pointer transition-all duration-[0.7s] hover:text-[#1e81b0]">
                  <FaInstagramSquare />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Footer;
