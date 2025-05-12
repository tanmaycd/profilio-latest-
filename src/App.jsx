import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from "./components/Experience";
import Achievements from "./components/Achievement";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import ResumeButton from "./components/Resumebutton";

const AppContainer = styled.div`
  min-height: 100vh;
`;

function App() {

  const portfolioData = {
    experience: [
      {
        title: "Full Stack Developer",
        company: "School of Liberal Arts, IIT Jodhpur",
        duration: "Jan 2025 – April 2025",
        description: "Co-developed MANCHITRA, a map-based platform to digitally connect music communities across Rajasthan using Django, React.js, and PostgreSQL. Implemented OTP-based login, real-time map discovery, and AWS S3 media uploads.",
      },
    ],
    achievements: [
    
      "Secured All India Rank (AIR) 2637 in JEE Advanced, 2022.",
      "Secured All India Rank (AIR) 4072 (Percentile Score 99.56) in JEE Mains, 2022.",
      "Secured 10th rank in PCM Stream in MP Board Exam Result, 2022.",
      "Qualified NTSE Stage-1 Exam (MP), 2020."
    ],
    certificates: [
      {
        name: "The Complete 2024 Web Development Bootcamp",
        issuer: "Udemy (Instructor: Dr. Angela Yu)",
        date: "2024",
      },
      {
        name: "Mastering Data Structures and Algorithms using C and C++",
        issuer: "Udemy (Instructor: Abdul Bari)",
        date: "2024",
      },
    
    ],
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Indian Institute of Technology, Jodhpur",
        year: "2022 - Present",
      },
    ],
    resumeLink: "https://drive.google.com/file/d/1o3JJwx6jstQWeyifUgET4OIx298KkSvC/view?usp=sharing",
  };
  return (
    <AppContainer>
      <Navbar />
      <Home resumeLink="https://drive.google.com/file/d/1o3JJwx6jstQWeyifUgET4OIx298KkSvC/view?usp=sharing" />
      <About />
      <Skills />
      <Education education={portfolioData.education} />
      <Achievements achievements={portfolioData.achievements} />
      <Certificates certificates={portfolioData.certificates} />
      <Experience experience={portfolioData.experience} />
      <Projects />
      <Contact />
      
  
     
      
    </AppContainer>
  );
}

export default App;


