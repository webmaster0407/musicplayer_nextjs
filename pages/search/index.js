import tw from "tailwind-styled-components";
import { Radio } from "../../components";
import { musicData, genres } from "../../dummyData";
import { useState, useEffect } from "react";
import PaginatedItems from "../../components/Pagenation";
import { useRouter } from "next/router";

const MusicGallery = ({ searchTerm, setSearchTerm }) => {
  const [data, setData] = useState(musicData);
  useEffect(() => {
    const newData = musicData.filter((item) => {
      if (
        item["title"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        item["artist"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        item["album"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        item.types[0].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        item.types[1].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        item.types[2].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        item["license"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      )
        return item;
    });

    setData(newData);
  }, [searchTerm]);
  const handleClick = (value) => {
    const _data = [...data];
    if (value === "Sort by: A-Z") {
      _data.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    if (value === "Sort by: Defalut") {
      _data.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    if (value === "Sort by: Z-A") {
      _data.sort(function (a, b) {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
    }
    setData(_data);
  };

  return (
    <Wrapper>
      <RadioWrapper>
        <p className="pb-5 text-yellow-400">GENRES</p>
        <GenreBox setSearchTerm={setSearchTerm} />
      </RadioWrapper>
      <MusicBoxWrapper>
        <div className="flex justify-between pb-5">
          <p>{data.length} Results</p>
          <select
            className="bg-[#1B1121] text-white border-none border-b-2"
            onChange={(event) => handleClick(event.target.value)}
          >
            <option>Sort by: Defalut</option>
            <option>Sort by: A-Z</option>
            <option>Sort by: Z-A</option>
          </select>
        </div>
        {/* <Hyper text={data} /> */}
        {/* {data.map((item, index) => {
          return <h1 key={index}>{item.title}</h1>;
        })} */}
        <PaginatedItems itemsPerPage={4} items={data} />
      </MusicBoxWrapper>
    </Wrapper>
  );
};

const GenreBox = ({ setSearchTerm }) => {
  return (
    <div className="flex flex-col">
      {genres.map((item) => (
        <Radio key={item.id} title={item.title} setSearchTerm={setSearchTerm} />
      ))}
    </div>
  );
};

const Wrapper = tw.div`
  pt-[30px]
  flex
  gap-10
  w-full
`;
const RadioWrapper = tw.div`
  w-1/4
`;
const MusicBoxWrapper = tw.div`
  w-3/4  
`;
export default MusicGallery;
