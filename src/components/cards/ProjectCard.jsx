
import { AiOutlineExpand } from "react-icons/ai";
const Cards = () =>{

    return(
        <>
        <div>
            {/* Card Holder */}
            <section className="w-[550px] min-w-[550px] h-[650px] bg-amber-50 rounded-[15px] my-[30px]">
                {/* picture Holder */}
               <div className="relative flex items-center justify-center w-full h-[400px] overflow-hidden group cursor-pointer">

                    {/* Background Image Layer */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:blur-sm group-hover:scale-110 "
                        style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop)`
                        }}
                        />

                    {/* Content Layer */}
                    <div className="relative z-10 text-white text-center">
                        <span className="hidden  ml-[80px] group-hover:block"><AiOutlineExpand className="text-[4.5rem] font-extrabold" /></span>
                        <p className=" hidden text-[2rem] group-hover:block">View Live Code</p>
                    </div>
                    </div>

            </section>

        </div>
        
        </>
    )
}

export default Cards;