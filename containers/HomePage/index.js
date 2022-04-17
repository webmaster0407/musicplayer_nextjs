import { MainCard } from "../../components/MainCard";
import { BiHomeAlt, BiSearchAlt2, BiWindows } from "react-icons/bi";
import { MdDescription, MdOutlineNfc } from "react-icons/md";
import { Artists, featuredSongs, genresCardInfo } from "../../data";
import { GenresCard } from "../../components/GenresCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const works = [
  {
    icon: "search",
    title: "Browse Sounds",
    text: "Find the music that brings your visuals to life.",
  },
  {
    icon: "license",
    title: "Mint Your License",
    text: "Get licenses for NFT art and metaverse productions so you are covered for any on-chain visual projects.",
  },
  {
    icon: "download",
    title: "Download and Go",
    text: "Grab your audio file and start creating!",
  },
];

const FeaturedBody = () => {
  return (
    <div className="flex flex-col mt-[10px] mb-20">
      <div className="text-whitesmoke font-normal text-[28px] text-center mt-[0.35em] mb-[0.7em] pb-[16px] mt-[70px]">
        Featured Artists
      </div>
      <div className="flex space-x-6 mt-8 mb-8">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper"
        >
          {Artists.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[200px] h-[200px] shrink-0 basis-[200px] ml-3"
              >
                <div className="w-[200px] h-[200px] shrink-0 mr-6">
                  <MainCard info={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="text-whitesmoke font-normal text-[28px] text-center mt-[0.35em] mb-[0.7em] pb-[16px] mt-[70px]">
        Featured Songs
      </div>
      <div className="flex space-x-6 mt-8 mb-8">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper"
        >
          {featuredSongs.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[200px] h-[200px] shrink-0 basis-[200px] ml-3"
              >
                <div className="w-[200px] h-[200px] shrink-0 mr-6">
                  <MainCard info={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="text-whitesmoke font-normal text-[28px] text-center mt-[0.35em] mb-[0.7em] pb-[16px] mt-[70px]">
        Featured Genres
      </div>
      <div className="flex space-x-6 mt-8 mb-20">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper"
        >
          {genresCardInfo.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[160px] h-[90px] shrink-0 basis-[160px] ml-3"
              >
                <div className="w-[160px] h-[90px] shrink-0 mr-6">
                  <GenresCard info={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* {genresCardInfo.map((item) => {
          return <GenresCard key={item.id} info={item} />;
        })} */}
      </div>

      <div className="text-whitesmoke font-normal text-[28px] text-center mt-[0.35em] mb-[0.7em] pb-[16px] mt-[70px]">
        How It Works
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        {works.map((work, i) => (
          <div className="ml-3 mr-4 flex flex-col sm:mr-10 w-[400px] " key={i}>
            <div className="w-[55px] h-[55px] flex items-center justify-center rounded-lg mb-[16px] bg-[#3f4664]">
              {/* <BiSearchAlt2 className="text-white text-3xl" /> */}
              {work.icon === "search" ? (
                <BiSearchAlt2 className="text-white text-3xl" />
              ) : work.icon === "license" ? (
                <MdDescription className="text-white text-3xl" />
              ) : (
                <MdOutlineNfc className="text-white text-3xl" />
              )}
            </div>
            <div className="text-[15px] sm:text-[20px] text-white mb-[20px]">
              {work.title}
            </div>
            <div className="text-[14px] sm:text-[19px] text-[#b3b9d3]">
              {work.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedBody;
