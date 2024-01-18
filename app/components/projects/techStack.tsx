interface TechStackProps{
    techClicked: boolean,
    card: any
}

const TechStack: React.FC<TechStackProps> = ({ techClicked, card }) => {
    return ( 
        <div
        className={`w-[250px] bg-tertiary text-primary transition-all duration-500 text-base px-2 ${
          techClicked ? "max-h-[350px] opacity-100 pointer-events-auto rounded-b-md py-2" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        {card.tech}
      </div>
     );
}
 
export default TechStack;