import React from 'react';
import './App.css';
import Header from './modules/shared/Header/Header';
import ContentWrapper from './modules/shared/ContentWrapper/ContentWrapper';
import Form from './modules/Form/Form';

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Form />
      </ContentWrapper>
    </>
  );
}

export default App;
