import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher'; 
import { useTranslation } from 'react-i18next'; 

import '../styles/Nav.css';

const Nav = ({ isDarkMode, handleToggle }) => {
    const [isOpen, setIsOpen] = useState(true);
    const { t } = useTranslation(); 

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`nav ${!isDarkMode ? 'light' : ''}`}>
            <div className="header">
                <h1>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>{t("Minseok's Portfolio")}</Link>
                </h1>
                <div className="menu-and-theme">
                    <div onClick={handleClick} className="menu">
                        <GiHamburgerMenu />
                    </div>
                    <div className='large'>
                        <ul style={{ pointerEvents: 'auto' }}>
                            <li><Link onClick={handleClick} to="projects" spy={true} smooth={true} offset={-80} duration={500}>{t('Projects')}</Link></li>
                            <li><Link onClick={handleClick} to="education-experience" spy={true} smooth={true} offset={-50} duration={500}>{t('Education & Experience')}</Link></li>
                            <li><Link onClick={handleClick} to="about" spy={true} smooth={true} offset={-80} duration={500}>{t('About')}</Link></li>
                            <li><Link onClick={handleClick} to="mail" spy={true} smooth={true} offset={0} duration={500}>{t('Contact')}</Link></li>
                            <li><LanguageSwitcher /></li>
                        </ul>
                    </div>
                    <div className="theme-switch" onClick={handleToggle}>
                        {isDarkMode ? <FaMoon /> : <FaSun />}
                    </div>
                </div>
            </div>
            <div className='small' style={{ display: isOpen ? 'none' : 'flex' }}>
               
            </div>
        </div>
    );
};

export default Nav;
