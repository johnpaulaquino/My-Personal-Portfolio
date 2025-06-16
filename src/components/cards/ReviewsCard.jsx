//   name: 'Emily Chen',
//       title: 'UX Designer',
//       company: 'PixelCraft Studio',
//       message:
//         'You’re not just a developer—you’re a collaborator. Thank you for making our UI vision come to life flawlessly.',
//       avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
const ReviewsCard = ({ data }) => {
  return (
    <div
      className="w-[520px] h-auto border-2 border-[#2E2E2E] rounded-[15px] mb-[60px]
     max-sm:mb-[15px]"
    >
      <section className="flex ">
        <div className="w-full bg-[#2e2e2e49] h-auto relative ">
          <div
            className="text-[10rem] rotate-[20deg] absolute top-[-40px] left-[-30px] text-[#f8b600f5]
           max-sm:text-[5rem]"
          >
            "
          </div>

          <div
            className="m-[75px] leading-10 
           max-sm:m-[30px] max-sm:leading-[40px]"
          >
            <div className="w-full flex">
              <h1
                className="text-[2rem] font-bold text-center
               max-sm:text-[1.3rem] "
              >
                {data.title}
              </h1>
            </div>

            <div
              className="my-[30px] overflow-auto h-[200px] scrollbar-custom 
             max-sm:h-[100px]"
            >
              <h2
                className="break-words
               max-sm:text-[0.9rem]
                 max-sm:mx-[20px]"
              >
                " {data.message} "
              </h2>
            </div>
            <div>
              <h1
                className="text-[#f8b600f5] font-[600]
               mb-[-15px] max-sm:text-[0.8rem]"
              >
                {data.name}
              </h1>
              <p
                className="text-[#B0B0B0]
              max-sm:text-[0.5rem]"
              >
                {data.company}
              </p>
            </div>
          </div>
          <div
            className="w-[110px] h-[110px] bg-cover bg-center border-[#0E0E0E] 
            border-8 rounded-full absolute right-[-20px] bottom-[-20px] 
             max-sm:h-[70px]  max-sm:w-[70px]"
            style={{ backgroundImage: `url('${data.avatar}')` }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsCard;
