import React, { useEffect } from 'react';





function SecurityList() {   

  return (
    <>
        <ul className="flex justify-center align-center seguranca-list px-1 py-4 divide-x divide-gray-300 border-t-2">  
            <li className='px-1.5'>
                <img className='flex max-h-8' src="https://loja.contabilizelegal.com.br/assets/img/selo_loja_segura.png" />
            </li>
            <li className='px-1.5'>
                <a href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fpegadacomfort.com.br">
                    <img className='max-h-8' src="https://i0.wp.com/evoluadoutor.com.br/wp-content/uploads/2021/10/img-2099014932-1621343879-f28c827e64ebad0a247d537743c1f6271621343880.png" />
                </a>
            </li>
            <li className='px-1.5'>
                <a href="">
                    <img className='max-h-8' src="https://loja.contabilizelegal.com.br/assets/img/norton_secured.png"  />
                </a>
            </li>
            <li className='px-1.5'>
                <a href="https://www.sslshopper.com/ssl-checker.html#hostname=https://loja.contabilizelegal.com.br/">
                    <img className='max-h-8' src="https://loja.contabilizelegal.com.br/assets/img/compra_segura_fundo_claro.svg" />
                </a>
            </li>

        </ul>
    </>    
    );
}


export default SecurityList;
