import React from 'react';
// import { ShopContext } from '../context/ShopContext.jsx'; // Removed failing import

// --- Mock Data ---
// Added mock data here since we can't import it in this preview
const mockProducts = [
  {
    id: 1,
    name: 'Guitar Tab Pack Vol. 1',
    description: 'A collection of 5 essential song tabs for beginners.',
    price: '15.00',
    image: 'https://placehold.co/600x400/1e293b/3b82f6?text=Tab+Pack+1',
  },
  {
    id: 2,
    name: 'Acoustic Hits Tab Pack',
    description: 'Learn 10 classic acoustic songs with these tabs.',
    price: '25.00',
    image: 'https://placehold.co/600x400/1e293b/3b82f6?text=Acoustic+Hits',
  },
  {
    id: 3,
    name: 'Soloing Techniques Guide',
    description: 'Master the art of guitar soloing with this guide.',
    price: '19.99',
    image: 'https://placehold.co/600x400/1e293b/3b82f6?text=Soloing+Guide',
  },
];

const mockShopContextValue = {
  products: mockProducts,
  currency: '$',
  delivery_fee: 10,
};

// Create the context here with a default value
const ShopContext = React.createContext(mockShopContextValue);
// --- End of Mock Data ---

// A single product card component, styled for the dark theme
const ProductCard = ({ product, currency }) => {
  if (!product) {
    return null;
  }

  // Fallback values for safety
  const productName = product.name || 'Product Name';
  const productDesc =
    product.description || 'A brief description of the product goes here.';
  const productPrice = product.price || '0.00';
  const productImage =
    product.image ||
    'https://placehold.co/600x400/1e293b/94a3b8?text=Product';

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg shadow-slate-900/50 transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.02]">
      {/* Product Image */}
      <img
        src={productImage}
        alt={productName}
        className="w-full h-56 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            'https://placehold.co/600x400/1e293b/94a3b8?text=Image+Not+Found';
        }}
      />

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-2 truncate">
          {productName}
        </h3>
        <p className="text-slate-400 text-sm mb-4 h-10 overflow-hidden">
          {productDesc}
        </p>
        <div className="flex items-center justify-between mt-6">
          <p className="text-blue-400 text-xl font-bold">
            {currency}
            {productPrice}
          </p>
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md text-sm hover:bg-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

const LatestProducts = () => {
  // Get products and currency from our mock context
  const { products, currency } = React.useContext(ShopContext);

  // Log products to the console as requested
  console.log('Products from context:', products);

  // Show only the first 3 products
  const latestProducts = Array.isArray(products) ? products.slice(0, 3) : [];

  return (
    <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">
            Latest Products
          </h2>
        </div>

        {/* Products Grid */}
        {latestProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProducts.map((product) => (
              <ProductCard
                key={product.id || Math.random()} // Use a stable key if possible
                product={product}
                currency={currency || '$'}
              />
            ))}
          </div>
        ) : (
          // Fallback text if no products are found
          <p className="text-slate-400 text-center">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default LatestProducts;