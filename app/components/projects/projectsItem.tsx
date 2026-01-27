import ProjectsCard from "./projectsCard";
import { ProjectsData } from "./projectsData";

const ProjectsItem = () => {
  return (
    <div
      className="
        w-full
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
        py-sectionV
        justify-items-center
        items-start
      "
    >
      {ProjectsData.map((card, index) => (
        <ProjectsCard card={card} index={index} key={index} />
      ))}
    </div>
  );
};

export default ProjectsItem;