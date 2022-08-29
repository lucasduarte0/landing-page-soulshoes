import React from 'react';
import {Helmet} from "react-helmet";
import '../css/additional-styles/cart-pandas.css'

function EmbedCartPanda() {

  return (
    <div className="bg-gray-100 m-5 mt-0 p-3 rounded-2xl drop-shadow-xl">
                    <div className="cartx-buy-button" data-buy-button="35aeea57-3192-4638-bf28-68e8f37574bd" data-shop-url="https://soulshoes.mycartpanda.com/"></div>
                <Helmet>
                    <script type="text/javascript" src="src\utils\CartPandasScript.js"></script>
                </Helmet>   
                <style>

                </style>             
            </div>
      
    );
}


export default EmbedCartPanda;