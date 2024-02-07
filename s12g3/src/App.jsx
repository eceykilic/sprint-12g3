import React from 'react';
import ProductList from './components/ProductList'
import { ProductProvider } from './components/ProductContext';

import './App.css'

function App() {
  return (
    <ProductProvider>
      <ProductList/>
      </ProductProvider>
  )
}

export default App
