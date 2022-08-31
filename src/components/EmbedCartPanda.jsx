import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import '../css/additional-styles/cart-pandas.css'
import Button from 'react-bootstrap/Button';
import CardList from './CardList';
import SecurityList from './SecurityList';


function EmbedCartPanda() {    

  return (
    <div id="cartpandaContainer" className="flex flex-col p-4 pt-7 justify-center bg-gray-100 m-5 mt-0 rounded-2xl drop-shadow-xl">
            <div class="cartx-buy-button" data-buy-button="35aeea57-3192-4638-bf28-68e8f37574bd" data-shop-url="https://pagamento.soulshoess.com.br/"></div>
        <Helmet>
            <script type="text/javascript" src="https://pagamento.soulshoess.com.br/js/buy-button.min.js"></script>

           
        </Helmet>  
        
        {/* <div className="relative h-0">
            <Button onClick={() => $("div.buy-button.mt-3").remove()} className="w-full bg-green-500 hover:bg-green-300 text-center text-white font-semibold rounded-2xl drop-shadow-lg animate-blow" variant="primary" size="xl">
                <div className='flex flex-col tracking-wider'>
                    <h2 className='text-2xl font-bold'>Teste</h2>
                    <p className='text-sm mt-2 font-extralight text-green-100'></p>
                </div>
            </Button>
        </div> */}

        <CardList />
        <SecurityList />

    </div>    
      
    );
}


export default EmbedCartPanda;