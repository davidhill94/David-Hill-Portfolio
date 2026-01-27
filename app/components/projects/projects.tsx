"use client";

import BackgroundCard from "../backgroundCard";
import SectionHeader from "../sectionHeader";
import ProjectsItem from "./projectsItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="
  w-full 
  bg-primary 
  grid 
  grid-cols-wrapperMb 
  grid-rows-wrapperMb 
  lg:grid-rows-wrapperLg 
  lg:grid-cols-wrapperLg
  px-sectionH 
  sm:px-sectionHSm 
  xl:px-sectionHXl 
  py-sectionV 
  sm:py-sectionVSm 
  lg:py-[6rem] 
  xl:py-[8rem]
  relative 
  overflow-hidden
"
    >
      {/* Title stays EXACTLY where it originally was */}
      <div className="col-start-1 row-start-1 col-span-1 row-span-1 flex items-center justify-center">
        <SectionHeader header="Projects" />
      </div>

      <BackgroundCard />

      {/* Projects grid sits ONLY in column 2 on large screens */}
      <div className="col-start-1 lg:col-start-2 lg:col-span-1 lg:row-start-1 w-full h-auto">
        <ProjectsItem />
      </div>
    </div>
  );
};

export default Projects;
