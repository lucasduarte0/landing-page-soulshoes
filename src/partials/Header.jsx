<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonComprar from '../components/ButtonComprar';
import ButtonFixed from '../components/ButtonFixed';
=======
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import WppButton from "../components/ButtonFixed";
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
<<<<<<< HEAD
      window.pageYOffset > 800 ? setTop(true) : setTop(false)
=======
      window.pageYOffset > 800 ? setTop(true) : setTop(false);
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
<<<<<<< HEAD
    <header className="relative">
      
      
      <div>
      <ButtonFixed className={`fixed w-full inset-x-0 bottom-0 z-50 drop-shadow-2xl md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'hidden'}`} 
        text="COMPRAR AGORA"
        subText="POUCAS UNIDADES DISPONIVEIS" />        

=======
    <header className="relative z-50">
      <div>
        {/* <ButtonFixed className={`fixed w-full inset-x-0 bottom-0 z-50 drop-shadow-2xl md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'hidden'}`} 
        text="COMPRAR AGORA"
        subText="POUCAS UNIDADES DISPONIVEIS" /> */}

        {/* <ButtonFixed
          className={`fixed inset-x-0 bottom-0 z-50 drop-shadow-2xl md:bg-opacity-90 transition duration-300 ease-in-out ${!top && "hidden"}`}
        /> */}
        {/* <WppButton /> */}
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
      </div>
    </header>
  );
}

export default Header;
