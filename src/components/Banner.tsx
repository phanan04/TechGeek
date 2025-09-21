"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const bannerMessages = [
  {
    text: "Free Standard Delivery & 30-Day Free Returns",
    link: "/delivery-info",
  },
  {
    text: "Members get free shipping on orders $50+",
    link: "/membership",
  },
  {
    text: "Join Nike Membership for the best products, inspiration and stories in sport",
    link: "/join-membership",
  },
];

const Banner = () => {
  return (
    <div className="bg-gray-100 h-12">
      <Swiper
        modules={[ Autoplay, EffectFade]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {bannerMessages.map((message, index) => (
            <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-full">
                    <a
                        href={message.link}
                        className="text-sm text-black hover:underline text-center px-4"
                    >
                        {message.text}
                    </a>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
