import tw from "tailwind-styled-components";
import { SearchBox } from "../../components";

export const Page = tw.section`
  w-full
  h-full
`;

export const PageWrapper = tw.div`
  bg-[#13151E]
  m-auto
  h-[100vh]
`;
export const PageContent = ({ children }) => {
  return (
    <div className="ml-[240px] bg-[#1B1E2B] h-[100vh] overflow-y-scroll p-[30px] text-white">
      <SearchBox />
      <div>{children}</div>
    </div>
  );
};
