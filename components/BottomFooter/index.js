import tw from "tailwind-styled-components";
import { FaDiscord, FaTwitter, FaFlickr } from "react-icons/fa";
import { CustomLink } from "../CustomLink";

import { footerUrl } from "../../data";

export const BottomFooter = () => {
  return (
    <Wrapper>
      <About>@ 2022 Dequencey Music Inc</About>
      <SocialLink>
        <FaFlickr className="mr-7 text-3xl" />
        <FaTwitter className="mr-7 text-3xl" />
        <FaDiscord className="mr-7 text-3xl" />
      </SocialLink>
      <ul className="flex">
        {footerUrl.map((item, index) => {
          return (
            <li key={index} className="mr-6">
              <CustomLink to={item.to} title={item.title} />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = tw.div`
    flex
    justify-between
`;
const About = tw.div`
    text-xs
    font-normal
    text-[#7F88AE]
`;
const SocialLink = tw.div`
    flex
`;
