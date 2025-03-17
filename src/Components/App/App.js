import About from "../About/About";
import Catalogue from "../Catalogue/Catalogue";
import Whatsappbtn from "../Whatsappbtn/Whatsappbtn.js";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";
import Gotop from "../Gotop/Gotop.js";
import Customers from "../Customers/Customers.js";

const App = () => {
  return (
    <>
      {" "}
      <Navbar /> <Slider /> <About /> <Products />
      <Catalogue />
      <Whatsappbtn />
      <Gotop />
      <Customers />
    </>
  );
};

export default App;
