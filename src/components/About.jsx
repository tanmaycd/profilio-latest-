// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const AboutSection = styled.section`
//   min-height: 100vh;
//   padding: 100px 20px;
//   background:linear-gradient(135deg, #1e1e1e 0%, #292929 100%);
//   position: relative;
//   overflow: hidden;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 50px;
//   align-items: center;
//   position: relative;
//   z-index: 1;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     text-align: center;
//   }
// `;

// const ImageContainer = styled(motion.div)`
//   position: relative;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: -20px;
//     left: -20px;
//     right: 20px;
//     bottom: 20px;
//     border: 2px solid #007bff;
//     border-radius: 20px;
//     z-index: -1;
//   }

//   img {
//     width: 100%;
//     max-width: 400px;
//     border-radius: 20px;
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//     transition: transform 0.3s ease;
//   }

//   @media (max-width: 768px) {
//     display: flex;
//     justify-content: center;
//     margin-bottom: 30px;
//   }
// `;

// const Content = styled(motion.div)`
//   h2 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     color: #2c3e50;
//     position: relative;
//     display: inline-block;

//     &::after {
//       content: '';
//       position: absolute;
//       bottom: -10px;
//       left: 0;
//       width: 60px;
//       height: 3px;
//       background: linear-gradient(to right, #007bff, #00ff88);
//       border-radius: 2px;

//       @media (max-width: 768px) {
//         left: 50%;
//         transform: translateX(-50%);
//       }
//     }
//   }

//   p {
//     font-size: 1.1rem;
//     line-height: 1.8;
//     color: #34495e;
//     margin-bottom: 20px;
//     opacity: 0.9;
//   }
// `;

// const SkillTags = styled(motion.div)`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-top: 30px;

//   @media (max-width: 768px) {
//     justify-content: center;
//   }
// `;

// const SkillTag = styled(motion.span)`
//   background: linear-gradient(45deg, #007bff20, #00ff8820);
//   padding: 8px 16px;
//   border-radius: 20px;
//   font-size: 0.9rem;
//   color: #2c3e50;
//   border: 1px solid #007bff50;
//   cursor: default;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 5px 15px rgba(0, 123, 255, 0.2);
//   }
// `;

// const BackgroundDecoration = styled.div`
//   position: absolute;
//   width: 500px;
//   height: 500px;
//   background: linear-gradient(45deg, #007bff10, #00ff8810);
//   border-radius: 50%;
//   top: -250px;
//   right: -250px;
//   z-index: 0;
// `;

// const About = () => {
//   const skills = [
//     "React", "Node.js", "JavaScript", "TypeScript", "HTML5", "CSS3",
//     "MongoDB", "SQL", "Git", "AWS", "Docker", "RESTful APIs"
//   ];

//   return (
//     <AboutSection id="about">
//       <BackgroundDecoration />
//       <Container>
//         <ImageContainer
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.02 }}
//         >
//           <img src="https://via.placeholder.com/400x500" alt="Profile" />
//         </ImageContainer>
//         <Content
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             About Me
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//           Hi! I’m Tanmay Parashar, a Computer Science and Engineering student at IIT Jodhpur with a passion for creating innovative software solutions. I have experience in web development, machine learning, and technologies like ReactJS, NodeJS, and SQL.

// I’ve worked on exciting projects like an AR navigation app and a dynamic music player website, showcasing my problem-solving skills and love for technology.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//            Besides coding, I enjoy writing poetry, playing the keyboard, listening to music, and watching or playing cricket. I’m always eager to learn, explore new opportunities, and create meaningful work.
//           </motion.p>
//           <SkillTags
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
//             viewport={{ once: true }}
//           >
//             {skills.map((skill, index) => (
//               <SkillTag
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {skill}
//               </SkillTag>
//             ))}
//           </SkillTags>
//         </Content>
//       </Container>
//     </AboutSection>
//   );
// };

// export default About;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from "./profile.jpeg";
const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 2px;
    border-radius: 20px;
    z-index: -1;
  }

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

const Content = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ffffff;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(to right, #00ff88, #007bff);
      border-radius: 2px;

      @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #dddddd;
    margin-bottom: 20px;
    opacity: 0.9;
  }
`;

const SkillTags = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SkillTag = styled(motion.span)`
  background: linear-gradient(45deg, #007bff30, #00ff8830);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #ffffff;
  border: 1px solid #00ff88;
  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.5);
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: linear-gradient(45deg, #007bff10, #00ff8810);
  border-radius: 50%;
  top: -250px;
  right: -250px;
  z-index: 0;
`;

const About = () => {
  const skills = [
   "HTML", "CSS",, "JavaScript",, "SQL", "PostgreSQL", "ReactJs", "NodeJs","ExpressJs ","TypeScript", "Git",  "RESTful APIs","Firebase"
  ];

  return (
    <AboutSection id="about">
      <BackgroundDecoration />
      <Container>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={profileImage}  width="800" height="400" alt="Profile" />
        </ImageContainer>
        <Content
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hi! I’m Tanmay Parashar, a Computer Science and Engineering student at IIT Jodhpur with a passion for creating innovative software solutions. I have experience in web development, machine learning, and technologies like ReactJS, NodeJS, and SQL.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Besides coding, I enjoy writing poetry, playing the keyboard, listening to music, and watching or playing cricket. I’m always eager to learn, explore new opportunities, and create meaningful work.
          </motion.p>
          <SkillTags
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <SkillTag
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </SkillTag>
            ))}
          </SkillTags>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
