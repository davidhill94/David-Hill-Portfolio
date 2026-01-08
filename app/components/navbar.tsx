"use client";
import { useEffect, useState } from "react";
import logo from "../../public/images/profile-image3.jpg"
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { animateScroll as scroll, Link as LinkS } from "react-scroll";

interface NavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
      className={`h-[80px] flex justify-center items-center sticky bg-primary top-0 z-10 transition ${
        scrollY > 60 ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-[80px] z-50 w-full px-sectionH md:px-sectionHSm xl:px-sectionHXl">
        <div className="aspect-square flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={60}
            height={60}
            className="object-contain cursor-pointer"
            onClick={toggleHome}
          />
        </div>
        <div
          onClick={toggle}
          className="flex lg:hidden text-xl cursor-pointer hover:text-tertiary items-center justify-center text-secondary"
        >
          <FaBars />
        </div>
        <ul className="hidden items-center h=[80px] justify-between gap-8 lg:flex">
          <li className="h-[80px] font-semibold text-5xl flex items-center cursor-pointer text-secondary hover:text-tertiary">
            <LinkS
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              About
            </LinkS>
          </li>
          <li className="h-[80px] font-semibold text-5xl flex items-center cursor-pointer text-secondary hover:text-tertiary">
            <LinkS
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Projects
            </LinkS>
          </li>
          <li className="h-[80px] font-semibold text-5xl flex items-center cursor-pointer text-secondary hover:text-tertiary">
            <LinkS
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Contact
            </LinkS>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
