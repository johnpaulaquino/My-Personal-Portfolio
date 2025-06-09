import { BiRightArrowAlt } from "react-icons/bi";
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



const About = () =>{
  
    return (
        <div  className=" max-w-[1500px] mx-auto " >
            <section className="mx-[90px] my-[50px]">
                <h1 className='text-[#F8B500] text-[1.5rem] font-[600]'>About Me</h1>

                <section className="grid grid-cols-4 md:grid-cols-1 gap-10 mt-[25px]">
                    <div className="col-span-3 col-start-1">
                        <h1 className="text-justify text-[1.5rem] font-[600]
                         first-letter:text-9xl first-letter:float-left">
                            Hello, I'm John Paul C. Aquino. I'm currently 3rd year   
                            student at Laguna University, who are taking 
                            Bachelor Of Science in Computer With Specialization in Data Science,
                            a passionate developer with an experience in building 
                            Desktop Application, Web Application, API's and Machine Learning. 
                        </h1>
                    </div>

                    <section className=" flex flex-col items-center justify-end col-span-1 col-start-4 ">
                        <button className="group flex justify-evenly items-center w-[220px] bg-[#2E2E2E] h-[50px] border-[#2E2E2E] border-2  transition-all duration-[0.7s]
                        hover:bg-[#0E0E0E] cursor-pointer rounded-[5px]"> Read More 
                        <span className=""><BiRightArrowAlt className="text-[30px] transition-all duration-[0.7s] group-hover:text-[#f8b600f5]"/></span></button>
                    </section>
                </section>
            </section>
           
        </div>
    )
};

export default About;