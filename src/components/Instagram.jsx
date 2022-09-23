import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../css/additional-styles/cart-pandas.css";
import Button from "react-bootstrap/Button";
import CardList from "./CardList";
import SecurityList from "./SecurityList";
import CoresNuvem from "../images/imagem-3.jpg";

function Instagram() {
  return (
    <>
      <div className="p-3 pt-5 h3 text-center text-white self-center md:p-0">
        <div data-mc-src="10de7e6d-1c62-440a-a31c-cc443a385acf#instagram"></div>
        <Helmet>
          <script
            src="https://cdn2.woxo.tech/a.js#632d014f8e8372e2e41f6a0b"
            async
            data-usrc
          ></script>
        </Helmet>
      </div>
    </>
  );
}

export default Instagram;
