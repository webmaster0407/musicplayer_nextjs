import tw from "tailwind-styled-components";
import { Radio, MusicPlayer } from "../../components";
import { radioInfo, musicBarInfo } from "../../data";
import { AlbumCard } from "../../components/AlbumCard";
const MusicGallery = () => {
  return (
    <Wrapper>
      <RadioWrapper>
        <p className="pb-5">GENRES</p>
        <RadioBox />
      </RadioWrapper>
      <MusicBoxWrapper>
        <div className="flex justify-between pb-5">
          <p>437 Results</p>
          <select className="text-black">
            <option>Sort by: Defalut</option>
            <option>Sort by: A-Z</option>
            <option>Sort by: Z-A</option>
          </select>
        </div>
        <MusicBox />
      </MusicBoxWrapper>
    </Wrapper>
  );
};

const RadioBox = () => {
  return (
    <div className="flex flex-col">
      {radioInfo.map((item, index) => (
        <Radio key={index} title={item} />
      ))}
    </div>
  );
};

const MusicBox = () => {
  return (
    <div className="flex flex-col">
      {musicBarInfo.map((item, index) => (
        <AlbumCard
          src={item.image}
          title={item.title}
          license={item.license}
          desc={item.desc}
          key={index}
        />
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
