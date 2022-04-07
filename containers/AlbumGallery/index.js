import tw from "tailwind-styled-components";
import { AlbumHead } from "../../components/AlbumHead";
import { AlbumCard } from "../../components/AlbumCard";
export const AlbumGallery = ({ data }) => {
  if (data)
    return (
      <GalleryWrapper>
        <AlbumHead
          src={data.src}
          title={data.albumTitle}
          auther={data.auther}
        />
        {data.songs.map((item, index) => {
          return (
            <AlbumCard
              src={data.src}
              key={index}
              title={item.title}
              desc={item.desc}
              license={item.license}
            />
          );
        })}
      </GalleryWrapper>
    );
  else return <div>AAA</div>;
};

const GalleryWrapper = tw.div`
  pt-20
  pl-8
  gap-10
`;
