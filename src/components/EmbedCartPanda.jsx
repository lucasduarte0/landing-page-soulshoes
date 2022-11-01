import React from "react";
import { Helmet } from "react-helmet";
import "../css/additional-styles/cart-pandas.css";
import CardList from "./CardList";
import SecurityList from "./SecurityList";
import CoresNuvem from "../images/imagem-3.jpg";

function EmbedCartPanda() {
  return (
    <div className="md:mb-4">
      <div className="p-3 pt-5 md:my-6 h3 text-center text-white self-center md:p-0">
        Qual combina mais com você?
      </div>
      <div className="md:grid md:grid-cols-2 pt-0 h4 text-center self-center md:flex-row">
        <div
          id="cartpandaContainer"
          className="flex shrink w-fit flex-col justify-center bg-gray-100 m-5 mt-0 pb-2 md:m-0 rounded-2xl drop-shadow-xl md:basis-1/2"
        >
          <div className="p-3 pt-5 h4 text-center text-gray-700 self-center">
            FEMININO
          </div>
          <div
            className="p-4 cartx-buy-button"
            data-buy-button="082d6618-2aab-4a91-9c96-e181232477b2"
            data-shop-url="https://pagamento.pegadacomfort.com.br/"
          ></div>
          <Helmet>
            <script
              type="text/javascript"
              src="https://pagamento.pegadacomfort.com.br/js/buy-button.min.js"
            ></script>
          </Helmet>
          <CardList />
          <SecurityList />
        </div>
        <div
          id="cartpandaContainer"
          className="flex shrink w-fit flex-col justify-center bg-gray-100 m-5 mt-0 pb-2 md:m-0 rounded-2xl drop-shadow-xl md:basis-1/2"
        >
          <div className="p-3 pt-5 h4 text-center text-gray-700 self-center">
            MASCULINO
          </div>

          <div
            className="p-4 cartx-buy-button"
            data-buy-button="35845171-e7f7-4435-b511-9b51cc2bb115"
            data-shop-url="https://pagamento.pegadacomfort.com.br/"
          ></div>
          <Helmet>
            <script
              type="text/javascript"
              src="https://pagamento.pegadacomfort.com.br/js/buy-button.min.js"
            ></script>
          </Helmet>
          <CardList />
          <SecurityList />
        </div>
      </div>
    </div>
  );
}

export default EmbedCartPanda;
