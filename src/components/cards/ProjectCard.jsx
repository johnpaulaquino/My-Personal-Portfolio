
import { useEffect,useState } from "react";
import { AiOutlineExpand } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";

  

const Cards = () =>{
      const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const sampleCards = [
      {
        id: 1,
        type: 'project',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop',
        title: 'TaskFlow - Project Management App',
        description: 'A modern project management application built with React and Node.js featuring real-time collaboration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        status: 'Live',
        stars: 245,
        forks: 32,
        liveUrl: 'https://taskflow-app.com',
        githubUrl: 'https://github.com/user/taskflow',
        lastUpdated: '2024-06-01'
      },
      {
        id: 2,
        type: 'project',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
        title: 'EcoTracker - Carbon Footprint Monitor',
        description: 'Mobile app that helps users track and reduce their carbon footprint with AI-powered insights.',
        technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
        status: 'In Progress',
        stars: 128,
        forks: 15,
        liveUrl: null,
        githubUrl: 'https://github.com/user/ecotracker',
        lastUpdated: '2024-06-03'
      },
      {
        id: 3,
        type: 'project',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
        title: 'CryptoVault - Portfolio Tracker',
        description: 'Cryptocurrency portfolio management dashboard with real-time price tracking and analytics.',
        technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
        status: 'Live',
        stars: 89,
        forks: 21,
        liveUrl: 'https://cryptovault-demo.com',
        githubUrl: 'https://github.com/user/cryptovault',
        lastUpdated: '2024-05-28'
      },
      {
        id: 4,
        type: 'project',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
        title: 'StudyBuddy - AI Learning Assistant',
        description: 'AI-powered study companion that creates personalized learning paths and practice quizzes.',
        technologies: ['Next.js', 'OpenAI API', 'Supabase', 'Tailwind'],
        status: 'Beta',
        stars: 312,
        forks: 45,
        liveUrl: 'https://studybuddy-beta.com',
        githubUrl: 'https://github.com/user/studybuddy',
        lastUpdated: '2024-06-05'
      }
    ];

    setCardData(sampleCards); // ✅ update state so React re-renders
  }, []);

    return(

          
        <div>
       
            <section className="flex flex-col w-[550px] min-w-[550px] h-[750px] bg-[#2e2e2e49] rounded-[15px] my-[30px] border-2 border-[#2E2E2E]">
      
               <div className="relative flex items-center justify-center w-full h-[250px] overflow-hidden group cursor-pointer">

            
                    <div
                        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:blur-sm group-hover:scale-110 "
                        style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop)`
                        }}
                        />

       
                    <div className="relative z-10 text-center">
                        <span className="hidden  ml-[80px] group-hover:block"><AiOutlineExpand className="text-[4.5rem] font-extrabold" /></span>
                        <p className=" hidden text-[2rem] group-hover:block">View Live Code</p>
                    </div>
                    </div>
              
                          <div className=" m-[30px]">
                            <div className="flex h-auto flex-wrap"> 
                            <div className="flex mr-2.5  items-center justify-center p-1.5 w-auto h-fit rounded-[5px] bg-[#2e2e2e49]
                            border-2 border-[#2E2E2E] ">
                                <SiTailwindcss className="text-[1.3rem] mr-1.5 text-[#2596be]"/>
                                <span>TailwindCss</span>
                            </div>        
                        </div>
                         <h1 className="my-[10px] text-[32px] font-bold">StudyBuddy - AI Learning Assistant</h1>
                        <h3 className="text-[24px]">AI-powered study companion that creates personalized learning paths and practice quizzes.</h3>
                        </div> 
            </section>
        </div>
    
    );
}

export default Cards;