import { FaSearch } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import tw from "tailwind-styled-components";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
export const SearchBox = ({ setSearchTerm }) => {
  const [focused, setFocused] = useState(false);
  const [state, setState] = useState("");
  const initial = useRef(true);
  const router = useRouter();
  const handleClick = () => {
    setFocused(true);
  };
  const handleBtnClick = () => {
    setSearchTerm(state);
    router.push("/search/?genres");
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
            id="searchInput"
            placeholder="Search for songs, artists, mood"
            onClick={handleClick}
            onChange={(event) => setState(event.currentTarget.value)}
            onKeyUp={(event) => {
              if (event.code === "Enter") {
                handleBtnClick();
              }
            }}
            value={state}
          />
          {focused && (
            <div className="absolute right-0 top-2 items-center flex">
              <AiFillCloseSquare
                className="text-xl text-[#7F88AE] bg-white rounded-sm"
                onClick={() => {
                  setFocused(false);
                  setState("");
                  document.getElementById("searchInput").value = "asdf";
                }}
              />
              <SearchButton onClick={handleBtnClick}>Search</SearchButton>
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
  bg-transparent
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
