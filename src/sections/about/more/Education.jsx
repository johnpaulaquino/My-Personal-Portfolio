import { useEffect, useState } from 'react';

const Education = () => {
  const [education] = useState([
    {
      id: 1,
      school: 'Laguna University',
      degree: 'Bachelor of Science in Computer Science',
      field: 'Data Science',
      startYear: 2021,
      endYear: 'present',
      location: 'Laguna Sports Complex, Bubukal, Santa Cruz, 4009 Laguna, Philippines',
    },
    {
      id: 2,
      school: 'ACTS Computer College',
      degree: 'Senior High School Diploma',
      field: 'ICT Strand',
      startYear: 2014,
      endYear: 2018,
      location: 'Santa Cruz, 4009 Laguna, Philippines',
    },
    {
      id: 3,
      school: 'Junior High School',
      degree: 'High School Diploma',
      field: 'General Education',
      startYear: 2014,
      endYear: 2018,
      location: 'Bubukal, Santa Cruz, 4009 Laguna, Philippines',
    },
  ]);

  return (
    <>
      <div
        className="mx-[90px] my-[50px] relative z-10
      max-sm:mx-[30px]"
      >
        <div>
          <h1
            className="text-[#F8B500] text-[3rem] font-[600] 
          max-sm:text-[1.5rem]"
          >
            Education
          </h1>
        </div>

        <div className="flex h-auto flex-col gap-[100px] items-center justify-center mt-[30px] relative">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[15px] h-full bg-[#2e2e2e49] border-1 
        border-[#2E2E2E] z-0"
          />
          {education.map((element) => (
            <div
              key={element.id}
              className="w-[750px] z-10 bg-[#0E0E0E] border-4 border-[#2e2e2e49] 
              rounded-[15px] h-[400px] overflow-hidden
              max-sm:w-[550px]  max-sm:h-[300px]"
            >
              <div className=" flex flex-col gap-[10px] p-[40px] h-full overflow-y-auto scrollbar-custom">
                <h1
                  className="text-[1.8rem] text-[#F8B500] font-[600]
                max-sm:text-[1.3rem]"
                >
                  {element.school}
                </h1>
                <div>
                  <p
                    className="text-[1.4rem] font-[600] 
                   max-sm:text-[1rem]"
                  >
                    {element.degree}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[1.3rem] text-[#EAEAEA]
                   max-sm:text-[0.9rem]"
                  >
                    {element.field}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[1.3rem] text-[#B0B0B0]
                   max-sm:text-[0.9rem]"
                  >
                    {element.location}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[1.2rem] text-[#B0B0B0]
                   max-sm:text-[0.9rem]"
                  >
                    {element.startYear} - {element.endYear}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Education;
