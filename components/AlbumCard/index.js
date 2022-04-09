import Image from "next/image";
import Link from "next/link";
import Wave from "../Wave";
import { FaPlayCircle } from "react-icons/fa";
import MusicPlayer from "../MusicPlayer";
export const AlbumCard = ({ src, title, license, desc }) => {
  return (
    <div className="flex w-full border-b-[1px] border-cyan-800 mb-3">
      <div>
        <Image src={src} width="160px" height="160px" alt="" />
      </div>
      <div className="ml-8 flex flex-col w-full">
        <div className="mb-2 block justify-between sm:flex">
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
        <div className="mb-5 flex">
          {/* <MusicPlayer /> */}

          {/* <FaPlayCircle className="text-5xl text-[#2d3248] hover:text-yellow-400 items-center pointer " /> */}
          {/* <button className="text-lg bg-[#2d3248] border-[#3f4664] font-semibold w-[50px] h-[50px] pointer text-center items-center rounded-full"></button> */}
          {/* <Wave /> */}
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
