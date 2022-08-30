import React, { useEffect } from 'react';
import '../css/additional-styles/cart-pandas.css'
import Pix from '../images/pix.svg';



function CardList() {   

  return (
    <div className='w-3/4 self-center '>
        <div id="credit-cards" className="flex space-x-1 justify-center max-w-1 pb-3 drop-shadow-xl">
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/amex.svg" />
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/boleto.svg" />
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/mastercard.svg" />
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/visa.svg" />
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/elo.svg" />
            <img className="h-6 bg-white rounded p-1.5" src={Pix} />
        </div>
    </div>
        
    );
}


export default CardList;