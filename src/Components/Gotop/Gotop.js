import { FaAngleUp } from "react-icons/fa";
import $ from "../../../node_modules/jquery/dist/jquery.js";
const Gotop = () => {
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#goTopBtn").fadeIn("slow");
      } else {
        $("#goTopBtn").fadeOut("slow");
      }
    });

    $("#goTopBtn").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });

  return (
    <button
      className="fixed p-2 bottom-8 right-8 text-2xl z-40 border-[1px] border-black hover:bg-black hover:text-white hover:rounded-xl transition-all duration-300 hidden"
      id="goTopBtn"
    >
      <FaAngleUp />
    </button>
  );
};

export default Gotop;
