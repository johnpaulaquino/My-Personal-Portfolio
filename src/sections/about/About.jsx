import { BiRightArrowAlt } from 'react-icons/bi';
import { Link as LinkRouter } from 'react-router-dom';
//   projects = [
//     {
//         "title": "Task Manager App",
//         "description": "A web-based task manager that allows users to add, edit, and delete tasks with deadlines.",
//         "tech_stack": ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
//         "live_demo": "https://taskmanager.example.com",
//         "source_code": "https://github.com/username/task-manager",
//         "image_url": "/images/task-manager.png",
//         "status": "Completed"
//     },
//     {
//         "title": "Food Price Predictor",
//         "description": "A machine learning model that predicts future prices of food items based on historical data.",
//         "tech_stack": ["Python", "Pandas", "Scikit-learn", "ARIMA"],
//         "live_demo": "",
//         "source_code": "https://github.com/username/food-price-predictor",
//         "image_url": "/images/food-price-predictor.png",
//         "status": "In Progress"
//     },
//     {
//         "title": "Library Management System",
//         "description": "A desktop application to manage library members, books, and borrowing records.",
//         "tech_stack": ["Java", "JavaFX", "SQLite"],
//         "live_demo": "",
//         "source_code": "https://github.com/username/library-system",
//         "image_url": "/images/library-system.png",
//         "status": "Completed"
//     },
//     {
//         "title": "Barangay Management Portal",
//         "description": "A web portal for managing residents, secretaries, and admin operations in a barangay.",
//         "tech_stack": ["PHP", "MySQL", "Bootstrap"],
//         "live_demo": "",
//         "source_code": "https://github.com/username/barangay-portal",
//         "image_url": "/images/barangay-portal.png",
//         "status": "Planned"
//     }
// ]

const About = () => {
  return (
    <div
      className="mx-[90px] my-[30px] 
    max-sm:mx-[30px]"
    >
      <h1
        className="text-[#F8B500] text-[3rem] font-[600]
      max-sm:text-[1.5rem]"
      >
        About Me
      </h1>

      <section
        className="grid grid-cols-4 md:grid-cols-1 gap-10 mt-[30px]
      max-sm:flex max-sm:flex-col"
      >
        <div
          className="col-span-3 col-start-1 
         max-sm:items-start "
        >
          <h1
            className="text-justify text-[1.5rem] font-[600]
                         first-letter:text-9xl first-letter:float-left 
                         max-sm:first-letter:text-6xl  max-sm:text-[0.9rem]"
          >
            <span className="text-[#f8b600f5]">H</span>
            <span className="text-[#B0B0B0]">
              ello , I'm John Paul C. Aquino. I'm currently 3rd year student at Laguna University,
              who are taking Bachelor Of Science in Computer Science With Specialization in Data
              Science, a passionate developer with an experience in building Desktop Application,
              Web Application, API's and Machine Learning.
            </span>
          </h1>
        </div>
        <section
          className=" flex flex-col items-center justify-end col-span-1 col-start-4 
        max-sm:items-start max-sm:mt-[-30px]"
        >
          <LinkRouter to={'/about/read-more'}>
            <button
              className="group flex justify-evenly items-center w-[220px] bg-[#2E2E2E] h-[50px] border-[#2E2E2E] border-2  transition-all duration-[0.7s]
                        hover:bg-[#0E0E0E] cursor-pointer rounded-[5px]
                        max-sm:w-[120px] max-sm:h-[45px] max-sm:text-[0.8rem]"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            >
              {''}
              Read More
              <span className="">
                <BiRightArrowAlt
                  className="text-[30px] transition-all duration-[0.7s] group-hover:text-[#f8b600f5]
                max-sm:text-[1rem]"
                />
              </span>
            </button>
          </LinkRouter>
        </section>
      </section>
    </div>
  );
};

export default About;
