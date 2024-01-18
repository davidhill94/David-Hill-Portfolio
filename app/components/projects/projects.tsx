"use client";

import BackgroundCard from "../backgroundCard";
import SectionHeader from "../sectionHeader";
import ProjectsItem from "./projectsItem";

const Projects = () => {

  return (
    <div
      id="projects"
      className="w-full bg-primary grid grid-cols-wrapperMb grid-rows-wrapperMb lg:grid-rows-wrapperLg lg:grid-cols-wrapperLg px-sectionH sm:px-sectionHSm xl:px-sectionHXl py-sectionV sm:py-sectionVSm xl:py-sectionVXl relative overflow-hidden"
    >
      <div className="col-start-1 row-start-1 col-span-1 row-span-1 self-center lg:h-[600px] w-full flex items-center justify-center">
        <SectionHeader header="Projects" />
      </div>
      <BackgroundCard />
      <div className="col-start-1 lg:col-start-2 lg:row-start-1 row-span-1 col-span-2 xl:col-span-1 w-full h-auto">
        <ProjectsItem
        />
      </div>
    </div>
  );
};

export default Projects;
