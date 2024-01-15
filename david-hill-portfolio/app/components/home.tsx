"use client";

import React, {useState} from 'react';
import HeroSection from './herosection';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';


const Home = () => {

  return (
      <>
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
      </>
  );
};

export default Home;
