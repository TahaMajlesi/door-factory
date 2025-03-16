// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image from "../../Images/۲۰۲۳۱۱۲۴_۱۳۵۱۰۹.jpg";
// Import Swiper styles

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      Pagination
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="bg-gray-900 opacity-50 z-40 flex absolute w-full h-full ">
          {" "}
        </div>{" "}
        <div className="w-full flex absolute z-50 pt-14 pe-28 flex-col">
          <p className="text-white w-full flex flex-row-reverse text-3xl">
            شرکت ایران در{" "}
          </p>{" "}
          <p className="text-white w-full flex flex-row-reverse mt-4 text-xl">
            {" "}
            متن{" "}
          </p>{" "}
        </div>{" "}
        <img src={image} alt="" className="w-full" />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="bg-gray-900 opacity-50 z-40 flex absolute w-full h-full ">
          {" "}
        </div>{" "}
        <div className="w-full flex absolute z-50 pt-14 pe-28  flex-col">
          <p className="text-white w-full flex flex-row-reverse text-3xl">
            شرکت ایران در{" "}
          </p>{" "}
          <p className="text-white w-full flex flex-row-reverse mt-4 text-xl">
            {" "}
            متن{" "}
          </p>{" "}
        </div>{" "}
        <img src={image} alt="" className="w-full" />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="bg-gray-900 opacity-50 z-40 flex absolute w-full h-full ">
          {" "}
        </div>{" "}
        <div className="w-full flex absolute z-50 pt-14 pe-28  flex-col">
          <p className="text-white w-full flex flex-row-reverse text-3xl">
            شرکت ایران در{" "}
          </p>{" "}
          <p className="text-white w-full flex flex-row-reverse mt-4 text-xl">
            {" "}
            متن{" "}
          </p>{" "}
        </div>{" "}
        <img src={image} alt="" className="w-full" />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="bg-gray-900 opacity-50 z-40 flex absolute w-full h-full ">
          {" "}
        </div>{" "}
        <div className="w-full flex absolute z-50 pt-14 pe-28  flex-col">
          <p className="text-white w-full flex flex-row-reverse text-3xl">
            شرکت ایران در{" "}
          </p>{" "}
          <p className="text-white w-full flex flex-row-reverse mt-4 text-xl">
            {" "}
            متن{" "}
          </p>{" "}
        </div>{" "}
        <img src={image} alt="" className="w-full" />
      </SwiperSlide>{" "}
    </Swiper>
  );
};

export default Slider;
