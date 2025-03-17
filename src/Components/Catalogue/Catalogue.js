import { FaFileDownload } from "react-icons/fa";

import catalogue from "../../Images/albany-hs8010pl-high-speed-door-236321_1mg.jpg";
const Catalogue = () => {
  return (
    <div className="my-10 flex w-full bg-blue-400 justify-around">
      <div className="w-2/12 bg-red-400 flex flex-col justify-center items-center">
        <img src={catalogue} alt="" className="w-10/12" />
        <a
          href="#!"
          className="w-10/12 bg-yellow-400 font-[BYekan,sans] text-2xl flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300"
        >
          <FaFileDownload className="mx-2" />
          دانلود کاتالوگ{" "}
        </a>{" "}
      </div>{" "}
      <div className="w-2/12 bg-red-400 flex flex-col justify-center items-center">
        <img src={catalogue} alt="" className="w-10/12" />
        <a
          href="#!"
          className="w-10/12 bg-yellow-400 font-[BYekan,sans] text-2xl flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300"
        >
          <FaFileDownload className="mx-2" />
          دانلود کاتالوگ{" "}
        </a>{" "}
      </div>{" "}
      <div className="w-2/12 bg-red-400 flex flex-col justify-center items-center">
        <img src={catalogue} alt="" className="w-10/12" />
        <a
          href="#!"
          className="w-10/12 bg-yellow-400 font-[BYekan,sans] text-2xl flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300"
        >
          <FaFileDownload className="mx-2" />
          دانلود کاتالوگ{" "}
        </a>{" "}
      </div>{" "}
      <div className="w-2/12 bg-red-400 flex flex-col justify-center items-center">
        <img src={catalogue} alt="" className="w-10/12" />
        <a
          href="#!"
          className="w-10/12 bg-yellow-400 font-[BYekan,sans] text-2xl flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300"
        >
          <FaFileDownload className="mx-2" />
          دانلود کاتالوگ{" "}
        </a>{" "}
      </div>{" "}
      <div className="w-2/12 bg-red-400 flex flex-col justify-center items-center">
        <img src={catalogue} alt="" className="w-10/12" />
        <a
          href="#!"
          className="w-10/12 bg-yellow-400 font-[BYekan,sans] text-2xl flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300"
        >
          <FaFileDownload className="mx-2" />
          دانلود کاتالوگ{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
};

export default Catalogue;
