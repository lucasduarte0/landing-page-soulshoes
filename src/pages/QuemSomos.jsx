import React from 'react';
<<<<<<< HEAD
import StarRating from '../components/StarRating';
import Testi from '../components/Testi';
import Logo from '../images/logo.png'
import Footer from '../partials/Footer';

=======
import Footer from '../partials/Footer';
import Logo from "../images/logo.png"
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
import Header from '../partials/Header';

function QuemSomos() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
      

        <section className="bg-gradient-to-b from-gray-100 to-white">

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
<<<<<<< HEAD
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
=======
            <div className="pt-16 pb-12 md:pt-40 md:pb-10">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-8 md:pb-20">
                <div className='flex'>
                  <img className="m-auto w-1/2 self-center pb-8" src={Logo}></img>
                  </div>
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
                <h1 className="h2 mb-5">Quem Somos?</h1>
                <p className=''>Nascida em 2018, somos uma loja online especializados em calçados em geral e operada com paixão por beleza, conforto e praticidade. Oferecemos uma grande variedade de produtos, incluindo chinelos, tênis, botas e sandálias. Nossos clientes podem navegar em nossos produtos e desfrutar de nossos preços exclusivos.</p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer></Footer>

    </div>
  );
}

export default QuemSomos;