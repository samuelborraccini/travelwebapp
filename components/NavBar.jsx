import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { key: "home", label: "Home", href: "/" },
  { key: "how_it_works", label: "How it Works?", href: "/" },
  { key: "Home", label: "Prices", href: "/" },
  { key: "Home", label: "Contact Us", href: "/" },
];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-2 md:px-12 py-4">
      <Link href={"/"}>
        <Image
          src={"/images/brandlogo.png"}
          className="md:w-[110px] w-20"
          width={110}
          height={1}
        />
      </Link>
      <ul className="md:flex space-x-8 text-slate-500 text-lg hidden">
        {navLinks.map((e) => (
          <li className="hover:text-black cursor-pointer hover:font-bold duration-150">
            {e.label}
          </li>
        ))}
      </ul>
      <button className="md:flex hidden bg-slate-700 hover:bg-black duration-200 text-white justify-between items-center px-10 py-4 rounded-full">
        <AiOutlineUser size={35} />
        <div className="pl-2 font-extrabold text-xl">Login</div>
      </button>
      <AiOutlineMenu size={30} className="md:hidden" />
    </nav>
  );
};

export default NavBar;
