import tw from "tailwind-styled-components";
import { FaDiscord, FaTwitter, FaFlickr } from "react-icons/fa";
import Link from "next/link";
import { footerUrl } from "../../data";

export const BottomFooter = () => {
  return (
    <div className="flex justify-between">
      <div className="text-xs font-normal text-[#7F88AE]">
        @ 2022 Dequencey Music Inc
      </div>
      <div className="flex">
        <FaFlickr className="mr-3 ml-3 text-xl sm:text-3xl sm:mr-7" />
        <FaTwitter className="mr-3 text-xl sm:text-3xl sm:mr-7" />
        <FaDiscord className="mr-3 text-xl sm:text-3xl sm:mr-7" />
      </div>
      <ul className="flex">
        <li>
          <Link href="/">
            <a className="text-xs mr-3 hover:underline sm:text-sm">
              DMCA Policy
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-xs mr-3 hover:underline sm:text-sm">
              Terms of Service
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-xs mr-3 hover:underline sm:text-sm">
              Privacy Policy
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
