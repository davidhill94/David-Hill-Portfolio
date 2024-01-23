import BackgroundCard from "../backgroundCard";
import SectionHeader from "../sectionHeader";
import profile from "../../../public/images/profile-image3.jpg";
import Image from "next/image";
import AboutHeader from "./aboutHeader";
import AboutContent from "./aboutContent";

const About = () => {
  return (
<div
  id="about"
  className="bg-primary w-full h-fit lg:h-min grid grid-cols-wrapperMb grid-rows-wrapperMb lg:grid-rows-wrapperLg lg:grid-cols-wrapperLg sm:px-sectionHSm xl:px-sectionHXl py-sectionV sm:py-sectionVSm xl:py-sectionVXl relative overflow-hidden"
>
  <div className="col-start-1 row-start-1 col-span-1 row-span-1 min-h-auto lg:h-[600px] w-full flex items-center justify-center">
    <SectionHeader header="About" />
  </div>  
  <div className="flex flex-col lg:flex-row col-start-1 lg:col-start-2 row-start-2 lg:row-start-1 row-span-1 col-span-2 xl:col-span-2 h-auto w-full items-center justify-start px-6 xl:pl-[6rem] gap-8 lg:gap-4">
    <Image 
      src={profile}
      alt="David Hill"
      className="w-[300px] h-auto lg:h-[400px] lg:w-auto object-contain rounded-xl"
    />
    
    <div className="flex flex-col items-center justify-center text-center lg:text-start lg:items-start lg:justify-start w-full lg:w-[38rem] xl:w-[40rem] min-h-[300px] gap-4 lg:px-0 lg:pr-8">
      <AboutHeader />
      <AboutContent />
    </div>
  </div>
  <BackgroundCard />
</div>
  );
};

export default About;
