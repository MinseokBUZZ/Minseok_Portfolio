import React from "react";
import Project from "./Project.jsx";
import { useTranslation } from 'react-i18next';
import "../styles/Projects.css";

const Projects = () => {
  const { t } = useTranslation();
  const projectsInfo = [
    {
      name: "CanadaWideCarParts",
      desc: "CanadaWideCarPartsDesc",
      githubLink: "https://github.com/ayasophya/CWCP",
      techs: ["C#", "Java", "JavaScript", "HTML", "CSS"],
      isOpenSource: true, 
      deployedLink: "https://www.canadawidecarparts.tech/" 
    },
    {
      name: "PetLinker",
      desc: "PetLinkerDesc",
      githubLink: "https://github.com/MinseokBUZZ/PetLinker",
      techs: ["Swift"],
      isOpenSource: true,
    },
    {
      name: "BookStoreApp",
      desc: "BookStoreAppDesc",
      githubLink: "https://github.com/Eli293/BookStoreApp",
      techs: ["C#", "HTML"],
      isOpenSource: true,
    },
    {
      name: "Mini Golf Game",
      desc: "Mini Golf GameDesc",
      githubLink: "https://github.com/RichardDanon/Final_Game_Project",
      techs: ["C#"],
      isOpenSource: true,
    }
  ];
  return (
    <div className="Projects" id="projects">
      <h2>{t('My Projects')}</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
