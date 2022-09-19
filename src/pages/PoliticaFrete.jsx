import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { empresaTitulo } from "../utils/Variables";
import Logo from "../images/logo.png";

function PoliticaFrete() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-16 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-6 md:pb-20">
                <div className="flex">
                  <img
                    className="m-auto w-1/2 self-center pb-8"
                    src={Logo}
                  ></img>
                </div>
                <h1 className="h2 mb-0 text-gray-800">POLÍTICAS DE FRETE</h1>
              </div>
              <div className="text-sm mx-3 indent-4 text-justify mb-2 text-base leading-7">
                <ul className="list-disc mx-1">
                <li className="mb-5">
                    <h2 className="indent-0 h4 text-lg">
                      De onde vocês enviam?
                    </h2>
                    <p>
                      Nossos produtos são projetados e enviados do BRASIL.
                      Estamos orgulhosos de oferecer 100% de envio prioritário
                      em todos os pedidos!
                    </p>
                  </li>
                  <li className="mb-5">
                    <h2 className="indent-0 h4 text-lg">
                      Qual a política de frete?
                    </h2>
                    <p>
                      O prazo para o envio do rastreio para o cliente é de até
                      48hrs úteis, sendo enviado nos dados fornecidos pelo
                      cliente. A Pegada Comfort trabalha com envio 100%
                      nacional, enviando todos os produtos da loja com prazos de
                      até 2 dias úteis. Nossos produtos são embalados de forma
                      eficiente por nossa equipe de manuseio especializada, para
                      garantir que cheguem em perfeitas condições,
                      independentemente da distância que percorreram.
                    </p>
                  </li>
                  <li className="mb-5">
                    <h2 className="indent-0 h4 text-lg">
                      Posso cancelar meu pedido depois de fazer uma compra no
                      site? - Você pode.
                    </h2>
                    <p>
                      Se você mudar de ideia e quiser cancelar ou alterar o seu
                      pedido basta enviar uma mensagem através do e-mail
                      sac@pedealgodao.com.br que será verificada a possibilidade
                      de cancelar ou alterar o pedido, pedidos já postados não
                      podem ser alterados ou cancelados. Envio de mensagem por
                      outros canais não serão considerados.
                    </p>
                  </li>
                  <li className="mb-5">
                    <h2 className="indent-0 h4 text-lg">
                      Tenho medo de pagar online, isso é seguro?
                    </h2>
                    <p>
                      Sim, nosso site é 100% seguro. Todos os pagamentos são
                      processados ​​por terceiros, e um processador de pagamento
                      autorizado. Usamos protocolos de criptografia SSL e
                      medidas de segurança para proteger suas informações de
                      pagamento.
                    </p>
                  </li>
                  <li className="mb-5">
                    <h2 className="indent-0 h4 text-lg">
                      Quais tipos de pagamento você aceita? - Todos os
                      pagamentos padrão.
                    </h2>
                    <p>
                      Aceitamos todos os pagamentos com Visa, Mastercard e
                      American Express. Além disso, você pode pagar via PayPal,
                      Apple Pay ou vários outros processadores compatíveis
                      conforme sua conveniência.
                    </p>
                  </li>
                  <li className="mb-5">
                    <h2 className="indent-0 h4 text-lg">
                      Alguma outra pergunta?
                    </h2>
                    <p>
                      Ficaríamos mais do que felizes em ajudar! Entre em contato
                      conosco através do formulário Fale conosco.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default PoliticaFrete;
