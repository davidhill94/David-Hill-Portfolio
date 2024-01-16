"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../utils/outsideClick";

interface ProjectsCardProps{
    card: any,
    index: number
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ card, index }) => {

  const [clicked, setClicked] = useState(false);
  const [techClicked, setTechClicked] = useState(false);
  const newRef = useRef<HTMLAudioElement>(null);

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
    <div ref={ref} className={`w-[250px] hover:scale-105 shadow-card cursor-pointer flex flex-col m-6`}>
        {clicked ?
        <div className={`${clicked ? "bg-tertiary rounded-t-md" : "bg-secondary rounded-md"} h-[250px] w-[250px] hover:bg-tertiary flex items-center justify-center`} onClick={handleClick}>
        <Image src={card.image} alt={card.alt} className="w-[150px] h-auto"/>
      </div>
    :
    <div className={`${clicked ? "bg-tertiary rounded-t-md" : "bg-secondary rounded-md"} h-[250px] w-[250px] hover:bg-tertiary flex items-center justify-center`} onClick={handleClick}>
        <Image src={card.icon} alt={card.alt} className="w-[150px] h-auto"/>
      </div>
    }
      <div 
      className={`${clicked ? "max-h-[450px] opacity-100 pointer-events-auto p-4" : "max-h-0 opacity-0 pointer-events-none p-4"} w-[250px] flex flex-col gap-4 items-center justify-between transition-all duration-1000 text-base bg-secondary ${clicked && techClicked ? "" : "rounded-b-md"}`}
      >
        <p>
          {card.info}
        </p>
        <div className="flex items-stretch justify-evenly gap-1 w-full text-[0.7rem]">
          <a className="border p-1 hover:bg-tertiary rounded">Github</a>
          <a className="border p-1 hover:bg-tertiary rounded">Website</a>
          <a className="border p-1 whitespace-nowrap hover:bg-tertiary rounded" onClick={handleTechClick}>Tech Stack</a>
        </div>
      </div>
      <div
        className={`w-[250px] bg-tertiary text-primary transition-all duration-1000 text-base ${
          techClicked ? "max-h-[350px] opacity-100 pointer-events-auto p-2 rounded-b-md" : "max-h-0 opacity-0 pointer-events-none p-0"
        }`}
      >
        {card.tech}
      </div>
    </div>
  );
};

export default ProjectsCard;
