

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaCode, FaGithub
} from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiScikitlearn, SiPandas, SiNumpy, SiJavascript, SiBootstrap, SiFirebase, SiCplusplus } from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  background:  linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #ffffff;
  position: relative;
  display: inline-block;
  left: 44%;
  transform: translateX(-50%);
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #007bff, #00ff88);
    border-radius: 2px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const SkillCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(50, 50, 50, 0.9)); 
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0,123,255,0.1), rgba(0,255,136,0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
`;

// const SkillCard = styled(motion.div)`
//   background: rgba(255, 255, 255, 0.9);
//   padding: 30px;
//   border-radius: 20px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(45deg, rgba(0,123,255,0.1), rgba(0,255,136,0.1));
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
//     &::before {
//       opacity: 1;
//     }
//   }
// `;

const IconWrapper = styled(motion.div)`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #f0f0f0;
  text-align: center;
`;

const SkillDescription = styled.p`
  color: #666;
  line-height: 1.6;
  color:#b0e0e6;
  text-align: center;
  margin-bottom: 20px;
`;

const TechList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
`;

// const TechItem = styled(motion.span)`
//   background: linear-gradient(45deg, rgba(0,123,255,0.1), rgba(0,255,136,0.1));
//   padding: 5px 12px;
//   border-radius: 15px;
//   font-size: 0.9rem;
//   color: #495057;
//   border: 1px solid rgba(0,123,255,0.2);
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   svg {
//     font-size: 1.1rem;
//   }
// `;
const TechItem = styled(motion.span)`
  background: linear-gradient(45deg, rgba(100, 100, 100, 0.3), rgba(180, 180, 180, 0.2));
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #e0e0e0; /* Light gray for contrast */
  border: 1px solid rgba(255, 255, 255, 0.4); /* White border for definition */
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    font-size: 1.1rem;
    color: #00ff88; /* Neon green accent for visibility */
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(0,123,255,0.1), rgba(0,255,136,0.1));
`;

const skillsData = [
  {
    icon: <FaReact />,
    title: "Frontend Development",
    description: "Building dynamic and responsive user interfaces using modern web technologies.",
    technologies: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "HTML/CSS/JS", icon: <FaCode /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "jQuery", icon: <FaCode /> }
    ]
  },
  {
    icon: <FaNodeJs />,
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs with scalable architectures.",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "ExpressJS", icon: <FaCode /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> }
    ]
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "Designing, managing, and optimizing relational and non-relational databases.",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  {
    icon: <FaPython />,
    title: "Machine Learning",
    description: "Developing predictive models and analyzing data using machine learning techniques.",
    technologies: [
      { name: "Python", icon: <FaPython /> },
      { name: "scikit-learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> }
    ]
  },
  {
    icon: <FaCode />,
    title: "Programming",
    description: "Proficient in multiple programming languages for software development and problem-solving.",
    technologies: [
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Golang", icon: <FaCode /> },
      { name: "MIPS", icon: <FaCode /> },
      { name: "Verilog", icon: <FaCode /> }
    ]
  }
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <BackgroundDecoration>
        {[...Array(5)].map((_, i) => (
          <Circle
            key={i}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </BackgroundDecoration>

      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </Title>
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IconWrapper
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1 + 0.2 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                {skill.icon}
              </IconWrapper>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
              <TechList
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3 + index * 0.1
                    }
                  }
                }}
              >
                {skill.technologies.map((tech, i) => (
                  <TechItem
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech.icon} {tech.name}
                  </TechItem>
                ))}
              </TechList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
