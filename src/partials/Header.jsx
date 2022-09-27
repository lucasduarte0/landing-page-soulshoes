import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonComprar from "../components/ButtonComprar";
import ButtonFixed from "../components/ButtonFixed";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 800 ? setTop(true) : setTop(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="relative">
      <div>
        {/* <ButtonFixed className={`fixed w-full inset-x-0 bottom-0 z-50 drop-shadow-2xl md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'hidden'}`} 
        text="COMPRAR AGORA"
        subText="POUCAS UNIDADES DISPONIVEIS" /> */}

        <ButtonFixed
          className={`fixed inset-x-0 bottom-0 z-50 drop-shadow-2xl md:bg-opacity-90 transition duration-300 ease-in-out ${!top && "hidden"}`}
        />
      </div>
    </header>
  );
}

export default Header;
