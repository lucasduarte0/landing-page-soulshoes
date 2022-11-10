import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import Button from "react-bootstrap/Button";
import NuvemBanner2 from "../images/nuvem-banner-2.png";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import ButtonComprar from "../components/ButtonComprar.jsx";
import Instagram from "../components/Instagram";
import InstagramComp from "../components/InstagramComp";

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className='relative -top-60 -mb-60 pb-20 md:px-36 bg-white'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='absolute inset-0 pointer-events-none mb-16'
        aria-hidden='true'
      ></div>

      <div className='py-4 relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='md:pt-0'>
          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore the solutions</h1>
            <p className="text-xl text-gray-600 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div> */}

          {/* Section content */}

        
          <div class='flex-grow border bg-gray-400 border-gray-400 my-6'></div>
      

          <div className='md:grid-cols-2 md:gap-6'>
            {/* Content */}
          

            <img className="" src="https://ik.imagekit.io/soulshoes/chinelos_rAjCjXLvz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668034701416" />

            <h4
              className={
                "text-2xl font-normal leading-snug text-center mb-3 text-gray-800 md:mt-8"
              }
            >
              O que você está esperando pra garantir o seu?
            </h4>

            <ButtonComprar
              titleColor='white'
              text='GARANTIR HOJE MESMO!'
              subText='SÓ HOJE POR APENAS R$127,90'
            ></ButtonComprar>
          </div>

          {/* Tabs items */}
          <div
            className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
            data-aos='zoom-y-out'
            ref={tabs}
          >
            <div className='relative flex flex-col text-center lg:text-right'>
              {/* Item 1 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
