import React from "react";
import "../css/styleIframe.css";
import Logo from "../images/logo.png";

function Atacado() {
  return (
    <div className='flex flex-col md:px-96 min-h-screen overflow-hidden md:w-full md:justify-center'>
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img className='mx-auto h-24 w-auto' src={Logo} alt='Workflow' />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Venda no Atacado
            </h2>
          </div>

          <div className='rounded bg-white max-w-md rounded overflow-hidden shadow-xl pt-0 p-5'>
            <form name="atacado" className='space-y-4' method='POST' data-netlify="true">
              <input type='hidden' name='remember' value='True' />
              <div className='rounded-md shadow-sm -space-y-px'>
                <div className='grid gap-6'>
                  <div className='col-span-12'>
                    <label
                      htmlFor='first_name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Nome
                    </label>
                    <input
                      type='text'
                      name='first_name'
                      id='first_name'
                      autoComplete='given-name'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>

                  <div className='col-span-12'>
                    <label
                      htmlFor='email_address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='text'
                      name='email_address'
                      id='email_address'
                      autoComplete='email'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-12'>
                    <label
                      htmlFor='email_address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Telefone
                    </label>
                    <input
                      type='text'
                      name='phone_number'
                      id='phone_number'                      
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>

                  <fieldset className='col-span-12 px-2'>
                    <label
                      htmlFor='email_address'
                      className='block text-sm font-medium text-gray-700 mb-3'
                    >
                      Telefone
                    </label>

                    <div className='flex items-center mb-4'>
                      <input
                        id='country-option-2'
                        type='radio'
                        name='countries'
                        value='Germany'
                        className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                      />
                      <label
                        htmlFor='country-option-2'
                        className='block ml-2 text-sm font-medium text-gray-700'
                      >
                        Germany
                      </label>
                    </div>

                    <div className='flex items-center mb-4'>
                      <input
                        id='country-option-2'
                        type='radio'
                        name='countries'
                        value='Germany'
                        className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                      />
                      <label
                        htmlFor='country-option-2'
                        className='block ml-2 text-sm font-medium text-gray-700'
                      >
                        Germany
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember_me'
                    name='remember_me'
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember_me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Receber novidades Pegada Comfort
                  </label>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rosa-500 hover:bg-rosa-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <i className='fa-solid fa-paper-plane'></i>
                  </span>
                  Solicitar Contato
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Atacado;
