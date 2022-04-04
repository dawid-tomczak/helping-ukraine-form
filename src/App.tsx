import React from 'react';
import './App.css';
import Header from './modules/shared/Header/Header';
import ContentWrapper from './modules/shared/ContentWrapper/ContentWrapper';
import { ProductFormManager } from './modules/ProductForm/ProductFormManager';
import { NeedsContextProvider } from './contexts/NeedsContext';

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <NeedsContextProvider>
          <ProductFormManager />
        </NeedsContextProvider>
      </ContentWrapper>
    </>
  );
}

export default App;
