import * as React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaH } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="flex items-center top-8 sticky z-10 ">
      <ul className="flex space-x-8 text-[#bac2de] font-semibold text-sm box-border border-[1px] w-fit px-8 py-4 rounded-full border-gray-500 backdrop-blur-sm">
        <Link
          href="./"
          className="hover:text-[#FFFFFF] transition-colors duration-300"
        >
          <FaHome size={24} />
        </Link>
        <Link
          href="./projects"
          className="hover:text-[#FFFFFF] transition-colors duration-300"
        >
          Projects
        </Link>
        <Link
          href="./about"
          className="hover:text-[#FFFFFF] transition-colors duration-300"
        >
          About
        </Link>
      </ul>
    </div>
  );
}
