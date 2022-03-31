import React from 'react';
import { Button, Typography } from '@mui/material';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const languages: string[] = ['PL', 'UK'];

  return (
    <header className={styles.header}>
      <Typography className={styles.header__title} variant='h4' component='h1'>
        {t('Kartka z areny')}
      </Typography>
      <div className={styles.header__language}>
        {languages.map((lang) => {
          return (
            <Button
              key={lang}
              variant='outlined'
              onClick={() => i18n.changeLanguage(lang)}
              disabled={i18n.resolvedLanguage === lang}
              className={styles.language__button}
            >
              {lang}
            </Button>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
