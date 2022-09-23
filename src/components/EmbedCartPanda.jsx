import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../css/additional-styles/cart-pandas.css";
import Button from "react-bootstrap/Button";
import CardList from "./CardList";
import SecurityList from "./SecurityList";
import CoresNuvem from "../images/imagem-3.jpg";

function EmbedCartPanda() {
  return (
    <>
      <div className="p-3 pt-5 h3 text-center text-white self-center md:p-0">
        Qual combina mais com você?
      </div>
      <div className="flex  pt-0 h4 text-center self-center md:flex-row">
        <div
          id="cartpandaContainer"
          className="flex shrink w-fit flex-col justify-center bg-gray-100 m-5 mt-0 pb-2 md:m-0 rounded-2xl drop-shadow-xl md:basis-1/2"
        >
          <div
            class="cartx-buy-button"
            data-buy-button="35aeea57-3192-4638-bf28-68e8f37574bd"
            data-shop-url="https://loja.pegadacomfort.com.br/"
          ></div>
          <Helmet>
            <script
              type="text/javascript"
              src="https://loja.pegadacomfort.com.br/js/buy-button.min.js"
            ></script>
          </Helmet>
          <CardList />
          <SecurityList />
        </div>
        <img
          className="flex w-1/2 md:basis-1/2 bg-fill hidden md:flex px-4 object-contain"
          src={CoresNuvem}
          alt="Banner Gigante"
        />
      </div>
    </>
  );
}

export default EmbedCartPanda;
