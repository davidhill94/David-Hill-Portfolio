import Image from "next/image";
import backgroundImg from "../../public/images/background-img-hero.png";
import backgroundText from "../../public/images/background-text-hero.png";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="flex w-full flex-col md:flex-row h-[750px] md:h-[650px] lg:min-h-[850px] xl:min-h-[100vh] bg-primary relative md:-mt-[80px] mt-[80px] overflow-hidden"
    >
      <h2 className="opacity-10 hidden md:flex md:text-[200px] lg:text=[300px] xl:text-[400px] h-[100px] lg:h-[300px] items-center justify-center text-secondary absolute top-0 right-0 font-extrabold pointer-events-none">
        DA
      </h2>
      <h2 className="opacity-10 hidden md:flex md:text-[200px] lg:text=[300px] xl:text-[400px] h-[100px] lg:h-[300px] items-center justify-center text-secondary absolute bottom-0 left-0 font-extrabold pointer-events-none">
        VID
      </h2>
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        <div className="flex w-1/2 h-full relative">
          <Image
            src={backgroundText}
            alt="David Hill Front End Developer"
            className="object-contain"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-end justify-end relative p-6">
        <div className="flex w-full h-full lg:h-full relative">
          <Image
            src={backgroundImg}
            alt="David Hill"
            className="object-contain"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
