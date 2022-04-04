import React, { ReactElement } from 'react';
import { Container } from '@mui/material';

interface Props {
  children: ReactElement;
}
const ContentWrapper = ({ children }: Props): ReactElement => (
  <Container>{children}</Container>
);

export default ContentWrapper;
