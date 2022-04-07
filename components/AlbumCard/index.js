import { MyImage } from "../MyImage";
import Link from "next/link";

export const AlbumCard = ({ src, title, license, desc }) => {
  return (
    <div className="flex w-full border-b-[1px] border-cyan-800 mb-10">
      <MyImage src={src} width="160" height="160" />
      <div className="ml-8 flex flex-col w-full">
        <div className="mb-2 flex justify-between">
          <div>
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="mb-6 text-xs">{desc}</p>
          </div>
          <div>
            <Link href="/licence">
              <a className="bg-[#fbbf24] border-[#3f4664] text-black h-[30px] text-xs pointer text-center mr-2 px-2 py-1 rounded-md">
                {license}
              </a>
            </Link>
          </div>
        </div>
        <div className="mb-2">
          <button className="text-lg bg-[#2d3248] border-[#3f4664] font-semibold w-[50px] h-[50px] pointer text-center items-center rounded-full"></button>
        </div>
        <div className="justify-between flex mr-3 mb-12">
          <div>
            <Link href="/link">
              <a className="bg-[#2d3248] border-[#3f4664] h-[30px] text-xs pointer text-center mr-2 px-2 py-1 rounded-md">
                Electronic
              </a>
            </Link>
            <Link href="/link">
              <a className="bg-[#2d3248] border-[#3f4664] h-[30px] text-xs pointer text-center mr-2 px-2 py-1 rounded-md">
                Vocal
              </a>
            </Link>
            <Link href="/link">
              <a className="bg-[#2d3248] border-[#3f4664] h-[30px] text-xs pointer text-center mr-2 px-2 py-1 rounded-md">
                Male
              </a>
            </Link>
          </div>
          <div className="text-">1 version</div>
        </div>
      </div>
    </div>
  );
};
