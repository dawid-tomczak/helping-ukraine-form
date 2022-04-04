import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const languages: string[] = ['PL', 'UK'];

  return (
    <header>
      <AppBar position='static'>
        <Toolbar
          variant='regular'
          sx={{ backgroundColor: '#ededed', color: 'black' }}
        >
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {t('Kartka z areny')}
          </Typography>
          {languages.map((lang) => {
            return (
              <Button
                key={lang}
                variant='outlined'
                sx={{
                  marginLeft: '8px',
                  marginRight: '8px',
                }}
                onClick={() => i18n.changeLanguage(lang)}
                disabled={i18n.resolvedLanguage === lang}
              >
                {lang}
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
