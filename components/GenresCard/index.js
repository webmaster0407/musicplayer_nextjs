import Link from "next/link";
import tw from "tailwind-styled-components";
import { MyImage } from "../MyImage";

export const GenresCard = ({ to, src, title }) => {
  return (
    <Wrapper>
      <Link href={to}>
        <a>
          <div className="relative w-[160px] h-[90px]">
            <div className="absolute top-0 left-0 right-0 bottom-0  bg-black bg-opacity-60 z-10 rounded-2xl"></div>
            <MyImage src={src} width="160px" height="90px" />
            <p className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-bold text-xl z-20">
              {title}
            </p>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full
  flex
  mb-20
`;
