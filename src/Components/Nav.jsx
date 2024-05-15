import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher'; // Import the LanguageSwitcher

import '../styles/Nav.css';

const Nav = ({ isDarkMode, handleToggle }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const nav = (
        <ul style={{ pointerEvents: 'auto' }}>
            <li><Link onClick={handleClick} activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500}>{t('Projects')}</Link></li>
            <li><Link onClick={handleClick} activeClass="active" to="education-experience" spy={true} smooth={true} offset={-50} duration={500}>{t('Education & Experience')}</Link></li>
            <li><Link onClick={handleClick} activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}>{t('About')}</Link></li>
            <li><Link onClick={handleClick} activeClass="active" to="mail" spy={true} smooth={true} offset={0} duration={500}>{t('Contact')}</Link></li>
            <li><LanguageSwitcher /></li> {/* Add the LanguageSwitcher here */}
        </ul>
    );

    return (
        <div className='nav'>
            <div className={`header ${!isDarkMode ? 'light' : ''}`}>
                <h1>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>{"Minseok's Portfolio"}</Link>
                </h1>
                
                <div className="menu-and-theme">
                    <div onClick={handleClick} className="menu">
                        <GiHamburgerMenu />
                    </div>
                    <div className='large'>
                        {nav}
                    </div>
                    <div className={`theme-switch ${!isDarkMode ? 'light' : ''}`} onClick={handleToggle}>
                        {isDarkMode ? <FaMoon /> : <FaSun />}
                    </div>
                </div>
            </div>
            <div className='small' style={{
                display: isOpen ? 'none' : 'flex'
            }}>
                {nav}
            </div>
        </div>
    );
};

export default Nav;
