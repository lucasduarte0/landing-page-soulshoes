import React from "react";
import ButtonComprar from "../components/ButtonComprar";
import ChTorcendo from "../images/banner-bg-amarelo-nv3.png";
import Brasil from "../images/brasil_flag.svg";
import SemDores from "../images/sem-dores-chinelo-nuvem.png";
import Gif from "../images/chinelo-macio.gif";
import NuvemBanner2 from "../images/nuvem-banner-2.png";
import NuvemSegurando from "../images/nuvem-segurando.png";

function YellowSection() {
  return (
    <section className="bg-[#DA59B0]">
      <img
        className="md:hidden relative -mb-5 bg-fill w-full mx-full md:px-36 bg-[#FAC05E] md:bg-[#DA59B0]"
        src={NuvemBanner2}
        width="768"
        height="432"
        alt="Hero"
      />
      <img
        className="hidden md:block relative bg-fill mx-auto bg-white rounded-3xl mb-12 w-1/2 drop-shadow-2xl border-8"
        src={NuvemSegurando}
        width="768"
        height="432"
        alt="Hero"
      />
      <div className="relative md:px-36 bg-[#FAC05E] md:pt-20 z-0">
        <div className="max-w-6xl mx-auto pt-7 drop-shadow-xl w-full mb-10">
          <div className="flex mx-6 p-5 rounded-3xl items-center bg-gradient-to-r from-green-800 to-green-500">
            <div className="text-white h2 text-2xl grow text-center">
              PRODUTO 100% NACIONAL
            </div>
            <img className="flex-none max-h-24 p-1.5" src={Brasil} />
          </div>

          <div className="flex justify-center py-5 md:py-0">
            {/* Section header */}
            <div className="flex flex-wrap justify-center text-xl max-w-3xl w-auto h-auto text-center px-3 pb-4 md:pb-20 text-white">
              <p className="mt-3 mb-4 border-gray-500 text-middle md:text-4xl leading-tighter tracking-tighter z-10">
                Seus pés não merecem passar por dores todos os dias{" "}
              </p>
              <p className="mt-3 mb-4 md:basis-4/6 border-gray-500 text-middle md:text-3xl leading-tighter tracking-tighter z-10">
                Nosso{" "}
                <strong className="text-fuchsia-500">Pegada Comfort</strong> foi
                criado para trazer <strong>elegância</strong> sem perder a{" "}
                <strong>conforto</strong>!
              </p>
              <img
                className="self-center basis-52"
                src={SemDores}
                height="250"
                width="250"
              ></img>
              <h4
                className={
                  "flex uppercase items-center whitespace-normal text-2xl font-medium leading-snug text-center mb-3 md:text-4xl px-5 w-auto"
                }
              >
                O cuidado com seus pés só depende de você!
              </h4>
              <ButtonComprar
                className="px-3 mt-4 -mb-16 md:w-3/4"
                text="EU QUERO!"
                subText="FRETE GRATIS PARA TODO BRASIL"
              ></ButtonComprar>

              {/* <img src={NuvemFundo2}></img> */}
            </div>
          </div>
        </div>
        <img className="opacity-full m-auto" src={ChTorcendo}></img>
      </div>
    </section>
  );
}

export default YellowSection;
