import tw from "tailwind-styled-components";
import Image from "next/image";
import { FaSearch, FaHome, FaQuran } from "react-icons/fa";
import { CustomLink } from "../../components/CustomLink";

const url = [
  { to: "/", title: "Home", icon: <FaHome /> },
  { to: "/discover", title: "Discover", icon: <FaSearch /> },
  { to: "/faqs", title: "FAQs", icon: <FaQuran /> },
];

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <ul>
        <SideMenuItem className="pb-8">
          <Image src="/logo/logo.svg" width="174" height="28" alt="logo" />
        </SideMenuItem>
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

const SidebarWrapper = tw.nav`
  left-[-240px]
  md:left-[0px]
  w-[240px]
  fixed
  top-0
  bottom-0
  pt-6
  bg-[#13151E]

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
