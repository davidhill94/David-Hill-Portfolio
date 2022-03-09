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
SkillsColumn,
Skill 
} from './SkillsElements';

const Skills = () => {
  return (
      <SkillsContainer>
        <SkillsColumn>
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
        </SkillsColumn>
        <SkillsColumn>
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
        </SkillsColumn>
      </SkillsContainer>
  )
};

export default Skills;
