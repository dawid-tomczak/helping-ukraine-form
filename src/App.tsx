import React from 'react';
import './App.css';
import Header from './modules/shared/Header/Header';
import ContentWrapper from './modules/shared/ContentWrapper/ContentWrapper';
import { NeedFormManager } from './modules/NeedForm/NeedFormManager';
import { NeedsContextProvider } from './contexts/NeedsContext';
import { AddedNeeds } from './modules/AddedNeeds/AddedNeeds';

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <NeedsContextProvider>
          <NeedFormManager />
          <AddedNeeds />
        </NeedsContextProvider>
      </ContentWrapper>
    </>
  );
}

export default App;
