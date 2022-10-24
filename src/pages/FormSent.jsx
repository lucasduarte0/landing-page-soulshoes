import React from "react";
import "../css/styleIframe.css";
import Logo from "../images/logo.png";

function FormSent() {
  return (
    <div className='flex flex-col md:px-96 min-h-screen overflow-hidden md:w-full md:justify-center'>
      <div class='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div class='max-w-md w-full space-y-8'>
          <div>
            <img class='mx-auto h-24 w-auto' src={Logo} alt='Workflow' />
            <h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Venda no Atacado
            </h2>
          </div>

          <div class='rounded bg-white max-w-md rounded overflow-hidden shadow-xl pt-0 p-5'>
            <form class='space-y-4' action='#' method='POST'>
              <input type='hidden' name='remember' value='True' />
              <div class='rounded-md shadow-sm -space-y-px'>
                <div class='grid gap-6'>
                  <div class='col-span-12'>
                    <label
                      for='first_name'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Nome
                    </label>
                    <input
                      type='text'
                      name='first_name'
                      id='first_name'
                      autocomplete='given-name'
                      class='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>

                  <div class='col-span-12'>
                    <label
                      for='email_address'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='text'
                      name='email_address'
                      id='email_address'
                      autocomplete='email'
                      class='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div class='col-span-12'>
                    <label
                      for='email_address'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Telefone
                    </label>
                    <input
                      type='text'
                      name='phone_number'
                      id='phone_number'
                      autocomplete='phone'
                      class='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>

                  <fieldset class='col-span-12 px-2'>
                    <label
                      for='email_address'
                      class='block text-sm font-medium text-gray-700 mb-3'
                    >
                      Telefone
                    </label>

                    <div class='flex items-center mb-4'>
                      <input
                        id='country-option-2'
                        type='radio'
                        name='countries'
                        value='Germany'
                        class='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                      />
                      <label
                        for='country-option-2'
                        class='block ml-2 text-sm font-medium text-gray-700'
                      >
                        Germany
                      </label>
                    </div>

                    <div class='flex items-center mb-4'>
                      <input
                        id='country-option-2'
                        type='radio'
                        name='countries'
                        value='Germany'
                        class='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                      />
                      <label
                        for='country-option-2'
                        class='block ml-2 text-sm font-medium text-gray-700'
                      >
                        Germany
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class='flex items-center justify-between'>
                <div class='flex items-center'>
                  <input
                    id='remember_me'
                    name='remember_me'
                    type='checkbox'
                    class='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label
                    for='remember_me'
                    class='ml-2 block text-sm text-gray-900'
                  >
                    Receber novidades Pegada Comfort
                  </label>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rosa-500 hover:bg-rosa-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span class='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <i class='fa-solid fa-paper-plane'></i>
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

export default FormSent;
