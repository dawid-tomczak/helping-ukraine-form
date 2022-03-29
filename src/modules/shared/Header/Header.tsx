import { Button, Typography } from '@mui/material';
import styles from './Header.module.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
              className={styles.language__button}
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
