import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import '../css/additional-styles/cart-pandas.css'
import Button from 'react-bootstrap/Button';
import CardList from './CardList';
import SecurityList from './SecurityList';


function EmbedCartPanda() {    

  return (
    <div id="cartpandaContainer" className="flex flex-col justify-center bg-gray-100 m-5 mt-0 pb-2 rounded-2xl drop-shadow-xl">
        <div className='p-3 pt-5 h3 text-center self-center'>Chinelo Nuvem Soul Ortopédico</div>
            <div className="cartx-buy-button mx-4" data-buy-button="35aeea57-3192-4638-bf28-68e8f37574bd" data-shop-url="https://soulshoes.mycartpanda.com/"></div>
        <Helmet>
            <script id="cartpanda" type="text/javascript" src="https://soulshoes.mycartpanda.com/js/buy-button.min.js"></script>
           
        </Helmet>          
        <CardList />
        <SecurityList />

    </div>    
      
    );
}


export default EmbedCartPanda;