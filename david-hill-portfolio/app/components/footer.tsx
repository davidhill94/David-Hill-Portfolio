import Social from "./social";

const Footer = () => {
    return ( 
    <div className="w-full h-48 py-sectionH sm:py=sectionHSm xl:py=sectionHXl flex flex-col items-center justify-center gap-4 text-secondary relative">
        <hr className="absolute top-0 w-1/2 mx-1/2 text-tertiary h-4 cursor-pointer"></hr>
        <Social large />
        <p>Website built by myself using React, NextJs, TailwindCSS</p>
        <p>&copy; {new Date().getFullYear()} Hillside Crafts. All rights reserved.</p>
    </div> 
    );
}
 
export default Footer;