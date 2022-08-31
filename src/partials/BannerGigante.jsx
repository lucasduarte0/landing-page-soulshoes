import React from 'react';
import EmbedCartPanda from '../components/EmbedCartPanda';
import Testi from '../components/Testi';
import BannerGigante1 from '../images/banner-grande-1.png';
import BannerGigante2 from '../images/banner-grande-2.png';

function BannerGigante() {
  return (

    <section className={"relative md-px-28 bg-[#64ACE6]"}>
      <div className='flex flex-col box-border border-0 gap-0'>
        <img className="bg-fill md:hidden w-full mx-full" src={BannerGigante1} alt="Banner Gigante" />
        {/* <div>Teste</div> */}
        <div className='p-3 -mb-10 -mt-28'>
          <EmbedCartPanda />
        </div>
        <img className="bg-fill md:hidden w-full mx-full" src={BannerGigante2} alt="Banner Gigante" />
      </div>  


    </section>
  );
}

export default BannerGigante;