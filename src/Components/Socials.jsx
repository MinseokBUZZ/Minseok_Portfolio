import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import '../styles/Socials.css';

const Socials = () => {
  const { t } = useTranslation();

  return (
    <div className='socials'>
      <h2>{t('Socials')}</h2>
      <div className="social">
        <div className='insta'>
          <AiFillInstagram />
          <p>Instagram</p>
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>{t("Let's Connect")}</a>
        </div>
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/MinseokBUZZ" target='_blank' rel='noreferrer'>{t("Let's Connect")}</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/in/minseok-shim-227013293/" target='_blank' rel='noreferrer'>{t("Let's Connect")}</a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
