import { MyImage } from "../MyImage";
import Link from "next/link";
export const AlbumHead = ({ src, title, auther }) => {
  return (
    <div className="flex mb-20">
      <MyImage src={src} width="120" height="120" />
      <div className="ml-8">
        <h1 className="text-3xl">{title}</h1>
        <p className="mb-6">{auther}</p>
        <Link href="/link">
          <a className="bg-[#2d3248] border-[#3f4664] font-semibold h-[35px] text-sm pointer text-center pt-2 pb-2 pl-3 pr-3 rounded-md">
            Electronic
          </a>
        </Link>
      </div>
    </div>
  );
};
