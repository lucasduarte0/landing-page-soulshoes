import React from "react";
import EmbedCartPanda from "../components/EmbedCartPanda";
import Testi from "../components/Testi";
import BannerGigante1 from "../images/banner-grande-1.png";
import BannerGigante2 from "../images/banner-grande-2.png";
import CoresNuvem from "../images/imagem-3.jpg";

function TabelaMedidas() {
  return (
    <div class="overflow-x-auto relative mx-12 rounded rounded-xl drop-shadow-xl mt-6">
      <h2 className="uppercase bg-white text-center text-lg font-bold text-gray-900 py-4">
        Tabela de Tamanhos
      </h2>
      <table class="table-fixed w-full text-sm text-left text-gray-500 text-gray-900">
        <thead class="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" class="py-3 px-6">
              Tamanho
            </th>
            <th scope="col" class="py-3 px-6">
              Medida
            </th>
            <th scope="col" class="py-3 px-6">
              Peso(g)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b text-gray-900">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              33/34 BR
            </th>
            <td class="py-4 px-6">25cm</td>
            <td class="py-4 px-6">109g</td>
          </tr>
          <tr class="bg-white border-b text-gray-900">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              35/36 BR
            </th>
            <td class="py-4 px-6">24cm</td>
            <td class="py-4 px-6">125g</td>
          </tr>
          <tr class="bg-white border-b text-gray-900">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              37/38 BR
            </th>
            <td class="py-4 px-6">25,5cm</td>
            <td class="py-4 px-6">140g</td>
          </tr>
          <tr class="bg-white border-b text-gray-900">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              39/40 BR
            </th>
            <td class="py-4 px-6">26,5cm</td>
            <td class="py-4 px-6">154g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TabelaMedidas;
