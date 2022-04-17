import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { SearchBox } from "../../components/SearchBox";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const handleLeftSidebar = () => {
    props.toggle();
  };
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="top-4 sm:top-4 sm:ml-[220px] sm:mt-2 sm:px-4">
      {/* navbar */}
      <div className="relative w-full flex h-14 items-center justify-between px-4 shadow-lg text-white">
        <div>
          <GiHamburgerMenu
            className="flex ML:hidden text-3xl shrink-0 mr-5 hover:bg-gray-400 hover:text-gray-900"
            onClick={handleLeftSidebar}
          />
        </div>
        <div className="inline ML:hidden">
          <Image
            src="/logo/logo.svg"
            width="174"
            height="28"
            alt="logo"
            style={{ display: "none" }}
          />
        </div>
        <SearchBox setSearchTerm={props.setSearchTerm} />
        <div className="flex sm:hidden ">
          <FaSearch className="text-lg text-yellow-400 mr-12 ml-4" />
          <button
            className="p-2 rounded-full absolute top-1 right-1 transition"
            onClick={handleSidebar}
          >
            <FaUserCircle className="text-3xl text-[#dbf91d]" />
          </button>
        </div>
        <div className="hidden sm:block">
          <ul className="flex">
            <li className="text-yellow-400 mr-3 hover:underline">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li className="mr-3">or</li>
            <li className="w-[120px] bg-[#2d3248] border-[#3f4664] font-semibold h-[35px] text-sm pointer list-none text-center p-1 rounded-md">
              <Link href="/signup">
                <a>Create Account</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* sidebar container */}
      <div className="rounded-lg">
        {/* sidebar overlay */}
        <div
          className={
            sidebar
              ? "bg-black cursor-pointer fixed inset-0 opacity-0 visible z-10"
              : "hidden opacity-0"
          }
          onClick={handleSidebar}
        ></div>
        {/* sidebar */}
        <div
          className={
            sidebar
              ? "bg-white fixed right-6 duration-300 transition-right top-24 w-36 z-20 rounded-lg"
              : "bg-white fixed -right-full mt-10 w-64"
          }
        >
          {/* sidebar menu */}
          <ul className="font-normal text-gray-500">
            <li onClick={handleSidebar}>
              <Link href="/login">
                <a className="bg-gray-100 font-medium inline-flex items-center px-4 py-2 transition w-full hover:text-yellow-500">
                  Login
                </a>
              </Link>
            </li>
            <li onClick={handleSidebar}>
              <Link href="/login">
                <a className="inline-flex items-center px-4 py-2 transition w-full hover:text-yellow-500">
                  Create Account
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
