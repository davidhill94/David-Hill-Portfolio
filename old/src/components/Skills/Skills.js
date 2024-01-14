import React from 'react';
import { 
  FaHtml5, 
  FaCss3, 
  FaReact, 
  FaNode } from 'react-icons/fa';
import { 
  SiJavascript, 
  SiRedux,
  SiJquery,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs
 } from 'react-icons/si'
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
          <Skill>
            <SiMongodb />
          </Skill>
          <Skill>
            <SiTailwindcss />
          </Skill>
          <Skill>
            <SiNextdotjs />
          </Skill>
      </SkillsContainer>
  )
};

export default Skills;
