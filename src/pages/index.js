import React, {useState} from 'react';
import About from '../components/About/About';
import { BackgroundSocial } from '../components/BackgroundSocial/BackgroundSocial';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import { ChapterOne, ChapterThree, ChapterTwo, EndLine } from '../components/PageBreak/PageBreak';
import Sidebar from '../components/Sidebar/Sidebar';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/ProjectsHome/ProjectsHome';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
      <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          <HeroSection />
          <ChapterOne />
          <About />
          <Skills />
          <ChapterTwo />
          <Projects />
          <ChapterThree />
          <Contact />
          <EndLine />
          <Footer />
      </>
  );
};

export default Home;
