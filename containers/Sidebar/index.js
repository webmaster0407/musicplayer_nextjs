import tw from "tailwind-styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSearch, FaHome, FaQuran } from "react-icons/fa";
import { useState, useEffect } from "react";

const url = [
  { to: "/", title: "Home", icon: <FaHome /> },
  { to: "/discover", title: "Discover", icon: <FaSearch /> },
  { to: "/faqs", title: "FAQs", icon: <FaQuran /> },
];

export const Sidebar = ({ open = true, toggle }) => {
  return (
    <SidebarWrapper
      className={open ? "left-0 ML:left-0" : "left-[-240px] ML:left-0"}
    >
      <ul>
        <div>
          <SideMenuItem className="pb-8">
            <Image src="/logo/logo.svg" width="174" height="28" alt="logo" />
            {open && <button onClick={toggle}>X</button>}
          </SideMenuItem>
        </div>
        {url.map((item, index) => {
          return (
            <SideMenuItem key={index}>
              <ItemWrapper>{item.icon}</ItemWrapper>
              <CustomLink to={item.to} title={item.title} />
            </SideMenuItem>
          );
        })}
      </ul>
    </SidebarWrapper>
  );
};

const CustomLink = ({ to, title }) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <a>{title}</a>
    </Link>
  );
};

const SidebarWrapper = tw.nav`
  z-10
  w-[240px]
  fixed
  top-0
  bottom-0
  pt-6
  bg-[#13151E]
  opacity-100
`;

const ItemWrapper = tw.div`
  pt-[2px]
`;

const SideMenuItem = tw.li`
  w-full
  px-6
  py-2
  flex
  gap-5
  text-[#B7BCD2]
  text-sm
  hover:text-white
  transition
  duration-300
`;

const SideLink = tw.a`
  ${({ visited = false }) => !!visited && "text-[#E3FA51]"}
  cursor-pointer
`;
