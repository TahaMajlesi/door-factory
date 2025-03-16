import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "../../Images/۲۰۲۳۱۱۲۸_۱۲۱۰۰۳.jpg";
import image2 from "../../Images/۲۰۲۳۱۱۲۸_۱۲۰۸۲۵.jpg";
import image3 from "../../Images/۲۰۲۴۱۲۲۴_۱۵۴۲۵۴.jpg";
import image4 from "../../Images/۲۰۲۳۱۱۲۸_۱۴۲۰۱۸.jpg";
import "swiper/css";
import "swiper/css/pagination";
const About = () => {
  return (
    <div className="flex w-10/12 mx-auto my-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="w-6/12"
        Pagination
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="">
          <img src={image1} alt="" className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" className="h-full" />
        </SwiperSlide>
        ...
      </Swiper>
      <div className="w-6/12 flex bg-red-400 font-[BYekan,sans]  flex-col">
        <p className="text-3xl py-2 w-full flex flex-row-reverse">
          {" "}
          شرکت ایران در نمایندگی رسمی شرکت گوگسو ترکیه{" "}
        </p>{" "}
        <p className="text-xl w-full flex flex-row-reverse px-4">
          {" "}
          شرکت ایران در نمایندگی رسمی شرکت گوگسو ترکیه{" "}
        </p>{" "}
      </div>
    </div>
  );
};

export default About;
