import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="language-switcher">
            <div onClick={() => changeLanguage('en')}>EN</div>
            <div onClick={() => changeLanguage('fr')}>FR</div>
        </div>
    );
}

export default LanguageSwitcher;
