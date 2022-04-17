import tw from "tailwind-styled-components";
import { BottomFooter } from "../components/Footer/BottomFooter";
import { GenresCard } from "../components/GenresCard";
import MusicCard from "../components/MusicCard";
import { genresCardInfo, musicData } from "../data";
import { genres } from "../dummyData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MusicGallery = () => {
  return (
    <>
      <div className="ml-5 mt-12">
        <h1 className="font-normal text-2xl">Newly Added</h1>
        <div className="flex space-x-6 mt-8 mb-8">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper"
          >
            {musicData.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="w-[120px] shrink-0 basis-[120px] ml-3"
                >
                  <div className="w-[120px] shrink-0 mr-6">
                    <MusicCard info={item} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* {musicData.map((item) => {
          return <MusicCard key={item.id} info={item} />;
        })} */}
        </div>
        <h1 className="font-normal text-3xl">Featured Genres</h1>
        <div className="flex space-x-6 mt-8 mb-20">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper"
          >
            {genres.map((item) => {
              if (item.featured == true)
                return (
                  <SwiperSlide
                    key={item.id}
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
        <BottomFooter />
      </div>
    </>
  );
};

const GalleryWrapper = tw.div`
  pt-[30px]
  flex
  gap-10
`;

export default MusicGallery;
