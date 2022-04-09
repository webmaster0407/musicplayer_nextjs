import tw from "tailwind-styled-components";
import { AlbumHead } from "../../components/AlbumHead";
import { AlbumCard } from "../../components/AlbumCard";
import Link from "next/link";
export default function Album({ data }) {
  console.log(data);
  if (data)
    return (
      <>
        <div className="mt-10 ml-6 flex">
          <Link href="/discover" passHref>
            <a>discover</a>
          </Link>
          <a className="mx-3"></a>
          <Link href="/discover" passHref>
            <a>{data.auther}</a>
          </Link>
          <a className="mx-3"></a>
          <Link href="/discover" passHref>
            <a>{data.albumTitle}</a>
          </Link>
        </div>
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
