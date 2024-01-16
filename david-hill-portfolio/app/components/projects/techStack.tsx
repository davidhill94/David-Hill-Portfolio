interface TechStackProps{
    techClicked: boolean,
    card: any
}

const TechStack: React.FC<TechStackProps> = ({ techClicked, card }) => {
    return ( 
        <div
        className={`w-[250px] bg-tertiary text-primary transition-all duration-1000 text-base ${
          techClicked ? "max-h-[350px] opacity-100 pointer-events-auto p-2 rounded-b-md" : "max-h-0 opacity-0 pointer-events-none p-0"
        }`}
      >
        {card.tech}
      </div>
     );
}
 
export default TechStack;