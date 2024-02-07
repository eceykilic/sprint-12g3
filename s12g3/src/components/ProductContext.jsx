import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={ products}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the context in components
export const useProducts = () => {
  return useContext(ProductContext);
};
