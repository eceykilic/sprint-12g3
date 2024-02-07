import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} className="mb-8">
            <strong className="text-lg">{product.title}</strong> - ${product.price}
            <div className="mt-2">
              <p className="text-gray-200">{product.description}</p>
              <img src={product.image} alt="" className="w-1/3 h-1/3" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
