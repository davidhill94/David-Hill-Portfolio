interface SectionHeaderProps{
    header: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ header }) => {
    return ( 
            <h1 className="text-[4rem] lg:text-[8rem] lg:rotate-[270deg] font-extrabold opacity-10 text-secondary">{header}</h1>
     );
}
 
export default SectionHeader;