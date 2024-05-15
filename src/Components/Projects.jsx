import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "CanadaWideCarParts",
      desc: "This project involves a team of four developing an e-commerce website for car parts, customized to meet an external client's specific requirements.",
      githubLink: "https://github.com/ayasophya/CWCP",
      techs: ["C#", "Java", "JavaScript", "HTML", "CSS"],
      isOpenSource: true, 
      deployedLink: "https://www.canadawidecarparts.tech/" 
    },
    {
      name: "PetLinker",
      desc: "This is my individual project. The app offers a straightforward and efficient interface for shelter staff to easily manage pet information.",
      githubLink: "https://github.com/MinseokBUZZ/PetLinker",
      techs: ["Swift"],
      isOpenSource: true,
    },
    {
      name: "BookStoreApp",
      desc: "In our group of three, we developed and hosted a bookstore web application on Azure for our Azure Project, with tasks divided among domains for authors, books, and authentication/authorization.",
      githubLink: "https://github.com/Eli293/BookStoreApp",
      techs: ["C#", "HTML"],
      isOpenSource: true,
    },
    {
      name: "Mini Golf Game",
      desc: "This is the final group project for our Gaming with Unity class, showcasing the skills we've learned.",
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
