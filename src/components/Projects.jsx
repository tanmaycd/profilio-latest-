// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// const ProjectsSection = styled.section`
//   min-height: 100vh;
//   padding: 100px 20px;
//   background: #ffffff;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const Title = styled(motion.h2)`
//   text-align: center;
//   font-size: 2.5rem;
//   margin-bottom: 50px;
//   color: #2c3e50;
// `;

// const ProjectsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 30px;
//   padding: 20px;
// `;

// const ProjectCard = styled(motion.div)`
//   background: white;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const ProjectImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `;

// const ProjectContent = styled.div`
//   padding: 20px;

//   h3 {
//     font-size: 1.5rem;
//     margin-bottom: 10px;
//     color: #2c3e50;
//   }

//   p {
//     color: #666;
//     line-height: 1.6;
//     margin-bottom: 15px;
//   }
// `;

// const ProjectLinks = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-top: 15px;
// `;

// const ProjectLink = styled.a`
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   color: #007bff;
//   text-decoration: none;
//   font-weight: 500;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #0056b3;
//   }

//   svg {
//     font-size: 1.2rem;
//   }
// `;

// const TechStack = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 15px;
// `;

// const TechTag = styled.span`
//   background: #e9ecef;
//   padding: 4px 10px;
//   border-radius: 15px;
//   font-size: 0.9rem;
//   color: #495057;
// `;

// const projectsData = [
//   {
//     title: "E-commerce Platform",
//     description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
//     image: "https://via.placeholder.com/300x200",
//     techStack: ["React", "Node.js", "MongoDB", "Stripe"],
//     github: "https://github.com",
//     live: "https://project.com"
//   },
//   {
//     title: "Task Management App",
//     description: "A collaborative task management application with real-time updates and team features.",
//     image: "https://via.placeholder.com/300x200",
//     techStack: ["React", "Firebase", "Material-UI"],
//     github: "https://github.com",
//     live: "https://project.com"
//   },
//   {
//     title: "Social Media Dashboard",
//     description: "An analytics dashboard for social media metrics with data visualization.",
//     image: "https://via.placeholder.com/300x200",
//     techStack: ["React", "D3.js", "Node.js", "PostgreSQL"],
//     github: "https://github.com",
//     live: "https://project.com"
//   }
// ];

// const Projects = () => {
//   return (
//     <ProjectsSection id="projects">
//       <Container>
//         <Title
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           My Projects
//         </Title>
//         <ProjectsGrid>
//           {projectsData.map((project, index) => (
//             <ProjectCard
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <ProjectImage src={project.image} alt={project.title} />
//               <ProjectContent>
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//                 <TechStack>
//                   {project.techStack.map((tech, i) => (
//                     <TechTag key={i}>{tech}</TechTag>
//                   ))}
//                 </TechStack>
//                 <ProjectLinks>
//                   <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
//                     <FaGithub /> GitHub
//                   </ProjectLink>
//                   <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
//                     <FaExternalLinkAlt /> Live Demo
//                   </ProjectLink>
//                 </ProjectLinks>
//               </ProjectContent>
//             </ProjectCard>
//           ))}
//         </ProjectsGrid>
//       </Container>
//     </ProjectsSection>
//   );
// };

// export default Projects;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
   background:  linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #ffffff;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const ProjectCard = styled(motion.div)`
  background:  linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(50, 50, 50, 0.9));
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color:#00E6E6;
  }

  p {
    color:  #e0e0e0;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const TechTag = styled.span`
  background: #e9ecef;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #495057;
`;

const projectsData = [
  {
    title: "Music Player Website",
    description: "Developed a dynamic music player web application with features like song playback, playlist management, and user authentication.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image link
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "PostgreSQL"],
    github: "https://github.com/tanmaycd/Musicwebsite_tp.git",
    live: "https://musicwebsite-tp.vercel.app/login"
  },
  {
    title: "Student Gymkhana Website",
    description: "Designed a platform to manage student organization activities with secure document sharing and integrated mailing protocols.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image link
    techStack: ["ReactJS", "NodeJS", "MySQL"],
    github: "https://github.com/tanmaycd/Student-Gymkhana-IITJ_updated",
    live: "https://github.com/tanmaycd/Student-Gymkhana-IITJ_updated"
  },
  {
    title: "IITJ Roads and Maps",
    description: "Built an augmented reality navigation app integrating Google Maps API for outdoor navigation and ARCore for indoor guidance.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image link
    techStack: ["Flutter", "Google Maps API", "Google ARCore"],
    github: "https://github.com/tanmaycd/Design_Credit-2023-24-IITJ-Ram-Navigation-.git",
    live: "https://github.com/tanmaycd/Design_Credit-2023-24-IITJ-Ram-Navigation-.git"
  },
  {
    title: "Sentiment Classification",
    description: "Performed sentiment analysis on Twitter data using machine learning models, achieving high accuracy and performance metrics.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image link
    techStack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/tanmaycd/Sentiment_Classification_G12.git",
    live: "https://github.com/tanmaycd/Sentiment_Classification_G12.git"
  },
  {
    title: "Activity Finder Website",
    description: "Developed a frontend website to help users discover activities based on their mood and category, featuring intuitive user interfaces.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image link
    techStack: ["ReactJS", "HTML", "CSS"],
    github: "https://github.com/tanmaycd/activity-finder",
    live: "https://activitydeterminer.vercel.app/"
  },
  {
    title: "Paakshala App",
    description: "Created a mobile app to track fridge items, send expiration reminders, and suggest recipes. Followed Agile methodology with MVC architecture.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image link
    techStack: ["Flutter", "Django", "Django Rest Framework", "Kotlin"],
    github: "https://github.com/tanmaycd/Paakshala-App",
    live: "https://github.com/tanmaycd/Paakshala-App"
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </Title>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TechStack>
                  {project.techStack.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    {/* <FaExternalLinkAlt />  */}
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
