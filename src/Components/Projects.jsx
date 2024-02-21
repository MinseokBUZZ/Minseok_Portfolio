import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "CanadaWideCarParts",
      desc: "This is External Client Project (E-commerce Website) and builds based on the requirements of our external client.",
      githubLink: "https://github.com/ayasophya/CWCP",
      techs: ["C#", "Java", "JavaScript", "HTML", "CSS"],
      isOpenSource: true, 
      deployedLink: "https://www.canadawidecarparts.tech/" 
    },
    {
      name: "PetLinker",
      desc: "The app provides a straightforward and efficient interface for shelter staff, allowing them to manage pet information with ease.",
      githubLink: "https://github.com/MinseokBUZZ/PetLinker",
      techs: ["Swift"],
      isOpenSource: true,
    },
    {
      name: "BookStoreApp",
      desc: "Introduction For our Azure Project, we had to finish development of a bookstore web application and finally publish and host it by using Azure. We separated our tasks between domains, one for authors, one for books, and one for authentication/authorization.",
      githubLink: "https://github.com/Eli293/BookStoreApp",
      techs: ["C#", "HTML"],
      isOpenSource: true,
    },
    {
      name: "Mini Golf Game",
      desc: "This is the final project to show what we learned during Gaming with unity class",
      githubLink: "https://github.com/RichardDanon/Final_Game_Project",
      techs: ["C#"],
      isOpenSource: true,
    }
  ];
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
