import tw from "tailwind-styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { SearchBox } from "../../components/SearchBox";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "../Sidebar";

const url = [
  { to: "/login", title: "Login" },
  { to: "/signup", title: "Create Account" },
];

export const Navbar = () => {

  return (
    <NavbarWrapper>
      <GiHamburgerMenu
        className="md:hidden text-3xl shrink-0 mr-5"
      />
      <NavMenuItem>
        <SearchBox />
      </NavMenuItem>

      <TopRight>
        <Link href="/login">
          <a className="text-yellow-400 hover:underline">Login</a>
        </Link>
        <StyledCustomLink to="signup" title="Create Account" />
      </TopRight>
    </NavbarWrapper>
  );
};

export const StyledCustomLink = ({ to, title }) => {
  const router = useRouter();
  return (
    <Link href={to} passHref={true}>
      <Con visited={to === router.pathname}>{title}</Con>
    </Link>
  );
};

// const StyledCustomLink = tw.nav`
//   ml-10
// `;
const NavbarWrapper = tw.nav`
  flex
  mb-12
  ml-4
  justify-between
  items-center
  `;

const NavMenuItem = tw.li`
  w-full
  text-[#B7BCD2]
  text-sm
  hover:text-white
  transition
  duration-300
  list-none
  mt-1
`;

const NavLink = tw.a`
  ${({ visited = false }) => !!visited && "text-[#E3FA51]"}
  cursor-pointer
`;

const TopRight = tw.div`
  flex
  ml-5
  mr-5
  justify-between
  items-center
`;
const Con = tw.a`
  bg-[#2d3248] 
  border-[#3f4664] 
  w-[127px] 
  font-semibold 
  h-[35px] 
  text-sm 
  pointer
  list-none
  text-center
  ml-6
  p-1
  rounded-md
`;
