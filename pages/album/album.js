import tw from "tailwind-styled-components";
import { AlbumHead } from "../../components/AlbumHead";
import { AlbumCard } from "../../components/AlbumCard";
import Link from "next/link";
import { BreadCrumb } from "../../components/BreadCrumb";
export default function Album({ data }) {
  console.log(data);
  if (data)
    return (
      <>
        <BreadCrumb />

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
      </>
    );
  else return <div>AAA</div>;
}

const GalleryWrapper = tw.div` 
    pt-20
    pl-8 
    gap-10 
`;
