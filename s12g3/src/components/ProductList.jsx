import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Create an Axios instance with a base URL and default headers
const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
    // other headers
  },
});

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Use the Axios instance to make the API request
    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
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
              <p className="text-gray-300 mt-2">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
