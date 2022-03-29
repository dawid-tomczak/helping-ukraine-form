// import React from 'react';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const languages: string[] = ['pl', 'ua'];

  return (
    <header className={styles.header}>
      <Typography className={styles.header__title}>
        {t('Kartka z areny')}
      </Typography>
      <div className={styles.header__language}>
        {languages.map((lang) => {
          return (
            <Button
              key={lang}
              variant='outlined'
              className={styles.language_button}
              onClick={() => i18n.changeLanguage(lang)}
              disabled={i18n.resolvedLanguage === lang}
            >
              {lang.toUpperCase()}
            </Button>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
