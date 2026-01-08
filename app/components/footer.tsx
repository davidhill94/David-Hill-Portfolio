import Social from "./social";

const Footer = () => {
    return ( 
    <div className="w-full h-48 py-sectionH sm:py=sectionHSm xl:py=sectionHXl flex flex-col items-center justify-center gap-4 text-secondary relative">
        <hr className="absolute top-0 w-1/2 mx-1/2 text-tertiary h-4 cursor-pointer"></hr>
        <Social large />
        <p className="px-4 text-center">Designed and built by myself using TypeScript, React, NextJs, TailwindCSS</p>
        <p className="px-4 text-center">&copy; {new Date().getFullYear()} David Hill. All rights reserved.</p>
    </div> 
    );
}
 
export default Footer;