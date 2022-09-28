import React from "react";
import Button from "react-bootstrap/Button";
import ButtonComprar from "../components/ButtonComprar";
import Reembolso from "../images/restituicao.png";

function CompraReembolso() {
  return (
    <section className="relative md:px-36">
      {/* Section header */}
      <div className="flex flex-col mt-4 md:flex-row md:flex-wrap mx-auto text-center items-center px-8 md:mx-12 md:pb-0 md:justify-center">
        <div className="flex flex-row items-center md:flex-col md:self-center">
        <img
          src={Reembolso}
          className="object-contain flex w-20 p-3 md:basis-12 md:w-36"
        />
        <h3 className="text-2xl px-4 inline-block align-middle font-semibold text-yellow-500 uppercase md:grow">
          Receba seu dinheiro de volta
        </h3>

        </div>
        <h3 className="mt-5 md:mt-0 tracking-normal md:w-full">
          Compre agora e se você não gostar, por favor, avise nosso serviço ao
          cliente nós retornaremos seu dinheiro dentro de 7 dias.
        </h3>
      </div>
    </section>
  );
}

export default CompraReembolso;
