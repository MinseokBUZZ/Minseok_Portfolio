import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className='about' id="about">
      <h2>{t('AboutTitle')}</h2>
      <div className="words" style={{ whiteSpace: "pre-line" }}>
        {t('AboutDesc')}
      </div>
    </div>
  )
}
export default About;
