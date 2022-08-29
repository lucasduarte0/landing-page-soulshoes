import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import '../css/additional-styles/cart-pandas.css'
import Button from 'react-bootstrap/Button';


function EmbedCartPanda() {    


  return (
    <div className="bg-gray-100 m-5 mt-0 p-3 rounded-2xl drop-shadow-xl">
                    <div className="cartx-buy-button" data-buy-button="35aeea57-3192-4638-bf28-68e8f37574bd" data-shop-url="https://soulshoes.mycartpanda.com/"></div>
                <Helmet>
                    <script type="text/javascript" src="src\utils\CartPandasScript.js"></script>
                    

                </Helmet>  
                <Button className="w-full bg-green-500 hover:bg-green-300 text-center text-white font-semibold rounded-2xl drop-shadow-lg animate-blow" variant="primary" size="xl">
                    <div className='flex flex-col tracking-wider'>
                    <h2 className='text-2xl font-bold'>Teste</h2>
                    <p className='text-sm mt-2 font-extralight text-green-100'></p>
                    </div>
                </Button>      
                <div id='test'> onload</div> 



    
            </div>
      
    );
}


export default EmbedCartPanda;