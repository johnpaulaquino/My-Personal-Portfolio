import DataNotFound from '../../components/data_not_found/DataNotFound';
import Cards from '../../components/cards/ProjectCard';
import { useEffect, useState } from 'react';

const FeaturedProjects = () => {
  const [cardData] = useState([
    {
      id: 1,
      type: 'project',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop',
      title: 'TaskFlow - Project Management App',
      description:
        'A modern project management application built with React and Node.js featuring real-time collaboration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      status: 'Live',
      stars: 245,
      forks: 32,
      liveUrl: 'https://taskflow-app.com',
      githubUrl: 'https://github.com/user/taskflow',
      lastUpdated: '2024-06-01',
    },
    {
      id: 2,
      type: 'project',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      title: 'EcoTracker - Carbon Footprint Monitor',
      description:
        'Mobile app that helps users track and reduce their carbon footprint with AI-powered insights.',
      technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
      status: 'In Progress',
      stars: 128,
      forks: 15,
      liveUrl: null,
      githubUrl: 'https://github.com/user/ecotracker',
      lastUpdated: '2024-06-03',
    },
    {
      id: 3,
      type: 'project',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      title: 'CryptoVault - Portfolio Tracker',
      description:
        'Cryptocurrency portfolio management dashboard with real-time price tracking and analytics.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
      status: 'Live',
      stars: 89,
      forks: 21,
      liveUrl: 'https://cryptovault-demo.com',
      githubUrl: 'https://github.com/user/cryptovault',
      lastUpdated: '2024-05-28',
    },
    {
      id: 4,
      type: 'project',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      title: 'StudyBuddy - AI Learning Assistant',
      description:
        'AI-powered study companion that creates personalized learning paths and practice quizzes. ',
      technologies: ['Next.js', 'OpenAI API', 'Supabase', 'Tailwind'],
      status: 'Beta',
      stars: 312,
      forks: 45,
      liveUrl: 'https://studybuddy-beta.com',
      githubUrl: 'https://github.com/user/studybuddy',
      lastUpdated: '2024-06-05',
    },
  ]);
  const [title] = useState('Featured Projects');
  if (cardData.length === 0) {
    return <DataNotFound message={'No Projects Found'} title={title} />;
  }
  //Return data not found components if no data retrieved.
  return (
    <div className="mx-auto max-w-[1500px]">
      <section className=" mx-[90px] ">
        <h1 className="mt-[30px] text-[#F8B500] text-[1.5rem] font-[600]">{title}</h1>
        <section className="flex flex-wrap justify-center gap-[50px] w-full transition-all duration-700">
          {cardData.map((card, index) => (
            <Cards key={index} data={card} />
          ))}
          <div className="w-full h-fit flex flex-col items-center justify-center">
            <button
              className="bg-[#f8b600f5] p-[20px] border-2 border-[#f8b600f5] 
            px-[50px] rounded-[5px] text-[#0E0E0E] font-bold cursor-pointer 
            hover:bg-[#0E0E0E] hover:text-[#EAEAEA] transition-all duration-[0.7s]"
            >
              See All Works
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};
export default FeaturedProjects;
