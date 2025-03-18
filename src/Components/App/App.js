import About from "../About/About";
import Catalogue from "../Catalogue/Catalogue";
import Whatsappbtn from "../Whatsappbtn/Whatsappbtn.js";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";
import Gotop from "../Gotop/Gotop.js";
import Customers from "../Customers/Customers.js";
import Badges from "../Badges/Badges.js";
import Faq from "../Faq/Faq.js";

const App = () => {
  return (
    <>
      {" "}
      <Navbar /> <Slider /> <About /> <Badges /> <Products />
      <Catalogue />
      <Whatsappbtn />
      <Gotop />
      <Customers />
      <Faq />
    </>
  );
};

export default App;
