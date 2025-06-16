// Removed unused import: 'Link' from 'lucide-react'
import { TbExternalLink } from 'react-icons/tb';
import { RiGitForkFill, RiStarSLine } from 'react-icons/ri'; // Combined into one line for cleaner import
import { FaGithub } from 'react-icons/fa';

const Cards = ({ data }) => {
  return (
    // Main card wrapper
    <section // Changed from 'element' to 'data'
      className="flex flex-col w-[550px] h-fit bg-[#2e2e2e49] 
      rounded-[15px] border-2 border-[#2E2E2E]
      max-sm:w-[350px]"
    >
      {/* Image preview area */}
      <div
        className="relative flex items-center justify-center w-full h-[350px] 
        overflow-hidden group cursor-pointer rounded-tr-[10px] 
          rounded-tl-[10px]
      max-sm:h-[180px] "
      >
        <div
          className="absolute inset-0 bg-cover bg-center
           transition duration-700 group-hover:blur-sm group-hover:scale-110
           "
          style={{
            backgroundImage: `url(${data.image})`,

            // Changed from 'element.image' to 'data.image'
          }}
        />

        <div className="relative z-10 flex flex-col h-[550px] items-center justify-center">
          <span className="hidden group-hover:block">
            <TbExternalLink
              className="text-[4rem]
            max-sm:text-[2rem]"
            />
          </span>
          <p
            className="hidden text-[2rem] font-bold group-hover:block
          max-sm:text-[1.2rem]"
          >
            View Live Code
          </p>
        </div>
      </div>

      {/* Forks, Stars, Status */}
      <div className="flex w-auto m-[20px] items-center">
        <div className="flex items-end mr-[20px] justify-center h-auto w-fit">
          <span>
            <RiGitForkFill
              className="text-[1.3rem] text-[#B0B0B0]
            max-sm:text-[0.8rem]"
            />
          </span>
          <p
            className="text-[0.9rem]
          max-sm:text-[0.6rem]"
          >
            {data.forks}
          </p>
        </div>

        <div className="flex items-end justify-center h-auto w-fit">
          <span>
            <RiStarSLine
              className="text-[1.3rem] text-[#B0B0B0]
            max-sm:text-[0.8rem]"
            />
          </span>
          <p
            className="text-[0.9rem]
          max-sm:text-[0.6rem]"
          >
            {data.stars}
          </p>
        </div>

        <div className="flex w-full items-end justify-end">
          <p
            className="font-[600]
           max-sm:text-[0.8rem]"
          >
            {data.status}
          </p>
        </div>
      </div>

      {/* Tech stack and description */}
      <div className="mx-[20px]">
        <div className="flex h-auto flex-wrap  gap-[10px]">
          {data.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex-center justify-center p-[5px] w-auto h-fit
               rounded-[5px] bg-[#2e2e2e49] border-2 border-[#2E2E2E]
               max-sm:text-[0.7rem]"
            >
              <span>{tech}</span>
            </div>
          ))}
        </div>

        <h1
          className="my-[10px] text-[32px] font-extrabold
        max-sm:text-[1rem] text-center"
        >
          {data.title}
        </h1>
        <h3
          className="text-[24px] overflow-hidden break-words
        max-sm:text-[0.7rem]"
        >
          {data.description}
        </h3>
      </div>

      {/* Last Updated and GitHub Button */}
      <div className="flex w-full justify-between h-full">
        <div className="m-[30px] flex justify-between items-center w-full h-full">
          <p
            className="#B0B0B0 
          max-sm:text-[0.5rem]"
          >
            Last Updated: <span className="font-[600]">{data.lastUpdated}</span>
          </p>
        </div>

        <div className="flex items-center mx-[20px] relative">
          <button
            className="flex items-center justify-between w-[150px] h-[50px] p-[20px] cursor-pointer
             rounded-[5px] bg-[#2e2e2e49] border-2 border-[#2E2E2E]
             max-sm:text-[0.7rem] max-sm:w-[120px]"
            onClick={() => window.open(data.githubLink, '_blank')} // Optional: open GitHub link
          >
            <span>
              <FaGithub className="text-[1.5rem] cursor-pointer" />
            </span>
            <p className="cursor-pointer">Github</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
