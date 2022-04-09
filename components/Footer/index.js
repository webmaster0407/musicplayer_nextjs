import { BottomFooter } from "./BottomFooter";
const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-[-100px] h-[350px] mb-10 px-[100px] bg-[#DBF91D] text-[#222801] flex flex-col justify-center items-center">
        <div className="text-[32px] font-bold text-center mb-12">
          Your NFT needs a soundtrack.
          <br />
          Find it here.
        </div>
        <button className="text-[16px] font-semibold text-center bg-white p-2 rounded-md">
          Browse Music
        </button>
      </div>
      <BottomFooter />
    </div>
  );
};
export default Footer;
