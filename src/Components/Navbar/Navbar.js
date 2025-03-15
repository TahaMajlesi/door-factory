const Navbar = () => {
  return (
    <div className="w-full flex">
      <ul className="flex flex-row-reverse justify-around w-full font-[BYekan,sans] text-lg fixed top-0">
        <li className="p-2 hover:border-b-[2px] border-black">
          {" "}
          <a href="#!"> خانه </a>{" "}
        </li>{" "}
        <li className="p-2 hover:border-b-[2px] border-black">
          {" "}
          <a href="#!"> درباره ما </a>{" "}
        </li>{" "}
        <li className="p-2 hover:border-b-[2px] border-black">
          {" "}
          <a href="#!"> محصولات </a>{" "}
        </li>{" "}
        <li className="p-2 hover:border-b-[2px] border-black">
          {" "}
          <a href="#!"> مشتریان </a>{" "}
        </li>{" "}
        <li className="p-2 hover:border-b-[2px] border-black">
          {" "}
          <a href="#!"> همکار </a>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default Navbar;
