import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { animateScroll as scroll, Link as LinkS } from "react-scroll";
import logo from "../../public/images/logo.png";
import Social from "./social";

interface SidebarProps {
  toggle: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggle, isOpen }) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const linkStyle = "hover:text-tertiary cursor-pointer text-3xl font-semibold transition";

  return (
    <aside
      onClick={toggle}
      className={`fixed ${
        isOpen ? "left-0" : "-left-full"
      } top-0 w-full h-screen z-50 bg-primary flex items-center justify-center transition-all duration-300`}
    >
      <div
        onClick={toggle}
        className="absolute top-6 right-6 text-2xl cursor-pointer"
      >
        <FaTimes className="text-secondary hover:text-tertiary transition hover:scale-105" />
      </div>
      <div className="w-full">
        <ul className="flex flex-col items-center justify-center gap-8 text-secondary">
          <li>
            <LinkS
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={toggle}
              className={`${linkStyle}`}
            >
              ABOUT
            </LinkS>
          </li>
          <li>
            <LinkS
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={toggle}
              className={`${linkStyle}`}
            >
              PROJECTS
            </LinkS>
          </li>
          <li>
            <LinkS
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={toggle}
              className={`${linkStyle}`}
            >
              CONTACT
            </LinkS>
          </li>
          <Social />
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="object-contain cursor-pointer"
            onClick={toggleHome}
          ></Image>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
