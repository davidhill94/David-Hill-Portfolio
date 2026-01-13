import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="flex w-full flex-col md:flex-row h-screen relative pt-[80px] bg-primary"
    >
      {/* Background Text */}
      <h2 className="opacity-10 hidden md:flex md:text-[200px] lg:text-[300px] xl:text-[400px] h-[100px] lg:h-[300px] items-center justify-center text-secondary absolute top-0 right-0 font-extrabold pointer-events-none">
        DA
      </h2>
      <h2 className="opacity-10 hidden md:flex md:text-[200px] lg:text-[300px] xl:text-[400px] h-[150px] lg:h-[300px] items-center justify-center text-secondary absolute bottom-0 left-0 font-extrabold pointer-events-none">
        VID
      </h2>

      {/* Left Image */}
      {/* Left Image */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        <div className="relative w-3/4 h-96 md:h-[500px] lg:h-[600px]">
          <Image
            src="/images/hero-text.png"
            alt="David Hill Front End Developer"
            fill
            className="object-contain"
          />
        </div>
      </div>

     {/* Right Image */}
<div className="w-full h-full md:w-1/2 relative flex justify-center md:justify-end items-center md:items-end p-0">
  <div className="relative w-full h-full lg:h-[850px]">
    <Image
      src="/images/hero-me.png"
      alt="David Hill"
      fill
      className="object-contain"
    />
  </div>
</div>

    </div>
  );
};

export default HeroSection;
