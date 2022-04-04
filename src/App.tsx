import React from 'react';
import './App.css';
import Header from './modules/shared/Header/Header';
import ContentWrapper from './modules/shared/ContentWrapper/ContentWrapper';
import { NeedFormManager } from './modules/NeedForm/NeedFormManager';
import { NeedsContextProvider } from './contexts/NeedsContext';

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <NeedsContextProvider>
          <NeedFormManager />
        </NeedsContextProvider>
      </ContentWrapper>
    </>
  );
}

export default App;
