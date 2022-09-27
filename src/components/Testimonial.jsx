/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../css/additional-styles/testimonials.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
  
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="https://cf.shopee.com.br/file/4a3ac471f539da2e1179799b16b297f9_tn" />
          <div className="myCarousel">
            <h3>Isabelle Gomes</h3>
            <p>
              Comprei para o meu filho, o tamanho deu bem certo no pé dele, recomendo medir o pé e comprar o seu número mesmo. Vou comprar mais com certeza!
            </p>
            {/* <img src="https://cf.shopee.com.br/file/399b1bbe889624b6d9a2940fcad7f056" /> */}
          </div>
        </div>

        <div>
          <img src="https://cf.shopee.com.br/file/1132ba939a294210ffc557d06bf890e5_tn" />
          <div className="myCarousel">
            <h3>Aline Ribeiro</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="https://cf.shopee.com.br/file/e8d432de826a54fcf161103742b12ba7_tn" />
          <div className="myCarousel">
            <h3>Gabriela Castro</h3>
            <h4>Designer</h4>
            <p>
              Excelente produto super confortável, bem feito. Eu gostei muito. Eu super recomendo 😃
            </p>
          </div>
        </div>

        <div>
          <img src="https://cf.shopee.com.br/file/e8d432de826a54fcf161103742b12ba7_tn" />
          <div className="myCarousel">
            <h3>Giovanna Melo</h3>
            <h4>Designer</h4>
            <p>
              Entrega muita rápida, cor certa e tamanho exato conforme descrito, estou satisfeita e recomendo o vendedor.
            </p>
          </div>
        </div>

        <div>
          <img src="https://cf.shopee.com.br/file/e8d432de826a54fcf161103742b12ba7_tn" />
          <div className="myCarousel">
            <h3>Carolina Correia</h3>
            <span id="rateMe1"></span>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}