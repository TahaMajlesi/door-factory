import { FaAngleDoubleLeft } from "react-icons/fa";

const Products = () => {
  const Catalogs = {};
  return (
    <div className="w-10/12 mx-auto flex flex-col bg-red-300 font-[BYekan,sans]">
      <p className="flex w-full  text-3xl flex-row-reverse py-2 border-b-2 border-black">
        {" "}
        کاتالوگ ها و انواع درب ها{" "}
      </p>{" "}
      <div className="w-full flex bg-amber-400">
        <div className="w-8/12 flex bg-green-400 justify-evenly">
          <div className="bg-blue-400 w-2/12 flex items-center">
            <a href="#!" id="catalogue-1">
              <img src="#" alt="catalogue-Image" />
            </a>
          </div>
          <div className="bg-blue-400 w-2/12 flex items-center">
            <a href="#!" id="catalogue-1">
              <img src="#" alt="catalogue-Image" />
            </a>
          </div>
          <div className="bg-blue-400 w-2/12 flex items-center">
            <a href="#!" id="catalogue-1">
              <img src="#" alt="catalogue-Image" />
            </a>
          </div>
          <div className="bg-blue-400 w-2/12 flex items-center">
            <a href="#!" id="catalogue-1">
              <img src="#" alt="catalogue-Image" />
            </a>
          </div>
        </div>{" "}
        <div className="w-4/12 flex">
          <ul className="w-full flex flex-col">
            <li className="bg-blue-300 flex p-3 border-b-2 border-gray-400 cursor-pointer justify-around items-center group/item">
              {" "}
              <FaAngleDoubleLeft className="translate-x-6 group/edit invisible group-hover/item:visible group-hover/item:translate-0 transition-all duration-300 ease-in-out text-lg" />
              <p className="w-10/12 bg-green-300 flex flex-row-reverse text-xl">
                کرکره صنعتی
              </p>
            </li>{" "}
            <li className="bg-blue-300 flex p-3 border-b-2 border-gray-400 cursor-pointer justify-around items-center group/item">
              {" "}
              <FaAngleDoubleLeft className="translate-x-6 group/edit invisible group-hover/item:visible group-hover/item:translate-0 transition-all duration-300 ease-in-out text-lg" />
              <p className="w-10/12 bg-green-300 flex flex-row-reverse text-xl">
                درب رول آپ سریع باز شو
              </p>
            </li>{" "}
            <li className="bg-blue-300 flex p-3 border-b-2 border-gray-400 cursor-pointer justify-around items-center group/item">
              {" "}
              <FaAngleDoubleLeft className="translate-x-6 group/edit invisible group-hover/item:visible group-hover/item:translate-0 transition-all duration-300 ease-in-out text-lg" />
              <p className="w-10/12 bg-green-300 flex flex-row-reverse text-xl">
                درب فولد آپ سریع باز شو
              </p>
            </li>{" "}
            <li className="bg-blue-300 flex p-3 border-b-2 border-gray-400 cursor-pointer justify-around items-center group/item">
              {" "}
              <FaAngleDoubleLeft className="translate-x-6 group/edit invisible group-hover/item:visible group-hover/item:translate-0 transition-all duration-300 ease-in-out text-lg" />
              <p className="w-10/12 bg-green-300 flex flex-row-reverse text-xl">
                داک لولر
              </p>
            </li>{" "}
            <li className="bg-blue-300 flex p-3 border-b-2 border-gray-400 cursor-pointer justify-around items-center group/item">
              {" "}
              <FaAngleDoubleLeft className="translate-x-6 group/edit invisible group-hover/item:visible group-hover/item:translate-0 transition-all duration-300 ease-in-out text-lg" />
              <p className="w-10/12 bg-green-300 flex flex-row-reverse text-xl">
                داک شلتر
              </p>
            </li>{" "}
            <li className="bg-blue-300 flex p-3 border-b-2 border-gray-400 cursor-pointer justify-around items-center group/item">
              {" "}
              <FaAngleDoubleLeft className="translate-x-6 group/edit invisible group-hover/item:visible group-hover/item:translate-0 transition-all duration-300 ease-in-out text-lg" />
              <p className="w-10/12 bg-green-300 flex flex-row-reverse text-xl">
                درب ضد حریق
              </p>
            </li>{" "}
          </ul>{" "}
        </div>
      </div>{" "}
    </div>
  );
};

export default Products;
