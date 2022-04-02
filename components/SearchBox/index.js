import { FaSearch } from "react-icons/fa";
import tw from "tailwind-styled-components";

export const SearchBox = () => {
  return (
    <div className="flex justify-between">
      <div className="relative w-4/5">
        <div className="absolute top-2 left-0 text-[#cab32e]">
          <FaSearch />
        </div>
        <SearchInput
          className="w-full"
          placeholder="Search for songs, artists, mood"
        />
        <div className="absolute right-0 top-0">
          <SearchButton>Search</SearchButton>
        </div>
      </div>
    </div>
  );
};

const SearchInput = tw.input`
    bg-transparent
    outline-none
    pl-7
    border-b
    border-[#4E546B]
    text-[#4E546B]
    pt-1
    pb-[5px]
    focus:border-[#4E444B]
`;

const SearchButton = tw.button`
    bg-[#32353D]
    px-1
    rounded
`;
