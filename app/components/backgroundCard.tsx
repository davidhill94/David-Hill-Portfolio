import { GiCardJoker } from "react-icons/gi";

interface BackgroundCardProps{
    center?: boolean,
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({ center }) => {
  return (
  <div className={`
  text-[30rem] 
  opacity-10 
  pointer-events-none 
  rotate-12
  absolute
  bottom-0
  -right-20
  text-secondary
  `}>
    <GiCardJoker />
  </div>
  )
};

export default BackgroundCard;
