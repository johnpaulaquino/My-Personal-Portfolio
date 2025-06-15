import { useState } from 'react';
import Testimonials from '../Testimonials';
import DataNotFound from '../../../components/data_not_found/DataNotFound';
import { Link as LinkRouter } from 'react-router-dom';
import ReviewsCard from '../../../components/cards/ReviewsCard';
import Pagination from '../../../components/pagination/Pagination';
const AllTestimonials = () => {
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
      <div className="mx-[90px]">
        <h1 className="text-[#F8B500] text-[3rem] font-[600] my-[30px]">{title}</h1>
        <div className=" flex justify-center gap-[50px] flex-wrap">
          {data.map((element) => (
            <ReviewsCard data={element} />
          ))}
          <Pagination />
        </div>
      </div>
    );
  }
  return <DataNotFound title={title} message={'No Testimonials Found'} />;
};

export default AllTestimonials;
