import tw from "tailwind-styled-components";
import { BottomFooter } from "../../components/BottomFooter";
import "react-multi-carousel/lib/styles.css";
import WithScrollbar from "../../components/Carousel/CarouselCard";
import CarouselBar from "../../components/Carousel/CarouselBar";
export const MusicGallery = () => {
  return (
    <div className="ml-5">
      <div className="Newly mb-20">
        <div className="mb-8">
          <h1 className="font-normal text-3xl">Newly Added</h1>
        </div>
        <WithScrollbar />
      </div>
      <div>
        <div className="mb-8">
          <h1 className="font-normal text-3xl">Featured Genres</h1>
        </div>
        <CarouselBar />
      </div>
      <BottomFooter />
    </div>
  );
};

const GalleryWrapper = tw.div`
  pt-[30px]
  flex
  gap-10
`;
