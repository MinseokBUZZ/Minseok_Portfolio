import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';

import TypeWriterEffect from 'react-typewriter-effect';
import { animateScroll } from 'react-scroll';
import { Link } from 'react-scroll';
import updatedCV from './Minseok_Shim_CV.pdf';
import profileImage from './LinkedIn_Profile.jpg';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [number, setNumber] = useState(0);

  const arrayOfWords = [
    t('Tap again'), 
    'Hello', 
    'You found this', 
    'I added this...', 
    'because it seemed cool', 
    `so here's something`, 
    'did you know that...', 
    `You can't breathe and talk.`, 
    'the earth is 71% water.', 
    `It snows in the Sahara Desert`
  ];
  const textContent = useRef();

  const handleChange = () => {
    textContent.current.style.display = 'inline-block';
    textContent.current.innerText = arrayOfWords[number];
    if ((arrayOfWords.length - 1) !== number) {
      setNumber(number + 1);
    }
    if ((arrayOfWords.length - 1) === number) {
      setTimeout(() => {
        textContent.current.style.display = 'none';
        animateScroll.scrollTo(350);
        setNumber(1);
      }, 1000);
    }
  };

  return (
    <div key={i18n.language} className='home' id='home'> {/* Add key here to force re-render on language change */}
      <div className="home-text">
        <h1>
          <span className='gradientText'>
            {t("Salutation")}
          </span>
          <span>
            <span onClick={handleChange}>
              👋
            </span>
            <span ref={textContent} style={{ display: 'none' }}>
              {t('Tap again')}
            </span>
          </span>
        </h1>
        <TypeWriterEffect
          cursorColor="#1da1f2"
          multiText={[
            t('Software Developer'),
            t("Don't Forget to Scroll")
          ]}
          multiTextLoop={true}
          multiTextDelay={1500}
          typeSpeed={35}
        />
        <div className="btns">
          <Link className='btn1' activeClass="active" to="mail" spy={true} smooth={true} offset={0} duration={500}>
            {t('Hire Me')}
          </Link>

          <a href={updatedCV} download="Minseok_Shim_CV.pdf" className='btn2'>{t('View Resume')}</a>

        </div>
      </div>
      <img src={profileImage} alt="Profile" style={{ width: '270px', height: '270px', borderRadius: '50%' }} />
    </div>
  );
}

export default Home;
