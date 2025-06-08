
const About = () =>{


    return (
        <div  className=" max-w-[1500px] mx-auto " >
            <section className="mx-[90px] my-[30px]">
                <h1 className='text-[#F8B500]'>About Me</h1>

                <section className="grid grid-cols-4 grid-flow-col gap-5 auto-cols-auto">
                    <div className="col-span-2 col-start-1">
                        <h1>
                            Hello, I'am John Paul C. Aquino. I'm currently 3rd year 
                            student at Laguna University, who are taking 
                            Bachelor Of Science in Computer With Specialization in Data Science,
                            a passionate developer with some experience in building Desktop application
                            and Web Development. The path that I love most, are building API's using Python,
                            with a framework of FAST API and building AI that will helps others to lessen their works.
                        </h1>
                    </div>

                    <section className="bg-amber-50  col-span-2 col-start-3">
                        <button> Hire me</button>
                        <button> Read More</button>
                    </section>

                </section>
            </section>
           

        </div>
    )
};

export default About;