import React from "react";
import ButtonComprar from "../components/ButtonComprar";

import Block5 from "../images/chinelo-praia.jpg";
import Block6 from "../images/chinelo-quadricicolo.jpg";
import Block7 from "../images/chinelo-limpo.gif";
import Block8 from "../images/chinelo-macio.gif";
import Svg from "../images/like-good.svg";
import Logo from "../images/logo.png";
import Transicao from "../images/nuvem-transicao.png";
import { tituloProduto } from "../utils/Variables";

function FeaturesBlocks() {
  return (
    <section className="relative md:px-20 md:pb-12 bg-[#da59af]">
      <img
        className="md:hidden relative -top-20 -mb-10 bg-fill w-full mx-full md:px-36"
        src={Transicao}
        width="768"
        height="432"
        alt="Hero"
      />

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-5 py-0 md:py-20">
          {/* Items */}

          <div className="max-w-xs mx-auto grid gap-6 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}

            <div className="overflow-hidden flex flex-col items-center text-lg rounded-3xl shadow-xl transition duration-300 ease-in-out mb-3 bg-white bg-white">
              <img
                className="bg-fill w-full mx-full aspect-square"
                src={Block7}
                width="768"
                height="432"
                alt="Banner Gigante"
              />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5 aspect-[5/1]">
                Facíl Limpeza
              </h4>
            </div>

            <div className="overflow-hidden flex flex-col items-center text-lg rounded-3xl shadow-xl transition duration-300 ease-in-out mb-3 bg-white">
              <img
                className="bg-fill w-full mx-full aspect-square"
                src={Block5}
                width="768"
                height="432"
                alt="Banner Gigante"
              />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5 aspect-[5/1]">
                A Qualquer Hora
              </h4>
            </div>

            <div className="overflow-hidden w-full flex flex-col lg:max-h-max items-center text-lg rounded-3xl shadow-xl transition duration-300 ease-in-out mb-3 bg-white">
              <img
                className="bg-fill w-full mx-full aspect-square object-cover"
                src={Block8}
                alt="Banner Gigante"
              />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5 aspect-[5/1]">
                Super Macio
              </h4>
            </div>

            <div className="overflow-hidden w-full flex flex-col lg:max-h-max items-center text-lg rounded-3xl shadow-xl transition duration-300 ease-in-out mb-3 bg-white">
              <img
                className="bg-fill w-full mx-full aspect-square"
                src={Block6}
                width="768"
                height="432"
                alt="Banner Gigante"
              />
              <h4 className="text-2xl font-bold tracking-tight text-center mx-3 my-5 aspect-[5/1]">
                Em Qualquer Lugar
              </h4>
            </div>
          </div>
        </div>

        {/* Section header */}
        <div className="flex flex-col max-w-3xl text-white mx-auto text-center md:pb-0">
          <div className="flex flex-row self-center items-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-1">
              Afinal, é como pisar em nuvens mesmo?
            </h2>
            <img
              className="w-20 mx-3"
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Twemoji2_1f914.svg"
            />
          </div>
          <div className="flex flex-row bg-white w-full self-center gap-4 p-3 my-6 rounded-xl p-5 justify-center outline outline-offset-2 outline-1">
            <h1 className="text-3xl text-gray-800 font-extrabold font-carter">
              COM CERTEZA!
            </h1>
            <img className="h-10" src={Svg} />
          </div>

          <div className=" ">
            <h2 className="tracking-normal text-xl">
              Sabe aquela sensação de dores nos pés que sempre te incomoda no
              fim do dia?
            </h2>
            <h3 className="h4 my-5 text-xl font-normal tracking-normal">
              Com o{" "}
              <a class="font-extrabold underline underline-offset-4 decoration-sky-500 decoration-3 decoration-dashed">
                {tituloProduto}
              </a>{" "}
              você não vai precisar mais e preocupar com ela.
            </h3>
            <div className="text-white bg-[#64abe5] bg-opacity-90 p-5 drop-shadow-2xl rounded-3xl mb-5 font-2xl">
              <p className="indent-6 text-justify mb-2 text-base leading-7">
                O conforto é a principal característica do{" "}
                <a class="font-extrabold underline underline-offset-4 decoration-sky-500  decoration-3 decoration-dashed">
                  {tituloProduto}
                </a>
                , ser lindo e estiloso é só mais uma qualidade do nosso
                queridinho rsrs.
              </p>
              <p className="indent-6 text-justify mb-2 text-base leading-7">
                O E.V.A utilizado em nossos produtos está revolucionando o
                mercado de calçados com sua leveza, conforto, qualidade e
                facilidade de limpeza.
              </p>
              <p className="indent-6 text-justify text-base leading-7">
                Além de se adaptar ao formato do seu pé, o chinelo{" "}
                <a class="font-extrabold underline underline-offset-4 decoration-sky-500  decoration-3 decoration-dashed">
                  {tituloProduto}
                </a>{" "}
                tem a sola antiderrapante, trazendo total segurança em pisos
                escorregadios.{" "}
              </p>
              <img className="w-36 m-auto mt-5" src={Logo}></img>
            </div>
          </div>

          <h4 className="uppercase text-2xl text-white font-bold leading-snug tracking-tight text-center mb-5">
            Não perca essa chance!
          </h4>

          <ButtonComprar
            className="md:mt-10"
            titleColor="gray-700"
            text="COMPRAR AGORA COM FRETE GRATIS!"
            subText="APROVEITE POR APENAS R$127,90"
          ></ButtonComprar>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
