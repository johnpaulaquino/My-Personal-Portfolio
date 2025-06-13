import { useState } from 'react';
import { GiTuba } from 'react-icons/gi';

const TechStack = () => {
  const [icons] = useState([
    {
      techStack: {
        FrontEnd: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
        Backend: ['Node.js', 'Express.js', 'FastAPI'],
        Others: ['Docker', 'Git', 'Postman', 'VS Code', 'Figma', 'Sequelize'],
      },
    },
  ]);
  return (
    <div className="max-w-[1500px] mx-auto my-[50px]">
      <section className="mx-[90px] p-[30px">
        <h1 className="text-[#F8B500] my-[30px] text-[1.5rem]">Tools I Work With</h1>

        <div className="flex justify-center items-center  gap-[30px] flex-wrap">
          {Object.entries(icons[0].techStack).map(([categ, tools]) => (
            <div
              key={categ}
              className="w-[350px] h-[250px]  bg-[#2e2e2e49] font-[600] overflow-hidden rounded-[15px]"
            >
              <div className="w-full h-[50px] items-center flex justify-center text-[24px] font-bold pt-[10px] ">
                <h1>{categ}</h1>
              </div>

              <div className="overflow-y-auto h-[200px] px-[10px] scrollbar-custom  ">
                {tools.map((element, index) => (
                  <div key={index} className="flex flex-col overflow-auto p-[10px]  text-[#B0B0B0]">
                    <span>
                      <p className="">{element}</p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default TechStack;
