import React from 'react';
import '../styles/Skills.css';
import { useTranslation } from 'react-i18next';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiJava, SiFigma, SiMongodb, SiFirebase, SiCsharp, SiPython, SiDocker } from 'react-icons/si';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className='skills'>
      <h2>{t('My Skills')}</h2>
      <div className="skill">
        <div className="js">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="html">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="csharp">
          <SiCsharp />
          <p>C#</p>
        </div>
        <div className="java">
          <SiJava />
          <p>Java</p>
        </div>
        <div className="python">
          <SiPython />
          <p>Python</p>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="react">
          <SiReact />
          <p>React</p>
        </div>
        <div className="fig">
          <SiFigma />
          <p>Figma</p>
        </div>
        <div className="mon">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
        <div className="fire">
          <SiFirebase />
          <p>Firebase</p>
        </div>
        <div className="docker">
          <SiDocker />
          <p>Docker</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
