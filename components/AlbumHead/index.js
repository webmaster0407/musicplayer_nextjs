import Image from "next/image";
import Link from "next/link";
export const AlbumHead = ({ data }) => {
  console.log(data);
  return (
    <div className="flex mb-20">
      <div className="shrink-0">
        <Image src={data.image} width="120" height="120" alt="" />
      </div>
      <div className="ml-8">
        <h1 className="text-3xl">{data.title}</h1>
        <p className="mb-6">{data.artist}</p>
        <Link href="/link">
          <a className="bg-[#2d3248] border-[#3f4664] font-semibold h-[35px] text-sm pointer text-center pt-2 pb-2 pl-3 pr-3 rounded-md">
            {data.types[0]}
          </a>
        </Link>
      </div>
    </div>
  );
};
