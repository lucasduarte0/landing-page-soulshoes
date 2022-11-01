import React from "react";
import { Link } from "react-router-dom";
import FormContact from "../components/FormContact";
import Logo from "./../images/logo-branca.png";

function Footer() {
  return (
    <footer className="z-50 bg-[#da5aaf]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link
                to="/"
                className="flex md:w-36 w-48 m-auto"
                aria-label="Cruip"
              >
                <img className="m-auto self-center" src={Logo}></img>
              </Link>
            </div>
            <div className="text-sm text-white"></div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Menu</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/quem-somos"
                  className="text-white hover:text-white transition duration-150 ease-in-out"
                >
                  Quem Somos
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/politica-frete"
                  className="text-white hover:text-white hover:underline transition duration-150 ease-in-out"
                >
                  Política de Frete
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/termos"
                  className="text-white hover:text-white hover:underline transition duration-150 ease-in-out"
                >
                  Termos e Condições
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="https://pegadacomfort.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-white hover:underline transition duration-150 ease-in-out"
                >
                  Loja Official
                </a>
              </li>
            </ul>
            <FormContact />
          </div>
        </div>



        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link
                to="#"
                className="p-2 flex justify-center items-center text-white hover:text-white bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-[#da5aaf]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#da5aaf"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                >
                  {" "}
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z" />
                </svg>
              </Link>
            </li>

            <li className="ml-4">
              <Link
                to="#"
                className="p-2 flex justify-center items-center text-white hover:text-white bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-[#da5aaf]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#da5aaf"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                >
                  {" "}
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="#"
                className="p-2 flex justify-center items-center text-white hover:text-white bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Instagram"
              >
                <svg
                  className="w-8 h-8 fill-[#da5aaf]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#da5aaf"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-xs text-white mr-4">
            Soulshoes Comércio de Calçados e Acessórios LTDA
          </div>
          <div className="text-xs text-white mr-4">
            Rua Itatiaia 303, Nova Serrana-MG, 35520-378
          </div>
          <div className="text-xs text-white mr-4">
            CNPJ 43.336.887/0001-04
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
