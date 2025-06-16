import { useState } from 'react';
import { GiTuba } from 'react-icons/gi';

const TechStack = () => {
  const [icons] = useState([
    {
      techStack: {
        FrontEnd: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
        Backend: ['Node.js', 'Express.js', 'FastAPI'],
        Others: ['Docker', 'Git', 'Postman', 'VS Code', 'Figma', 'Sequelize', 'asdsad'],
      },
    },
  ]);
  return (
    <div
      className="mx-[90px] 
    max-sm:mx-[30px]"
    >
      <h1
        className="text-[#F8B500] text-[3rem] font-[600] my-[30px] 
        max-sm:text-[1.5rem]"
      >
        Tools I Work With
      </h1>

      <div className="flex justify-center items-center gap-[20px] flex-wrap">
        {Object.entries(icons[0].techStack).map(([categ, tools]) => (
          <div
            key={categ}
            className="w-[300px] h-[200px]  bg-[#2e2e2e49] font-[600] overflow-y-auto relative rounded-[15px] scrollbar-custom "
          >
            <div className="w-full h-[50px] backdrop-blur-3xl items-center flex justify-center text-[1.5rem] font-bold pt-[10px] sticky top-0 z-10">
              <h1>{categ}</h1>
            </div>

            <div className="px-[20px]  ">
              {tools.map((element, index) => (
                <div
                  key={index}
                  className=" text-[#B0B0B0] py-[5px]
                max-sm:text-[0.8rem] "
                >
                  <span>
                    <p className="">{element}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStack;
