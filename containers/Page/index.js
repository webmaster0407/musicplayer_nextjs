import tw from "tailwind-styled-components";
import { Navbar } from "../Navbar";
import React from "react";

export const Page = tw.section`
  w-full
  h-full
`;

export const PageWrapper = tw.div`
  bg-[#13151E]
  overflow-hidden
`;
export const PageContent = ({ children, setSearchTerm, searchTerm }) => {
  return (
    <div className="p-[0px] bg-[#1B1E2B] min-h-screen md:p-[30px] text-white ML:ml-[240px]">
      {/* <SearchBox /> */}
      {/* <Navbar toggle={toggle} setSearchTerm={setSearchTerm} /> */}
      <div>
        {React.cloneElement(children, {
          searchTerm: searchTerm,
          setSearchTerm: setSearchTerm,
        })}
      </div>
    </div>
  );
};
