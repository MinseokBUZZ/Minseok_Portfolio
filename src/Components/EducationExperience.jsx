import React, { useState } from 'react';
import '../styles/EducationExperience.css'; 

const EducationExperience = () => {
    const [view, setView] = useState('experience'); 

    const experiences = [
        {
            role: "Full Stack Developer",
            company: "Vector Networks",
            period: "March 2024 - May 2024",
            tasks: [
            "Developed a Chrome extension named VIZOR Assets Lookup that interfaces with organizational APIs to verify and manage Chrome device assignments based on their serial numbers.", 
            "Collarborated with my supervisor and other developers to create responsive and accessible Chrome extension."
            
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

    const toggleView = (view) => {
        setView(view);
    };

    return (
        <div className='education-experience' id="education-experience">
            <h2>{view.charAt(0).toUpperCase() + view.slice(1)}</h2>
            <div className="toggle-buttons">
                <button onClick={() => toggleView('experience')} className={view === 'experience' ? 'active' : ''}>Experience</button>
                <button onClick={() => toggleView('education')} className={view === 'education' ? 'active' : ''}>Education</button>
            </div>
            <div>
                {view === 'experience' ? (
                    experiences.map((exp, index) => (
                        <div key={index} className="detail">
                            <h3>{exp.role} - {exp.company}</h3>
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
                            <p>{edu.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default EducationExperience;
