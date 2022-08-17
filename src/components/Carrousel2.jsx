import React from 'react';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-responsive-carousel';
import "../css/additional-styles/testimonials.css"; // requires a loader

function CarouselTest() {
  return (
    <section className='relative'>
        <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <img className="relative rounded-full" src="https://cf.shopee.com.br/file/73617dce22302586f62f28f889c0b9da_tn" width="96" height="96" alt="Testimonial 01" />
            </div>
            <blockquote className="text-xl font-medium mb-4">
                “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
            </blockquote>
            <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
            <div className="text-gray-600">
                <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
            </div>
        </div>
      </Carousel>
    </section>  
  );
}

export default CarouselTest;
