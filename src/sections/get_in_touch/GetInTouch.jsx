const GetInTouch = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <section className="mx-[90px]">
        <div>
          <h1>Get In Touch</h1>
        </div>
        <div className="w-full h-auto">
          <form
            method="post"
            id="contact_form"
            className="w-full flex flex-wrap gap-[20px] flex-col"
          >
            <div className="w-full flex items-center justify-between">
              <div className="w-1/2 h-full ">
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Full Name"
                  className="w-[98.5%] rounded-[15px] p-[20px] bg-[#2e2e2e49]"
                />
              </div>
              <div className="w-1/2 flex items-end justify-end h-full ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-[98.5%] bg-[#2e2e2e49] p-[20px] rounded-[15px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full bg-[#2e2e2e49] p-[20px] rounded-[15px]"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="
                w-full h-[250px] bg-[#2e2e2e49] p-[20px] rounded-[15px]"
              ></textarea>
            </div>

            <div className="flex w-full h-[65px]">
              <button
                type="submit"
                className="bg-[#f8b600f5] text-[#0E0E0E] border-2 border-[#f8b600f5]
               w-[250px] rounded-[15px]  hover:bg-[#0E0E0E] hover:text-[#EAEAEA]
               transition-all duration-[0.7s] cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default GetInTouch;
