import React from "react";
import Button from "react-bootstrap/Button";
import ButtonComprar from "../components/ButtonComprar";
import Reembolso from "../images/restituicao.png";

function CompraReembolso() {
  return (
    <section className='relative -top-60 md:px-36 bg-white'>
      {/* Section header */}
      <div className='flex flex-row px-5 space-x-4'>
        <div className="basis-1/4">
          <img src={Reembolso} className=' w-auto' />
        </div>
        <div className="flex-1">
          <h3 className='text-lg font-bold'>Receba seu dinheiro de volta</h3>
          <p className='text-sm'>
            Compre agora e se você não gostar, por favor, avise nosso serviço ao
            cliente nós retornaremos seu dinheiro dentro de 7 dias.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompraReembolso;
