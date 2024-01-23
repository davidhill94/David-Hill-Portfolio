interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name }) => {
  return (
    <div className="group relative m-8 lg:m-12 flex justify-center text-6xl">
      {icon}
      <span className="absolute bottom-20 scale-0 transition-all rounded bg-tertiary p-3 text-xs text-primary group-hover:scale-100 shadow-[rgba(255,_255,_255,_0.1)_0px_0px_8px]">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
