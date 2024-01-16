"use client";

import Image from "next/image";
import { useState } from "react";
import { useOutsideClick } from "../../utils/outsideClick";
import TechStack from "./techStack";
import ProjectsDescription from "./projectsDescription";

interface ProjectsCardProps{
    card: any,
    index: number
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ card, index }) => {

  const [clicked, setClicked] = useState(false);
  const [techClicked, setTechClicked] = useState(false);

  const handleTechClick = () => {
    setTechClicked(!techClicked);
  };

  const handleClick = () => {
    setClicked(!clicked)
    if(techClicked){
        setTechClicked(false);
    }
  };

  const ref = useOutsideClick(() => {
    setTechClicked(false);
    setClicked(false);
  });



  return (
    <div ref={ref} className={`w-[250px] hover:scale-105 transition shadow-card cursor-pointer flex flex-col m-6`}>
        {clicked ?
        <div className={`${clicked ? "bg-tertiary rounded-t-md" : "bg-secondary rounded-md"} h-[250px] w-[250px] hover:bg-tertiary flex items-center justify-center`} onClick={handleClick}>
        <Image src={card.image} alt={card.alt} className="w-[150px] h-auto"/>
      </div>
    :
    <div className={`${clicked ? "bg-tertiary rounded-t-md" : "bg-secondary rounded-md"} h-[250px] w-[250px] hover:bg-tertiary flex items-center justify-center`} onClick={handleClick}>
        <Image src={card.icon} alt={card.iconAlt} className="w-[150px] h-auto"/>
      </div>
    }
      <div 
      className={`${clicked ? "max-h-[450px] opacity-100 pointer-events-auto p-4" : "max-h-0 opacity-0 pointer-events-none p-4"} w-[250px] flex flex-col gap-4 items-center justify-between transition-all duration-1000 text-base bg-secondary ${clicked && techClicked ? "" : "rounded-b-md"}`}
      >
        <ProjectsDescription card={card} handleTechClick={handleTechClick} />
      </div>
      <TechStack techClicked={techClicked} card={card} />
    </div>
  );
};

export default ProjectsCard;
