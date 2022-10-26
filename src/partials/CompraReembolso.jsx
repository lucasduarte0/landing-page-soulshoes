import React from "react";
import Button from "react-bootstrap/Button";
import ButtonComprar from "../components/ButtonComprar";
import Reembolso from "../images/restituicao.png";

function CompraReembolso() {
  return (
    <section className='relative -top-60 md:px-36 bg-white'>
      {/* Section header */}
      <div className='flex flex-col md:flex-row md:flex-wrap mx-auto text-center items-center px-8 md:mx-12 md:pb-0'>
        <img
          src={Reembolso}
          className='flex w-1/2 m-5 mb-12 md:basis-12 md:w-36'
        />
        <h3 className='h3 text-yellow-500 uppercase md:grow'>
          Receba seu dinheiro de volta
        </h3>
        <h3 className='mt-5 md:mt-0 tracking-normal md:w-full'>
          Compre agora e se você não gostar, por favor, avise nosso serviço ao
          cliente nós retornaremos seu dinheiro dentro de 7 dias.
        </h3>
      </div>
    </section>
  );
}

export default CompraReembolso;
