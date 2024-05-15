import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/EducationExperience.css'; 

const EducationExperience = () => {
    const { t } = useTranslation();
    const [view, setView] = useState('experience'); 

    const experiences = [
        {
            role: t("Full Stack Developer"),
            company: "Vector Networks",
            period: t("Period"),
            tasks: [
                t("FirstTask"), 
                t("SecondTask")
            ]
        }
    ];

    const educations = [
        {
            school: "Champlain College Saint-Lambert",
            degree: "Diplôme d'études collégiales (DCS - Diploma of College Studies) in Computer Science",
            period: "2020- 2024"
        },
        {
            school: "Rosemount High School",
            degree: "Diplôme d'études secondaires (DES - Diploma of Secondary Studies)",
            period: "2018 - 2020"
        }
    ];

    const toggleView = (viewType) => {
        setView(viewType);
    };

    return (
        <div className='education-experience' id="education-experience">
            <h2>{t(view)}</h2>
            <div className="toggle-buttons">
                <button onClick={() => toggleView('experience')} className={view === 'experience' ? 'active' : ''}>{t("experience")}</button>
                <button onClick={() => toggleView('education')} className={view === 'education' ? 'active' : ''}>{t("education")}</button>
            </div>
            <div>
                {view === 'experience' ? (
                    experiences.map((exp, index) => (
                        <div key={index} className="detail">
                            <h3>{exp.roleCompany}</h3>
                            <h4>{exp.period}</h4>
                            <ul>
                                {exp.tasks.map((task, idx) => <li key={idx}>{task}</li>)}
                            </ul>
                        </div>
                    ))
                ) : (
                    educations.map((edu, index) => (
                        <div key={index} className="detail">
                            <h3>{edu.degree}</h3>
                            <h4>{edu.school}</h4>
                            <p>{edu.period}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default EducationExperience;