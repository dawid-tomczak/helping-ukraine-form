import React from 'react';
import './App.css';
import Header from './modules/shared/Header/Header';
import ContentWrapper from './modules/shared/ContentWrapper/ContentWrapper';
import { ProductFormManager } from './modules/ProductForm/ProductFormManager';

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <ProductFormManager />
      </ContentWrapper>
    </>
  );
}

export default App;
