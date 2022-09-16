import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import '../css/additional-styles/cart-pandas.css'
import Button from 'react-bootstrap/Button';
import CardList from './CardList';
import SecurityList from './SecurityList';
import CoresNuvem from "../images/imagem-3.jpg"


function EmbedCartPanda() {    

    return (<>
        <div className='p-3 pt-5 h3 text-center text-white self-center md:p-0'>Qual combina mais com você?</div>
        <div className='flex p-3 pt-0 h4 text-center self-center md:flex-row md:min-w-12 '>

            <div id="cartpandaContainer" className="flex flex-col justify-center bg-gray-100 m-5 mt-0 pb-2 md:m-0 rounded-2xl drop-shadow-xl md:w-fit md:basis-1/2">
                    <div className="cartx-buy-button mx-4" data-buy-button="35aeea57-3192-4638-bf28-68e8f37574bd" data-shop-url="https://soulshoes.mycartpanda.com/"></div>
                <Helmet>
                    <script id="cartpanda" type="text/javascript" src="https://soulshoes.mycartpanda.com/js/buy-button.min.js"></script>           
                </Helmet>          
                <CardList />
                <SecurityList />
            </div>
            <img className="flex md:basis-1/2 bg-fill hidden md:flex w-1/2" src={CoresNuvem} alt="Banner Gigante" />
        </div>
        </>  
        );
    }


export default EmbedCartPanda;