import { Link } from "lucide-react";
import { RiGitForkFill } from "react-icons/ri";


import { TbExternalLink } from "react-icons/tb";

const Cards = ({data}) =>{
    return(
      <>
       <div>
          {data.map( (element) =>(
              <section key={element.id} className="flex flex-col w-[550px] min-w-[550px] h-[750px] bg-[#2e2e2e49] rounded-[15px] my-[30px] border-2 border-[#2E2E2E]">
                
                 <div className="relative flex items-center justify-center w-full h-[250px] overflow-hidden group cursor-pointer">
                       
                         <div className="absolute inset-0 bg-cover bg-center transition
                            duration-700 group-hover:blur-sm group-hover:scale-110 "
                            style={{
                            backgroundImage: `url(${element.image})`
                            }}/>
                        
  
                          <div className="relative z-10 text-center">
                            
                                <span className="hidden  ml-[80px] group-hover:block"><TbExternalLink className="text-[4rem]" /></span>
                         
                            <p className=" hidden text-[2rem] font-bold group-hover:block">View Live Code</p>
                          </div>
                      </div>
             
                      <div  className="flex w-auto m-[30px]">
                        <div className="flex items-end mr-[50px] justify-center h-auto w-fit ">
                            <span><RiGitForkFill className="text-[1.3rem] text-[#B0B0B0]
                            " /></span>
                            <p className="text-[0.9rem]">{element.forks}</p>
                        </div>
                         <div className="flex items-end justify-center h-auto w-fit ">
                            <span><RiGitForkFill className="text-[1.3rem] text-[#B0B0B0]
                            " /></span>
                            <p className="text-[0.9rem] ">{element.forks}</p>
                        </div>
                      </div>
                      <div className="mx-[30px]">
                          <div className="flex h-auto flex-wrap"> 
                              {element.technologies.map((tech, index) => (
                                <div key={index} className="flex mr-2.5 items-center justify-center p-1.5 w-auto h-fit rounded-[5px] bg-[#2e2e2e49]
                              border-2 border-[#2E2E2E] ">
                                    <span>{tech}</span>
                              </div>     
                              ))}   
                              </div>
                            <h1 className="my-[10px] text-[32px] font-bold">{element.title}</h1>
                            <h3 className="text-[24px]">{element.description}</h3>

                          </div> 

            </section>
          ))}
        </div>
    
      </>
       
    );
}

export default Cards;