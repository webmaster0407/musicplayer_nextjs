const Hero = () => {
  return (
    <div className="mt-5 flex justify-center items-center flex-col text-center rounded-[20px] px-[24px] relative min-h-[360px] bg-[#97ae05] overflow-hidden bg-center gb-no-repeat bg-[url('/images/dequency-frequency.jpg')]">
      <div className="text-3xl ML:text-[3.2rem] font-bold ML:leading-[5rem]">
        The soundtrack to the{" "}
        <span className="margin-0 font-inherit text-[#dbf91d]">metaverse</span>.
      </div>
      <div className="p-3 text-lg font-normal ML:text-[1.5rem]">
        Dequency is building the first-ever decentralized music licensing
        marketplace for NFT art, metaverse productions and more!
      </div>
      <div className="flex flex-col justify-center mt-[20px] sm:inline">
        <button className="w-full bg-[#DBF91D] text-[#222801] text-[18px] p-2 m-2 outline-none rounded-md sm:w-[150px]">
          Browse Music
        </button>
        <button className="w-full bg-gray-100 text-[#222801] text-[18px] p-2 m-2 outline-none rounded-md text-[#dbf91d] sm:w-[150px]">
          Create Account
        </button>
      </div>
    </div>
  );
};
export default Hero;
