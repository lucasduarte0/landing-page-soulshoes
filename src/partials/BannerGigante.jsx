import React from 'react';
import Button from 'react-bootstrap/Button';

function BannerGigante() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-green-500  text-center text-white font-semibold">
            <Button variant="primary" size="xl">
              <div className='flex flex-col space-y-3'>
                <h2 className='text-4xl'>SIM!</h2>
                <p className='text-lg'>Quero garantir meu Chinelo Nuvem</p>
              </div>
            </Button>
          </div>
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">How Simple works</h2>
            <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BannerGigante;
