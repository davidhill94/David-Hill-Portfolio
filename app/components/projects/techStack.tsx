interface TechStackProps {
  card: any;
}

const TechStack: React.FC<TechStackProps> = ({ card }) => {
  return (
    <div className="text-primary text-base">
      {card.tech}
    </div>
  );
};

export default TechStack;