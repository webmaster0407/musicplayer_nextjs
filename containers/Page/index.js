import tw from "tailwind-styled-components";
import { Navbar } from "../Navbar";

export const Page = tw.section`
  w-full
  h-full
`;

export const PageWrapper = tw.div`
  m-auto
  h-[100vh]
`;
export const PageContent = ({ children }) => {
  return (
    <div className="bg-[#1B1E2B] h-[100vh] overflow-y-scroll p-[30px] text-white md:ml-[240px] ">
      {/* <SearchBox /> */}
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
