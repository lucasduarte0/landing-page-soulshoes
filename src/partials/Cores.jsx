/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ButtonComprar from "../components/ButtonComprar";
import ChTorcendo from "../images/banner-bg-amarelo-nv3.png";
import Brasil from "../images/brasil_flag.svg";
import SemDores from "../images/sem-dores-chinelo-nuvem.png";
import NuvemBanner2 from "../images/nuvem-banner-2.png";
import NuvemTransicao from "../images/nuvem-transicao.png";

function Cores() {
  return (
    <section className='relative -top-24 bg-[#d0d0d0] pb-24'>
      <img
        className='md:hidden relative -top-24 -mb-24  bg-fill w-full mx-full md:px-36 md:bg-[#DA59B0]'
        src={NuvemTransicao}
        width='768'
        height='432'
        alt='Hero'
      />
{/* 
    <img className="" src="https://ik.imagekit.io/soulshoes/IMG-20221005-WA0051_Fax_-9jPO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668038599458" /> */}
    <img className="mb-5" src="https://ik.imagekit.io/soulshoes/IMG-20221005-WA0051_gRrceAL01.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668039739756" />

      <div className='px-4 grid grid-cols-1 md:grid-cols-4 gap-4'>
        <a
          href='#'
          className='px-2 py-1 flex flex-row items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100'
        >
          <img
            className='object-contain w-1/3 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src={SemDores}
            alt=''
          />
          <div className='flex flex-col justify-between p-3 leading-normal'>
            <h5 className='text-lg font-bold tracking-tight text-gray-900'>
              Super Macio
            </h5>
            <p className='text-sm text-gray-700'>
              Nosso chinelo possui tecnologia antiderrapante que garante o
              máximo atrito mesmo em pisos molhados!{" "}
            </p>
          </div>
        </a>

        <a
          href='#'
          className='px-2 py-1 flex flex-row items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100'
        >
          <img
            className='p-3 object-contain w-1/3 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src='https://ik.imagekit.io/soulshoes/4482303_GgxXUIl9n.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668038290490'
            alt=''
          />
          <div className='flex flex-col justify-between p-3 leading-normal'>
            <h5 className='text-lg font-bold tracking-tight text-gray-900'>
              Super Macio
            </h5>
            <p className='text-sm text-gray-700'>
              Feito com uma camada de 3cm de E.V.A, o{" "}
              <strong>Chinelo Nuvem</strong> vai te proporcionar maior conforto
              para realizar as tarefas do seu dia!{" "}
            </p>
          </div>
        </a>

        <a
          href='#'
          className='px-2 py-1 flex flex-row items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100'
        >
          <div className='object-contain w-1/3 min-w-[120px] h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg  m-auto'>
            <span className='m-auto w-fit flex justify-center'>
              <i className='fa-solid fa-feather fa-4x'></i>
            </span>
          </div>
          <div className='flex flex-col justify-between p-3 leading-normal'>
            <h5 className='text-lg font-bold tracking-tight text-gray-900'>
              Super Macio
            </h5>
            <p className='text-sm text-gray-700'>
              Pesando apenas 150g, nosso <strong>Chinelo Nuvem</strong> te
              acompanha em todas as ocasiões sem fazer feio! Seguro e confiável!
            </p>
          </div>
        </a>

      </div>
        <img className='opacity-full m-auto' src={ChTorcendo} />
    </section>
  );
}

export default Cores;
