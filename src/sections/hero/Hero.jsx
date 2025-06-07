import Style from './Hero.module.css'
const Hero = () =>{

    return (
        <>
        <div className={Style.hero}>

            <section className={Style.hero__content_container}>

               <section className= {Style.hero__left_container__content}>

                    <div className={Style.hero__left__content}>
                        <div className={Style.hero__left__content_active}>
                             <div className={Style.hero__left__content_active_dot}></div>
                              <p>Available for Work</p>
                         </div>
                           <section className={Style.hero__left__content_1}>
                         <h1>I'm John Paul Aquino<span className={Style.hero__left__content_1_span}>.</span></h1>
                         <h1>I Code <span className={Style.hero__left__content_1_span}>*</span> Create</h1>
                         <h1><span className={Style.hero__left__content_1_span}>*</span> Innovate.</h1>
                         <br/>
                         <div className={Style.hero__left__content_1_subtext}> 
                             <p>Building real-world solutions with a focus on AI, 
                                 software design, and growth.</p>
                         </div>
                         <div className={Style.hero__left__content_1_buttons}>
                             <button className={Style.hero__left__content_1_buttons_button1}>
                                 Download CV
                             </button>
                             <button className={Style.hero__left__content_1_buttons_button2}>
                                 Browse Projects
                            </button>
                         </div>
                    </section>
                    </div>
                </section>

                {/* Left content */}
                   
              
            </section>
             <section className={Style.hero__left_image}>
                <div className={Style.hero__left_image_conatiner}>
                    <img src="/src/assets/2x2 Picure.jpg" alt="profil pic"/>
                </div>
            </section>
        </div>
        
        </>
    )
};

export default Hero;