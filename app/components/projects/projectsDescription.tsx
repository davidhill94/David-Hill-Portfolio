interface ProjectsDescriptionProps{
    card: any,
    handleTechClick: () => void
}

const ProjectsDescription: React.FC<ProjectsDescriptionProps> = ({ card, handleTechClick }) => {
  return (
    <>
      <p className="pb-2">{card.info}</p>
      <div className="flex items-stretch justify-between gap-1 w-full text-[0.7rem]">
        <a
          href={card.github}
          target="_blank"
          className="border p-1 hover:bg-tertiary rounded w-full text-center"
        >
          Github
        </a>
        <a
          href={card.link}
          target="_blank"
          className="border p-1 hover:bg-tertiary rounded w-full text-center"
        >
          Website
        </a>
        <a
          className="border p-1 whitespace-nowrap hover:bg-tertiary rounded w-full text-center"
          onClick={handleTechClick}
        >
          Tech Stack
        </a>
      </div>
    </>
  );
};

export default ProjectsDescription;
