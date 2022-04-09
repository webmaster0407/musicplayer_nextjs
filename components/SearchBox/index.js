import { FaSearch } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import tw from "tailwind-styled-components";
import { useState } from "react";
export const SearchBox = () => {
  const [focused, setFocused] = useState(false);
  const handleClick = () => {
    setFocused(true);
  };
  return (
    <div className="hidden justify-between w-full items-center ML:flex">
      <div className="relative w-full mr-6">
        <Wrapper>
          <div className="absolute top-3 left-1 text-gray-200 text-lg">
            <FaSearch />
          </div>
          <SearchInput
            type="text"
            placeholder="Search for songs, artists, mood"
            onClick={handleClick}
          />
          {focused && (
            <div className="absolute right-0 top-2 items-center flex">
              <AiFillCloseSquare
                className="text-xl text-[#7F88AE] bg-white rounded-sm"
                onClick={() => {
                  setFocused(false);
                }}
              />
              <SearchButton>Search</SearchButton>
            </div>
          )}
        </Wrapper>
      </div>
    </div>
  );
};

const Wrapper = tw.div`    
  hidden
  ML:flex
  bg-[#1B1E32]
  w-full
  h-auto
  p-2
  items-center
  hidden
`;
const SearchInput = tw.input`
    w-full
    bg-transparent
    outline-none
    pl-7
    border-b-blue-300
    border-solid
    border-b-2
    text-[#ffffff]
    pt-1
    pb-[5px]
    focus:border-[#ffffff]
`;

const SearchButton = tw.button`
    bg-[#32353D]
    px-1
    rounded
    ml-3
    text-gray-400
`;
