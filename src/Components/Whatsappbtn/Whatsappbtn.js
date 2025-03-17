import { FaWhatsapp } from "react-icons/fa";

const Whatsappbtn = () => {
  return (
    <a
      className="flex z-40 fixed bottom-8 left-8 bg-green-600 justify-center items-center p-3 text-3xl text-white rounded-full hover:text-black transition-colors duration-300"
      href="#!"
    >
      <FaWhatsapp />

      <div className="absolute bg-green-700 z-50 rounded-full p-6 animate-ping"></div>
    </a>
  );
};

export default Whatsappbtn;
