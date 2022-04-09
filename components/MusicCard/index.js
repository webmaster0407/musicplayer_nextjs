import Image from "next/image";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";

export default function MusicCard({ info }) {
  const router = useRouter();
  return (
    <Wrapper onClick={() => router.push(`/album/${info.id}`)}>
      <div className="flex flex-col w-[120px] h-[180px]">
        <Image
          src={info.image}
          width={120}
          height={120}
          objectFit="cover"
          className="rounded-lg"
          alt=""
        />
        <p className="text-sm font-semibold mt-1">{info.cName}</p>
        <p className="text-sm font-semibold mt-1">{info.title}</p>
        <p className="text-xs font-normal mt-0.5">{info.auther}</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = tw.div`
  shrink-0
  flex
  rounded-lg 
  overflow-hidden 
  shadow-xl 
  cursor-pointer 
  border-[3px] 
  border-[#f9f9f9] 
  border-opacity-10 
  hover:boder-opacity-80 
  hover:shadow-2xl transform 
  hover:scale-105 
  transition duration-300
`;
