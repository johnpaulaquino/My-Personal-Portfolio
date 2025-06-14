import { useState } from 'react';
import ReviewsCard from '../../components/cards/ReviewsCard';
import DataNotFound from '../../components/data_not_found/DataNotFound';
import { Link as LinkRouter } from 'react-router-dom';
const Testimonials = () => {
  const [title] = useState('Testimonials');
  const [data] = useState([
    {
      name: 'Sarah Thompson',
      title: 'Project Manager',
      company: 'TechNova Solutions',
      message:
        'Working with you was an absolute pleasure. Your ability to solve complex problems and deliver on time truly impressed our entire team.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'James Parker',
      title: 'CTO',
      company: 'BrightEdge Inc.',
      message:
        'Your commitment and attention to detail elevated our product. I’d recommend you to anyone looking for a skilled and reliable developer.',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      name: 'Emily Chen',
      title: 'UX Designer',
      company: 'PixelCraft Studio',
      message:
        'You’re not just a developer—you’re a collaborator. Thank you for making our UI vision come to life flawlessly.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
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
      <section className="mx-[90px]">
        <h1 className="text-[#F8B500] text-[3rem] font-[600] my-[30px]">{title}</h1>
        <div className=" flex justify-center gap-[50px] flex-wrap">
          {data.map((element) => (
            <ReviewsCard data={element} />
          ))}
        </div>
        {dataMessage > 3 && (
          <div className="w-full h-fit flex flex-col items-center justify-center my-[30px]">
            <LinkRouter to={'testimonials/all'}>
              <button
                className="bg-[#f8b600f5] p-[20px] border-2 border-[#f8b600f5] 
            px-[50px] rounded-[5px] text-[#0E0E0E] font-bold cursor-pointer 
            hover:bg-[#0E0E0E] hover:text-[#EAEAEA] transition-all duration-[0.7s]"
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
      </section>
    );
  }
  return <DataNotFound title={title} message={'No Testimonials Found'} />;
};

export default Testimonials;
