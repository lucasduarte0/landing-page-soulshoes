import React, { Component } from "react";
<<<<<<< HEAD
import { Carousel } from 'react-responsive-carousel';
import StarRating from "./StarRating";
import TestimonialMsg from "./testimonial-messages.json"

export default class Testi extends Component {
  
  render() {
    return (
      <div>
      <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={true}
      interval={6100}
    >
    { TestimonialMsg.map( (TestimonialMsg) => 
      <div class="min-h-[350px] mx-10 mb-10 row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
        <div class="h-full flex flex-col justify-center align-center space-y-4">
          <div className="flex w-auto items-center flex-center justify-center">
            <img class="w-auto rounded-full m-4" src={TestimonialMsg.img} alt="user avatar" height="220" width="220" loading="lazy"></img>
            <div className="myCaroulsel">
                <h6 class="text-lg font-semibold leading-none">{TestimonialMsg.name}</h6>
                <StarRating qtd={TestimonialMsg.stars}></StarRating>
            </div>
          </div>
          <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span> {TestimonialMsg.text} <span class="font-serif">"</span></p>

        </div>
      </div>
    )}
    </Carousel>
    </div>

    );
  }
}
=======
import { Carousel } from "react-responsive-carousel";
import StarRating from "./StarRating";
import TestimonialMsg from "./testimonial-messages.json";

export default class Testi extends Component {
  render() {
    return (
      <div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={true}
          interval={6100}
        >
          {TestimonialMsg.map((TestimonialMsg) => (
            <div class="flex justify-center self-center min-h-[350px] h-auto mx-10 mb-10 row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8 md:w-3/4">
              <div class="h-full flex flex-col justify-center self-center align-center space-y-4">
                <div className="flex w-auto items-center flex-center justify-center self-center">
                  <img
                    class="h-[52px] w-[52px] object-cover rounded-full m-4"
                    src={TestimonialMsg.img}
                    alt="user avatar"
                    height="220"
                    width="220"
                    loading="lazy"
                  ></img>
                  <div className="w-36">
                    <h6 class="text-lg font-semibold leading-none mt-2">
                      {TestimonialMsg.name}
                    </h6>
                    <StarRating qtd={TestimonialMsg.stars}></StarRating>
                  </div>
                </div>
                <p class="text-gray-600 md:text-xl">
                  {" "}
                  <span class="font-serif">"</span> {TestimonialMsg.text}{" "}
                  <span class="font-serif">"</span>
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
