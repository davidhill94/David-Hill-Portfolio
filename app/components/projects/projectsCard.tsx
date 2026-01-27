"use client";

import Image from "next/image";
import { useState } from "react";
import { useOutsideClick } from "../../utils/outsideClick";
import ProjectsDescription from "./projectsDescription";
import TechStack from "./techStack";

interface ProjectsCardProps {
  card: any;
  index: number;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ card, index }) => {
  const [open, setOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setOpen(false);
    setTechOpen(false);
  });

  const handleCardClick = () => {
    setOpen(!open);
    if (techOpen) setTechOpen(false);
  };

  const handleTechClick = () => {
    setTechOpen(!techOpen);
  };

  return (
    <div
      ref={ref}
      className="
        w-full
        max-w-[250px]
        bg-fourth
        shadow-card
        rounded-md
        overflow-hidden
        cursor-pointer
        transition
        hover:scale-105
        flex
        flex-col
      "
    >
      {/* CARD IMAGE */}
      <div
        className={`
          ${open ? "bg-tertiary" : "bg-secondary"}
          hover:bg-tertiary
          w-full
          aspect-square
          flex items-center justify-center
        `}
        onClick={handleCardClick}
      >
        <div className="relative w-[70%] h-[70%]">
          <Image
            src={open ? card.image : card.icon}
            alt={open ? card.alt : card.iconAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* DESCRIPTION + BUTTONS */}
      <div
        className={`
          w-full
          bg-secondary
          overflow-hidden
          transition-all duration-500
          ${open ? "max-h-[500px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"}
        `}
      >
        <ProjectsDescription
          card={card}
          handleTechClick={handleTechClick}
        />
      </div>

      {/* TECH STACK */}
      <div
        className={`
          w-full
          bg-secondary
          overflow-hidden
          transition-all duration-500
          ${techOpen ? "max-h-[350px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"}
        `}
      >
        <TechStack card={card} />
      </div>
    </div>
  );
};

export default ProjectsCard;