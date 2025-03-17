import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import sampleImage from "../../Images/saipa-logo.png";
// install Swiper modules
SwiperCore.use([Autoplay]);

const Customers = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      loop={true}
      className="w-full bg-green-300 flex justify-around"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={Autoplay}
    >
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
      <SwiperSlide className="w-1/12 flex justify-items-center ">
        <img
          src={sampleImage}
          alt="Customer-Logo"
          className="cursor-pointer w-6/12"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Customers;
