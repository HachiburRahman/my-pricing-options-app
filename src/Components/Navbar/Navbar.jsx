import React, { useState } from "react";
import { TextAlignJustify, X } from "lucide-react";
import Item from "./Item";

const Navitem = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const it = Navitem.map((item) => <Item item={item} key={item.id}></Item>);
  return (
    <nav className="flex justify-between items-center mx-10 my-4 ">
      <div className="flex items-center">
        {open ? (
          <TextAlignJustify
            className="lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          />
        ) : (
          <X
            className="lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          ></X>
        )}
        {/* bg-amber-100 text-black p-3 lg:hidden absolute top-15
  transform transition-all duration-300 ease-in-out */}

        <div
  className={`bg-amber-200 absolute lg:hidden p-2 ${open?"-top-40":"top-15"} duration-1000 text-black`}
>
  <ul>{it}</ul>
</div>


        <h1 className="font-semibold text-xl ml-3">DaisyUI</h1>
      </div>
      <div>
        <ul className="hidden lg:flex ">{it}</ul>
      </div>
      <button className="font-semibold btn">Button</button>
    </nav>
  );
};

export default Navbar;
