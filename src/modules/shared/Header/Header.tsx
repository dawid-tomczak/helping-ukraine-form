import { Button, Typography } from '@mui/material';
import styles from './Header.module.css';
import React from 'react';

const Header = () => {
  return (
    <header className={styles.header}>
      <Typography className={styles.header__title}>Kartka z areny</Typography>
      <div className={styles.header__language}>
        <Button variant='outlined' className={styles.language__button}>
          PL
        </Button>
        <Button variant='outlined' className={styles.language__button}>
          UA
        </Button>
      </div>
    </header>
  );
};

export default Header;
