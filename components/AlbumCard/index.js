import Image from "next/image";
import Link from "next/link";
import IndexPage from "../MusicPlayer";
export const AlbumCard = ({ info }) => {
  return (
    <div className="flex w-full border-b-[1px] border-cyan-800 mb-3">
      <div>
        <Image src={info.image} width="160px" height="160px" alt="" />
      </div>
      <div className="ml-8 flex flex-col w-full">
        <div className="mb-2 block justify-between sm:flex">
          <div>
            <h1 className="text-lg font-semibold">{info.title}</h1>
            <div className="mb-6 flex text-xs">
              <a className="hover:text-yellow-300 cursor-pointer">
                {info.artist}
              </a>
              <a>-</a>
              <a className="hover:text-yellow-300 cursor-pointer">
                {info.album}
              </a>
            </div>
          </div>
          <div>
            <Link href="/licence">
              <a className="bg-[#fbbf24] border-[#3f4664] text-black h-[30px] text-xs pointer text-center mr-2 px-2 py-1 rounded-md">
                {info.license}
              </a>
            </Link>
          </div>
        </div>
        <div className="mb-5 flex w-full">
          {/* <MusicPlayer /> */}
          <IndexPage />
          {/* <button className="text-lg bg-[#2d3248] border-[#3f4664] font-semibold w-[50px] h-[50px] pointer text-center items-center rounded-full"></button> */}
          {/* <Wave /> */}
        </div>
        <div className="justify-between flex mr-3 mb-12">
          <div className="w-3/4">
            {info.types.map((item, index) => {
              return (
                <Link key={index} href="/link">
                  <a className="bg-[#2d3248] border-[#3f4664] h-[30px] text-xs pointer text-center mr-2 px-2 py-1 rounded-md">
                    {item}
                  </a>
                </Link>
              );
            })}
          </div>
          <div>1 version</div>
        </div>
      </div>
    </div>
  );
};
