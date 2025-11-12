import React, { useState, createContext, useContext } from 'react';
// We'll import these from 'react-router-dom'
import { Link, NavLink, Routes, Route } from 'react-router-dom';

// --- Mock Data & Context ---
// This is the mock data and context from your LatestProducts.jsx,
// now provided at the top level of the app.
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

const ShopContext = createContext(mockShopContextValue);
// --- End of Mock Data & Context ---

// --- SVG Icons (from Navbar) ---
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);
// --- End of SVG Icons ---

// --- Navbar Component ---
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const getNavLinkClass = ({ isActive }) => {
    return `flex flex-col items-center gap-1 group ${
      isActive
        ? 'text-white font-semibold'
        : 'text-slate-300 hover:text-blue-400 transition-colors'
    }`;
  };

  const getHrClass = (isActive) => {
    return `w-2/4 border-none h-[2px] transition-all ${
      isActive
        ? 'bg-blue-500'
        : 'bg-transparent group-hover:bg-blue-400/50'
    }`;
  };

  return (
    // Navbar: Updated blur, background opacity, and border
    <div className="sticky top-0 z-40 flex items-center justify-between py-5 font-medium bg-slate-900/50 backdrop-blur-lg px-4 md:px-8 shadow-lg shadow-black/20 border-b border-white/10">
      <Link to="/" className="text-white text-2xl font-bold tracking-tight">
        LOGO
      </Link>
      <ul className="hidden sm:flex gap-6 text-sm">
        <NavLink to="/" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              <p>HOME</p>
              <hr className={getHrClass(isActive)} />
            </>
          )}
        </NavLink>
        <NavLink to="/products" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              <p>PRODUCTS</p>
              <hr className={getHrClass(isActive)} />
            </>
          )}
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              <p>ABOUT</p>
              <hr className={getHrClass(isActive)} />
            </>
          )}
        </NavLink>
        <NavLink to="/contact" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              <p>CONTACT</p>
              <hr className={getHrClass(isActive)} />
            </>
          )}
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 text-slate-300">
        <button className="cursor-pointer hover:text-blue-400 transition-colors">
          <SearchIcon />
        </button>
        <Link
          to="/cart"
          className="relative hover:text-blue-400 transition-colors"
        >
          <CartIcon />
          <p className="absolute right-[-8px] bottom-[-8px] w-5 h-5 flex items-center justify-center bg-blue-600 text-white rounded-full text-[10px] font-bold">
            10
          </p>
        </Link>
        <button
          onClick={() => setVisible(true)}
          className="cursor-pointer sm:hidden hover:text-blue-400 transition-colors"
        >
          <MenuIcon />
        </button>
      </div>
      {/* Mobile Sidebar: Updated blur, background opacity, and border */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xl transition-all duration-300 ease-in-out border-l border-white/10 ${
          visible ? 'w-full max-w-xs' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-slate-200 pt-5">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center justify-between gap-4 p-4 cursor-pointer text-slate-300 hover:text-white"
          >
            <p className="font-semibold">CLOSE</p>
            <BackIcon />
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-8 hover:bg-slate-800/50 transition-colors"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-8 hover:bg-slate-800/50 transition-colors"
            to="/products"
          >
            PRODUCTS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-8 hover:bg-slate-800/50 transition-colors"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-8 hover:bg-slate-800/50 transition-colors"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};
// --- End of Navbar Component ---

// --- Hero Component ---
const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Hero = () => {
  return (
    // Hero: Updated blur, background opacity, and border
    <div className="max-w-7xl mx-auto my-12 overflow-hidden rounded-xl shadow-2xl shadow-blue-700/20 bg-slate-900/50 backdrop-blur-xl border border-white/10">
      {/* Removed bg-slate-900 from this inner div */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-16">
          <div className="text-slate-200 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-10 h-0.5 bg-blue-500"></span>
              <span className="font-semibold text-sm text-blue-400 tracking-wider uppercase">
                MY WORK
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white my-4 tracking-tight leading-tight">
              MY PORTFOLIO
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              I build modern web applications and love to create music.
            </p>
            <a
              href="#products" // Changed to an anchor link
              className="group inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              VIEW PROJECTS
              <ArrowRight />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src="https://placehold.co/800x800/1e293b/ffffff?text=My+Projects"
            alt="Portfolio projects"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/800x800/cccccc/969696?text=Image+Not+Found';
            }}
          />
        </div>
      </div>
    </div>
  );
};
// --- End of Hero Component ---

// --- LatestProducts Components ---
const ProductCard = ({ product, currency }) => {
  if (!product) {
    return null;
  }
  const productName = product.name || 'Product Name';
  const productDesc =
    product.description || 'A brief description of the product goes here.';
  const productPrice = product.price || '0.00';
  const productImage =
    product.image ||
    'https://placehold.co/600x400/1e293b/94a3b8?text=Product';

  return (
    // ProductCard: Updated blur, background opacity, and border
    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.02]">
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
  const { products, currency } = useContext(ShopContext);
  console.log('Products from context:', products);
  const latestProducts = Array.isArray(products) ? products.slice(0, 3) : [];

  return (
    // LatestProducts: Removed solid bg-slate-900 from this container
    <div id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">
            Latest Products
          </h2>
        </div>
        {latestProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProducts.map((product) => (
              <ProductCard
                key={product.id || Math.random()}
                product={product}
                currency={currency || '$'}
              />
            ))}
          </div>
        ) : (
          <p className="text-slate-400 text-center">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};
// --- End of LatestProducts Components ---

// --- Page Components ---
// A special component to render the Hero and LatestProducts
const Home = () => {
  return (
    <>
      <Hero />
      <LatestProducts />
    </>
  );
};

// --- Placeholder Page Components ---
// Applied glassmorphism styles to the placeholder card
const PlaceholderPage = ({ title }) => (
  <div className="text-white text-center py-20 max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="text-slate-400 mt-4">This is a placeholder page.</p>
  </div>
);

const Products = () => <PlaceholderPage title="Products" />;
const About = () => <PlaceholderPage title="About" />;
const Product = () => <PlaceholderPage title="Single Product Page" />; 
const Contact = () => <PlaceholderPage title="Contact" />;
const Cart = () => <PlaceholderPage title="Cart" />;
const PlaceOrder = () => <PlaceholderPage title="Place Order" />;
const Orders = () => <PlaceholderPage title="Orders" />;

// --- Main App Component ---
// This is the main component that renders everything in order.
// Your project's entry point (like index.js or main.jsx)
// should render this App component inside a <BrowserRouter>.
const App = () => {
  return (
    <ShopContext.Provider value={mockShopContextValue}>
      {/* Main Background: Swapped back to a dark LINEAR gradient that will work */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 min-h-screen">
        <Navbar />
        <main>
          {/* Your routes are now set up here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:productID" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </ShopContext.Provider>
  );
};

export default App;