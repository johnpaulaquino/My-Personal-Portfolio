import Cards from "../../components/cards/ProjectCard"

const FeaturedProjects = () =>{
    return (
        <>
        <div className="mx-auto max-w-[1500px]">
            <section className=" mx-[90px] ">
                <h1 className="mt-[30px] text-[#F8B500] text-[1.5rem] font-[600]">Featured Projects</h1>
            
            <section className="flex w-full flex-wrap transition-all duration-[0.7s] justify-between">
                <div className="">
                    <Cards/>
                </div>

                <div className=""><Cards/></div>
                    
            </section>
            
            </section>
        </div>
        </>
    )
}
export default FeaturedProjects;