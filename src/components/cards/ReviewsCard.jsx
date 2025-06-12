//   name: 'Emily Chen',
//       title: 'UX Designer',
//       company: 'PixelCraft Studio',
//       message:
//         'You’re not just a developer—you’re a collaborator. Thank you for making our UI vision come to life flawlessly.',
//       avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
const ReviewsCard = ({ data }) => {
  return (
    <div className="w-[520px] h-auto border-2 border-[#2E2E2E] rounded-[15px] mb-[60px]">
      <section className="flex ">
        <div className="w-full bg-[#2e2e2e49] h-auto relative ">
          <div className="text-[10rem] rotate-[20deg] absolute top-[-80px] left-[-60px] text-[#f8b600f5]">
            "
          </div>

          <div className="m-[50px] leading-10">
            <div className="w-full flex items-center justify-center">
              <h1 className="text-[2rem] font-bold">{data.title}</h1>
            </div>

            <div className="my-[30px] overflow-auto h-[200px] scrollbar-custom p-4">
              <h2 className="break-words">" {data.message} "</h2>
            </div>
            <div>
              <h1 className="text-[#f8b600f5] font-[600] mb-[-15px]">{data.name}</h1>
              <p className="text-[#B0B0B0]">{data.company}</p>
            </div>
          </div>
          <div
            className="w-[110px] h-[110px] bg-cover bg-center border-[#0E0E0E] border-8 rounded-full absolute right-[-40px] bottom-[-45px] "
            style={{ backgroundImage: `url('${data.avatar}')` }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsCard;
