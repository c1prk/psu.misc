import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productID } = useParams();
  const { products, currency } = useContext(ShopContext);

  // Find the product by ID
  const product = products.find((p) => p._id === parseInt(productID));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-md border border-violet-200 p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <div className="rounded-2xl bg-white border border-violet-200 shadow-md overflow-hidden w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.target.src =
                  'https://placehold.co/600x400/f3e8ff/d8b4fe?text=Image+Error';
              }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-violet-500 text-3xl font-bold mb-6">
            {currency}
            {product.price}
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="flex-1 bg-violet-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-violet-600 transition-all duration-300">
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-violet-500 text-violet-500 text-lg font-semibold py-3 px-6 rounded-lg hover:bg-violet-50 transition-all duration-300">
              Add to Wishlist
            </button>
          </div>

          {/* Product Info Cards */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white border border-violet-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm mb-2">Difficulty</p>
              <p className="text-gray-800 font-semibold">Intermediate</p>
            </div>
            <div className="bg-white border border-violet-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm mb-2">Format</p>
              <p className="text-gray-800 font-semibold">PDF</p>
            </div>
            <div className="bg-white border border-violet-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm mb-2">Pages</p>
              <p className="text-gray-800 font-semibold">8-12</p>
            </div>
            <div className="bg-white border border-violet-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm mb-2">Rating</p>
              <p className="text-gray-800 font-semibold">⭐ 4.9/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
