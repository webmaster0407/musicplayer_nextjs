import Image from "next/image";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
export const GenresCard = ({ info }) => {
  console.log(info);
  const router = useRouter();
  return (
    // router.push('/?step=2', null, { shallow: true })
    //<Wrapper onClick={() => router.push(`/search/${info.id}`)}>
    <Wrapper onClick={() => router.push(`/search/?genres=${info.id}`)}>
      <Image src={info.image} width="160px" height="90px" alt="" />
      <p className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-bold text-xl z-20">
        {info.title}
      </p>
    </Wrapper>
  );
};

const Wrapper = tw.div`
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
  shrink-0
`;
