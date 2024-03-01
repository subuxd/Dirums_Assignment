import React from "react";
import Logo from "../assets/logo.png";
import save from "../assets/save.png";
import cart from "../assets/cart.png";
const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white justify-center text-center text-sm font-sans">
        Worldwide Shipping* | Free Returns* | Handpicked Artworks
      </div>
      <div className="bg-black px-6 py-2 flex justify-center gap-32 items-center">
        <div>
          <img src={Logo} />
        </div>
        <div className=" w-[40%]">
          <input className="p-2 w-full rounded-md" type="text" />
        </div>
        <div>
          <div className="flex gap-6">
            <img src={save} />
            <img src={cart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
