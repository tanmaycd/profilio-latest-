import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  z-index: 1;
  color: #e0e0e0;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 20px;
  color: #ffffff;
  font-weight: 800;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #bbbbbb;
  margin-bottom: 30px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.4rem;
  color: #aaaaaa;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const SocialIcon = styled(motion.a)`
  color: #e0e0e0;
  font-size: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 10px;
  border: 2px solid #444;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    color: #007bff;
    border-color: #007bff;
    transform: translateY(-3px);
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.5);
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }

  svg {
    animation: bounce 1.5s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Home = ({ resumeLink }) => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <HomeSection id="home">
      <Content>
        <Title
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Tanmay Parashar
        </Title>
        <Subtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Full Stack Developer
        </Subtitle>
        <Tagline
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
        >
          Exploring the world of web experiences with modern technologies
        </Tagline>

        <SocialLinks
          variants={socialVariants}
          initial="hidden"
          animate="visible"
        >
          <SocialIcon 
            href="mailto:tanmay101para@gmail.com"
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </SocialIcon>
          <SocialIcon 
            href="https://linkedin.com/in/tanmay-parashar-31432b263/"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon 
            href="https://github.com/tanmaycd"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </SocialIcon>
        </SocialLinks>

        <ResumeButton
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </ResumeButton>

        <Link to="about" smooth={true} duration={800}>
          <ScrollDown>
            <span>Scroll Down</span>
            <FaArrowDown />
          </ScrollDown>
        </Link>
      </Content>
    </HomeSection>
  );
};

export default Home;