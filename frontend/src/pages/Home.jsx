// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Product from '../components/Product'; // Assuming Product component is in the components folder
import { productData } from '../static/data'; // Import the product data

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Set the products data on component mount
    setProducts(productData);
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Product
          key={product.id}
          _id={product.id}
          name={product.name}
          images={product.image_Url.map((img) => img.url)} // Extracting image URLs
          description={product.description}
          price={product.discount_price || product.price} // Default to discount_price if available
        />
      ))}
    </div>
  );
}
