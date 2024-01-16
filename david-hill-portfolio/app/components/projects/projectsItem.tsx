import { useRef } from "react";
import ProjectsCard from "./projectsCard";
import { ProjectsData } from "./projectsData";

interface RefObject {
  refCheck: () => void,
}

const ProjectsItem = () => {

  const ref = useRef<RefObject>(null);

  return (
    <div className="w-full h-full flex flex-wrap gap-8 items-center justify-center py-sectionV">
      {ProjectsData.map((card, index) => {
        return (
          <ProjectsCard card={card} index={index} key={index}/>
        );
      })}
    </div>
  );
};

export default ProjectsItem;
