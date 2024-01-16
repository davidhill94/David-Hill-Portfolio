import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa6";
import SkillItem from "./skillItem";
import { SiJavascript, SiJquery, SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

const Skills = () => {
    return ( 
    <div className="bg-secondary w-full py-sectionV sm:py-sectionVSm xl:py-sectionVXl px-sectionH sm:px-sectionHSm xl:px-sectionHXl">
      <div className="flex flex-wrap items-center justify-center min-h-[40vh]">
          <SkillItem icon={<FaHtml5 />} name="HTML5" />
          <SkillItem icon={<FaCss3/>} name="CSS" />
          <SkillItem icon={<SiTailwindcss />} name="TailwindCSS" />
          <SkillItem icon={<FaReact />} name="React" />
          <SkillItem icon={<SiNextdotjs/>} name="Next.js" />
          <SkillItem icon={<FaNode />} name="Node.js" />
          <SkillItem icon={<SiJavascript />} name="JavaScript" />
          <SkillItem icon={<SiTypescript />} name="Typescript" />
          <SkillItem icon={<SiRedux />} name="Redux" />
          <SkillItem icon={<SiJquery />} name="jQuery" />
          <SkillItem icon={<SiMongodb />} name="MongoDB" />

      </div>
    </div> 
    );
}
 
export default Skills;