import tw from "tailwind-styled-components";
import { AlbumHead } from "../../components/AlbumHead";
import { AlbumCard } from "../../components/AlbumCard";
import Link from "next/link";
import { BreadCrumb } from "../../components/BreadCrumb";
export default function Album({ data }) {
  console.log(data);
  if (data.length !== 0)
    return (
      <>
        <BreadCrumb data={data[0]} />

        <GalleryWrapper>
          <AlbumHead data={data[0]} />
          {data.map((item) => (
            <AlbumCard key={item.id} info={item} />
          ))}
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
