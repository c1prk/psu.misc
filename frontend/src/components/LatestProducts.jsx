import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

// A single product card component, styled for the cute minimalist theme
const ProductCard = ({ product, currency }) => {
  if (!product) {
    return null;
  }

  // Fallback values for safety
  const productName = product.name || 'Product Name';
  const productPrice = product.price || '0.00';
  const productImage =
    product.image ||
    'https://placehold.co/600x400/f3e8ff/d8b4fe?text=Product';

  return (
    <div className="relative flex flex-col rounded-2xl bg-white border border-violet-200 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-violet-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <img
        src={productImage}
        alt={productName}
        className="w-full h-80 object-cover"
        onError={(e) => {
          e.target.src =
            'https://placehold.co/600x400/f3e8ff/d8b4fe?text=Image+Error';
        }}
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
          {productName}
        </h3>
        <p className="text-violet-500 text-xl font-bold mb-4">
          {currency}
          {productPrice}
        </p>
        <button className="mt-auto w-full bg-violet-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-violet-600 transition-all duration-300 ease-in-out">
          View
        </button>
      </div>
    </div>
  );
};

const LatestProducts = () => {
  const { products, currency } = useContext(ShopContext);

  // Show only the first 3 products
  const latestProducts = Array.isArray(products) ? products.slice(0, 3) : [];

  return (
    <div className="my-10">
      <div className="text-center py-8">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-full sm:w-3/4 md:w-1/2 mx-auto text-sm sm:text-base text-gray-600 mt-4">
          Check out the newest guitar tabs. All tabs are carefully transcribed
          and easy to read.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {latestProducts.map((item) => (
          <ProductCard
            key={item._id}
            product={item}
            currency={currency}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;