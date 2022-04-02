import tw from "tailwind-styled-components";
import { Radio, MusicCard } from "../../components";

const radioInfo = [
  "Funk",
  "Holiday",
  "R&B",
  "Rock",
  "Indie Folk",
  "Electronic",
  "Hip-Hop/Rap",
  "Trailer",
];

const musicInfo = [
  {
    title: "Highfalutin",
    type: "Funk",
    licence: "$60-$75",
    keyword: "Electronic,Instrumental,Up-Beat",
    sub1: "GoldFish",
    sub2: "Caught In The Loop",
  },
  {
    title: "Get Busy Living (feat. Emily Bruce)",
    type: "Funk",
    licence: "$60-$75",
    keyword: "Electronic,Vocal,Female",
    sub1: "GoldFish",
    sub2: "Get Busy Living",
  },
];

export const MusicGallery = () => {
  return (
    <GalleryWrapper>
      <RadioBox></RadioBox>
      <MusicBox></MusicBox>
    </GalleryWrapper>
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
      {musicInfo.map((item, index) => (
        <MusicCard info={item} key={index} />
      ))}
    </div>
  );
};
const GalleryWrapper = tw.div`
  pt-[30px]
  flex
  gap-10
`;
