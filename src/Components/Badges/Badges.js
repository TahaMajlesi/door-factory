import { FaHandPeace } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";

const Badges = () => {
  return (
    <div className="my-10 w-full bg-gray-500  flex justify-center gap-x-24 font-[BYekan,sans] py-10">
      <div className="w-2/12 flex flex-col bg-blue-400 items-center hover:text-yellow-500 transition-colors cursor-pointer">
        {" "}
        <FaHandPeace className="text-5xl" /> <p className="text-3xl"> 20 </p>{" "}
        <p className="text-2xl"> در کنار شما </p>{" "}
      </div>{" "}
      <div className="w-2/12 flex flex-col bg-blue-400 items-center hover:text-yellow-500 transition-colors cursor-pointer">
        {" "}
        <FaRegCheckCircle className="text-5xl" />{" "}
        <p className="text-3xl"> 12 </p> <p className="text-2xl"> محصول </p>{" "}
      </div>{" "}
      <div className="w-2/12 flex flex-col bg-blue-400 hover:text-yellow-500 transition-colors cursor-pointer items-center ">
        {" "}
        <FaTruck className="text-5xl" /> <p className="text-3xl"> 50 </p>{" "}
        <p className="text-2xl"> ارسال محصول </p>{" "}
      </div>{" "}
      <div className="w-2/12 flex flex-col bg-blue-400 hover:text-yellow-500 transition-colors cursor-pointer items-center ">
        {" "}
        <FaHotjar className="text-5xl" /> <p className="text-3xl"> 5 </p>{" "}
        <p className="text-2xl"> جزو پنج شرکت برتر </p>{" "}
      </div>{" "}
      <div className="w-2/12 flex flex-col bg-blue-400 hover:text-yellow-500 transition-colors cursor-pointer items-center ">
        {" "}
        <FaHandsHelping className="text-5xl" /> <p className="text-3xl"> 4 </p>{" "}
        <p className="text-2xl"> همکار </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Badges;
