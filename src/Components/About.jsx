import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1994-10-16");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words" style={{ whiteSpace: "pre-line" }}>
        {`I am a dedicated web developer known for my unwavering perseverance in overcoming any challenges that I face when I do coding. 
With an optimistic outlook, I approach every coding problem as an opportunity to learn and grow. 
I take my responsibilities seriously, ensuring the reliability and integrity of my work. 
In addition, I am a quick learner and collaborative team player who promotes a positive environment.
I enjoy logging and sharing everything I learn.`}
      </div>
    </div>
  )
}
export default About;
