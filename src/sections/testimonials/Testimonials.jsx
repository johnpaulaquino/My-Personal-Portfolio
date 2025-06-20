import { useState } from 'react';
import ReviewsCard from '../../components/cards/ReviewsCard';
import DataNotFound from '../../components/data_not_found/DataNotFound';
import { Link as LinkRouter } from 'react-router-dom';
const Testimonials = () => {
  const [title] = useState('Testimonials');
  const [data] = useState([
    {
      id: 1,
      name: 'Sarah Thompson',
      title: 'Project Manager',
      company: 'TechNova Solutions',
      message:
        'Working with you was an absolute pleasure. Your ability to solve complex problems and deliver on time truly impressed our entire team.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      name: 'James Parker',
      title: 'CTO',
      company: 'BrightEdge Inc.',
      message:
        'Your commitment and attention to detail elevated our product. I’d recommend you to anyone looking for a skilled and reliable developer.',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      id: 3,
      name: 'Emily Chen',
      title: 'UX Designer',
      company: 'PixelCraft Studio',
      message:
        'You’re not just a developer—you’re a collaborator. Thank you for making our UI vision come to life flawlessly.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 4,
      name: 'Michael Rivera',
      title: 'Founder & CEO',
      company: 'GrowWithMike',
      message:
        'Professional, dedicated, and full of ideas. You played a big role in the success of our launch!',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
  ]);

  const dataMessage = data.length;

  if (dataMessage > 1) {
    return (
      <div className="mx-[90px] max-sm:mx-[30px]">
        <h1
          className="text-[#F8B500] text-[3rem] font-[600] my-[30px]
        max-sm:text-[1.5rem]"
        >
          {title}
        </h1>
        <div
          className=" flex justify-center gap-[50px] flex-wrap
        max-sm:justify-center"
        >
          {data.map((element) => (
            <ReviewsCard key={element.id} data={element} />
          ))}
        </div>
        {dataMessage > 3 && (
          <div className="w-full h-fit flex flex-col items-center justify-center my-[30px]">
            <LinkRouter to={'testimonials/all'}>
              <button
                className="bg-[#f8b600f5] w-[145px] border-2 border-[#f8b600f5] 
      py-[5px] rounded-[5px] text-[#0E0E0E] font-bold cursor-pointer 
            hover:bg-[#0E0E0E] hover:text-[#EAEAEA] transition-all duration-[0.7s]
            max-sm:text-[0.9rem]"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                View All
              </button>
            </LinkRouter>
          </div>
        )}
      </div>
    );
  }
  return <DataNotFound title={title} message={'No Testimonials Found'} />;
};

export default Testimonials;
