import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import StarRating from "./StarRating";
import TestimonialMsg from "./testimonial-messages.json";

export default class Testi extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={true}
          interval={6100}
          className=""
        >
          {TestimonialMsg.map((TestimonialMsg) => (
            <div class="min-h-[350px] mx-10 mb-10 row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
              <div class="h-full flex flex-col justify-center align-center space-y-4">
                <div className="flex w-auto items-center flex-center justify-center">
                  <img
                    class="w-auto rounded-full m-4"
                    src={TestimonialMsg.img}
                    alt="user avatar"
                    height="220"
                    width="220"
                    loading="lazy"
                  ></img>
                  <div className="myCaroulsel">
                    <h6 class="text-lg font-semibold leading-none">
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
