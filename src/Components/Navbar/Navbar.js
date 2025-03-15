const Navbar = () => {
  return (
    <div className="w-full flex">
      <ul className="flex flex-row-reverse justify-around w-full font-[BYekan,sans] text-lg sticky top-0">
        <li className="p-2 cursor-pointer">
          {" "}
          <a href="#!"> خانه </a>{" "}
        </li>{" "}
        <li className="p-2 cursor-pointer">
          {" "}
          <a href="#!"> درباره ما </a>{" "}
        </li>{" "}
        <li className="p-2 cursor-pointer">
          {" "}
          <a href="#!"> محصولات </a>{" "}
        </li>{" "}
        <li className="p-2 cursor-pointer">
          {" "}
          <a href="#!"> مشتریان </a>{" "}
        </li>{" "}
        <li className="p-2 cursor-pointer">
          {" "}
          <a href="#!"> همکار </a>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default Navbar;
