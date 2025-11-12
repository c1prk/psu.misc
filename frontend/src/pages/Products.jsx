import React, { useContext } from 'react';
// Import the ShopContext from its correct file
import { ShopContext } from '../context/ShopContext.jsx';

// --- Re-using components from App.jsx ---
// (The next step will be to move these to their own files)

const Title = ({ text1, text2 }) => {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
      {text1}{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
        {text2}
      </span>
    </h2>
  );
};

const ProductItem = ({ image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <div className="relative flex flex-col rounded-2xl bg-white border border-violet-200 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-violet-300 transform hover:-translate-y-1">
      <img
        src={image}
        alt={name}
        className="w-full h-80 object-cover"
        onError={(e) => {
          e.target.src =
            'https://placehold.co/600x400/f3e8ff/d8b4fe?text=Image+Error';
        }}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
          {name}
        </h3>
        <p className="text-violet-500 text-xl font-bold mb-4">
          {currency}
          {price}
        </p>
        <button className="mt-auto w-full bg-violet-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-violet-600 transition-all duration-300 ease-in-out">
          View
        </button>
      </div>
    </div>
  );
};

// --- The main Products Page Component ---
const Products = () => {
  // Get all products from the context
  const { products } = useContext(ShopContext);

  return (
    <div className="my-10">
      <div className="text-center py-8">
        <Title text1="ALL" text2="PRODUCTS" />
        <p className="w-full sm:w-3/4 md:w-1/2 mx-auto text-sm sm:text-base text-gray-600 mt-4">
          Browse our entire collection of high-quality guitar tabs.
        </p>
      </div>
      {/* Grid to display ALL products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((item) => (
          <ProductItem
            key={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;