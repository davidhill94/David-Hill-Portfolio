import React from 'react';
import { 
  FaHtml5, 
  FaCss3, 
  FaBootstrap, 
  FaSass, 
  FaReact, 
  FaNode } from 'react-icons/fa';
import { 
  SiJavascript, 
  SiRedux,
  SiJquery } from 'react-icons/si'
import { 
SkillsContainer,
Skill 
} from './SkillsElements';

const Skills = () => {
  return (
      <SkillsContainer>
          <Skill>
            <FaHtml5 />
          </Skill>
          <Skill>
            <FaCss3 />
          </Skill>
          <Skill>
            <FaBootstrap />
          </Skill>
          <Skill>
            <FaSass />
          </Skill>
          <Skill>
            <SiJavascript />
          </Skill>
          <Skill>
            <SiJquery />
          </Skill>
          <Skill>
            <FaReact />
          </Skill>
          <Skill>
            <SiRedux />
          </Skill>
          <Skill>
            <FaNode />
          </Skill>
      </SkillsContainer>
  )
};

export default Skills;
