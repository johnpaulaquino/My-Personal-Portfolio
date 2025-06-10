import { Link } from "lucide-react";
import { RiGitForkFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";


import { TbExternalLink } from "react-icons/tb";

const Cards = ({data}) =>{
    return(
      <>
       <div>
          {data.map( (element) =>(
              <section key={element.id} className="flex flex-col w-[550px] min-w-[550px] h-fit bg-[#2e2e2e49] rounded-[15px] my-[30px] border-2 border-[#2E2E2E]">
                
                 <div className="relative flex items-center justify-center w-full h-[350px] overflow-hidden group cursor-pointer">
                       
                         <div className="absolute inset-0 bg-cover bg-center transition
                            duration-700 group-hover:blur-sm group-hover:scale-110 "
                            style={{
                            backgroundImage: `url(${element.image})`
                            }}/>
                        
  
                          <div className="relative z-10 flex flex-col h-[550px] items-center justify-center">
                            
                                <span className="hidden  group-hover:block"><TbExternalLink className="text-[4rem]" /></span>
                         
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
                            <span><RiStarSLine className="text-[1.3rem] text-[#B0B0B0]
                            " /></span>
                            <p className="text-[0.9rem] ">{element.stars}</p>
                        </div>
                        <div className="flex w-full items-end justify-end bg" >
                          <p className="font-[600]">{element.status}</p>
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
                            <h3 className="text-[24px] overflow-hidden break-words">{element.description}</h3>
                          </div> 
                        <div className="flex w-full justify-between h-full">
                          <div className="m-[30px] flex justify-between items-center  w-full h-full">
                              <p className="#B0B0B0">Last Updated: <span className="font-[600]">{element.lastUpdated}</span></p>
                             
                              <button className="flex items-center justify-between p-[20px] w-[150px] h-[50px] cursor-pointer
                              transition-all duration-[0.7s] rounded-[5px] bg-[#2e2e2e49]  border-2 border-[#2E2E2E] ">
                                  <span><FaGithub className="1.5rem"/></span>
                                  <p>Github</p>
                              </button>
                             
                             </div>
                        </div>

            </section>
          ))}
        </div>
    
      </>
       
    );
}

export default Cards;