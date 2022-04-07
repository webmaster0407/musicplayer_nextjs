import tw from "tailwind-styled-components";
import Link from "next/link";
import { MyImage } from "../MyImage";
export const MusicCard = ({ src, title, subtitle1, subtitle2, to }) => {
  return (
    <Wrapper>
      <Container>
        <Link href={to}>
          <a>
            <MyImage src={src} width="120" height="120" />
            <p className="text-sm font-semibold mt-1">{title}</p>
            <p className="text-sm font-semibold mt-1">{subtitle1}</p>
            <p className="text-xs font-normal mt-0.5">{subtitle2}</p>
          </a>
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex  
  flex-col
  mr-8
`;
const Container = tw.div`
  rounded-lg
  w-[120px]
`;
