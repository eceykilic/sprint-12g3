import React from 'react';
import useFetchData from './useFetchData';

const ProductList = () => {
    const { data: products, loading, error } = useFetchData('/products');
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ul className="flex flex-wrap -mx-4">
        {products.map(product => (
          <li key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <div className="bg-white p-4 h-full">
              <strong className="text-lg block mb-2">{product.title}</strong>
              <img src={product.image} alt={product.title} className="w-50% h-50 object-cover mt-2 mx-auto" />
              <br />
              <p className="text-gray-700">{product.description}</p>
              <div className="flex flex-col mt-auto">
                <p className="text-gray-600">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                <p className="text-gray-800 font-bold mt-2">${product.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
