import react from 'react';
import Style from './Nav.module.css'

const NavBar = () => {
    return( <>
     <header className={Style.sticky_wrapper}>
      <div className={Style.nav_container}>
        <div className={Style.nav_container__logo}> 
          <h1>Paul</h1>
        </div>
        <nav className={Style.nav_container__links}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
          </ul>
        </nav>
        <div className={Style.nav_container__button}>
         <a href="#"> <button>Get in touch</button></a>
        </div>
      </div>
    </header>
    </>
    )
}
export default NavBar;
