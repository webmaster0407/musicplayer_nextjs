import tw from "tailwind-styled-components";
import { SearchBox, Navbar } from "../Navbar";

export const Page = tw.section`
  w-full
  h-full
`;

export const PageWrapper = tw.div`
  bg-[#13151E]
  h-[100vh]
`;
export const PageContent = ({ children, toggle }) => {
  return (
    <div className="p-[0px] bg-[#1B1E2B] h-[100vh] overflow-y-scroll md:p-[30px] text-white ML:ml-[240px]">
      {/* <SearchBox /> */}
      <Navbar toggle={toggle} />
      <div>{children}</div>
    </div>
  );
};
