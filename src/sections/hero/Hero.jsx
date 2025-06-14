import ProfilePic from '../../assets/2x2 Picure.jpg';
import { Link as LinkRouter } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=" mx-[90px] h-full grid grid-cols-5">
      <div className="col-span-3 start-0 end-3.5 flex-col mt-[50px] max-xl:col-span-full max-xl:justify-center ">
        <div
          className="flex items-center relative justify-center
                         border-[#2e2e2e] border-2 bg-[#2e2e2e42] w-[250px] 
                         h-fit p-[15px] rounded-full flex-wrap"
        >
          <div className="w-[15px] h-[15px] bg-[#3EBE5E] absolute rounded-full left-4 animate-ping"></div>
          <div className="w-[15px] h-[15px] bg-[#3EBE5E] absolute rounded-full left-4 "></div>
          <p className="text-[1rem]">Available for Work</p>
        </div>

        <section className=" my-[30px]">
          <h1 className="text-[5rem] leading-[100px] font-[700]">
            John Paul Aquino<span className="text-[#F8B500]">.</span>
          </h1>
          <br />
          <h1 className="text-[5rem] leading-[100px] font-[700]">
            I Code
            <span className="text-[#F8B500]">* </span>
            Create
          </h1>
          <h1 className="text-[5rem] leading-[100px] font-[700]">
            <span className="text-[#F8B500]">*</span>
            Innovate<span className="text-[#F8B500]">.</span>
          </h1>

          <div className="text-[#B0B0B0] w-[500px] my-[30px] leading-[35px] text-[1.3rem]">
            <p>Building real-world solutions with a focus on AI, software design, and growth.</p>
          </div>

          <div className="w-[380px] h-[65px] flex justify-between text-[1rem] font-[500]">
            <button
              className="w-[170px] h-full cursor-pointer  text-[#0E0E0E] border-[#F8B500] border-2 
                              bg-[#F8B500] rounded-[5px] hover:bg-[#0E0E0E] hover:text-[#EAEAEA] transition-all duration-[0.7s]"
            >
              Download CV
            </button>

            <LinkRouter to="projects">
              <button
                className="w-[170px] h-full cursor-pointer  border-[#2E2E2E]  bg-[#2E2E2E] rounded-[5px] border-2
                              hover:bg-[#0E0E0E]  transition-all duration-[0.7s]"
              >
                Browse Projects
              </button>
            </LinkRouter>
          </div>
        </section>
      </div>

      {/* Left content */}
      <section className="col-span-2 start-4  max-xl:hidden grid justify-end ">
        <div
          className="mt-[150px] w-[400px] h-[400px] bg-center bg-cover object-fill rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.3)]
                        "
          style={{ backgroundImage: `url(${ProfilePic})` }}
        ></div>
      </section>
    </section>
  );
};

export default Hero;
