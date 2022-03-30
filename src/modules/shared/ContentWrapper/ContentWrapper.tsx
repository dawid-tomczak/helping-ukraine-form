import { Container } from '@mui/material';
import React, { ReactElement } from 'react';
import styles from './ContentWrapper.module.css';

interface Props {
  children: ReactElement;
}
const ContentWrapper = ({ children }: Props): ReactElement => (
  <Container className={styles.wrapper}>{children}</Container>
);

export default ContentWrapper;
