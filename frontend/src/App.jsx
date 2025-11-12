import React, { createContext, useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';

// --- ASSETS & DATA ---
// We've brought your assets.js and context data into this one file
// to fix the import errors.

// Using placeholders for images
const bambi = 'https://placehold.co/600x400/172554/93c5fd?text=Bambi';
const everything = 'https://placehold.co/600x400/172554/93c5fd?text=Everything';
const everything2 = 'https://placehold.co/600x400/172554/93c5fd?text=Everything2';
const waybackhome = 'https://placehold.co/600x400/172554/93c5fd?text=Way+Back+Home';
const logo = 'https://placehold.co/120x50/172554/93c5fd?text=LOGO';

// Using inline SVGs for icons
const search_icon =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlV2lkdGg9IjEuNSIgc3Ryb2tlPSIjZGJlOGZmIiBjbGFzcz0idy02IGgtNiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjEgMjFsLTUuMTk3LTUuMTk3bTAgMEE3LjUgNy41IDAgMTA1LjE5NiA1LjE5NmE3LjUgNy41IDAgMDAxMC42MDcgMTAuNjA3eiIgLz48L3N2Zz4=';
const cart =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlV2lkdGg9IjEuNSIgc3Ryb2tlPSIjZGJlOGZmIiBjbGFzcz0idy02IGgtNiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjIuNSAzaDEuMzg2Yy41MSAwIC45NTUuMzQzIDEuMDg3LjgzNWwuMzgzIDEuNDM3TTcuNSAxNC4yNWEzIDMgMCAwMC0zIDNoMTUuNzVtLTEyLjc1LTNoMTEuMjE4Yy41MSAwIC45NTUuMzQzIDEuMDg3LjgzNWwuMzgzIDEuNDM3TTcuNSAxNC4yNWgxMS4yMThNMTUgMTQuMjVhMyAzIDAgMTExLTYgMCAzIDMgMCAwMTYgMHoiIC8+PC9zdmc+';
const menu_icon =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlV2lkdGg9IjEuNSIgc3Ryb2tlPSIjZGJlOGZmIiBjbGFzcz0idy02IGgtNiI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMy43NSA2Ljc1aDE2LjVNNCAxMmwxNi41TTQuNSA3LjEzaDE2LjUiLz4KPC9zdmc+Cg==';
const dropdown_icon =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlV2lkdGg9IjEuNSIgc3Ryb2tlPSIjZGJlOGZmIiBjbGFzcz0idy02IGgtNiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2EtbGluZWpvaW49InJvdW5kIiBkPSJtMTkuNSA4LjI1LTcuNSA3LjUtNy41LTcuNSIgLz48L3N2Zz4=';

export const assets = {
  logo,
  bambi,
  everything,
  everything2,
  waybackhome,
  search_icon,
  cart,
  menu_icon,
  dropdown_icon,
};

export const products = [
  {
    _id: 1, // Changed to _id
    name: 'Bambi',
    description: 'Tabs for Bambi - Baekhyun',
    price: 2,
    image: bambi,
  },
  {
    _id: 2,
    name: 'Way Back Home',
    description: 'Tabs for Way Back Home - SHAUN',
    price: 2,
    image: waybackhome,
  },
  {
    _id: 3,
    name: 'Everything',
    description: 'Tabs for Everything - The Black Skirts',
    price: 2,
    image: everything,
  },
];

// --- SHOP CONTEXT ---
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const activeClass = 'text-blue-400 border-b-2 border-blue-400 pb-1';
  const inactiveClass = 'text-slate-300 hover:text-blue-400 transition-colors';

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between py-5 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-slate-900/50 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-blue-500/10">
        <Link to="/">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-8 w-auto"
            onError={(e) => (e.target.style.display = 'none')}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-6 h-6 cursor-pointer"
          />
          <Link to="/cart" className="relative">
            <img
              src={assets.cart}
              alt="Cart"
              className="w-6 h-6 cursor-pointer"
            />
            <p className="absolute -top-2 -right-2 w-4 h-4 text-center leading-4 bg-blue-500 text-white rounded-full text-[10px]">
              10
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="Menu"
            className="w-6 cursor-pointer sm:hidden"
          />
        </div>

        {/* Sidebar for mobile view */}
        <div
          className={`fixed top-0 right-0 h-screen bg-slate-800 shadow-2xl transition-all duration-300 ease-in-out z-50 ${
            visible ? 'w-64' : 'w-0'
          } overflow-hidden`}
        >
          <div className="flex flex-col text-slate-200 p-4">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center justify-end gap-4 p-3 cursor-pointer self-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 px-3 rounded hover:bg-slate-700"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 px-3 rounded hover:bg-slate-700"
              to="/products"
            >
              PRODUCTS
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 px-3 rounded hover:bg-slate-700"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 px-3 rounded hover:bg-slate-700"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

// --- HERO COMPONENT ---
const Hero = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-lg my-10">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12 text-center md:text-left">
          <div className="text-white max-w-md">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <p className="w-8 h-[2px] bg-blue-400"></p>
              <p className="font-medium text-sm text-blue-400 tracking-wider">
                MY WORK
              </p>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold my-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">
              MY PORTFOLIO
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              I build modern web applications and love to create music.
            </p>
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 mx-auto md:mx-0">
              VIEW PROJECTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Right Section - Placeholder */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex items-center justify-center">
          <div className="w-full h-64 bg-slate-800/50 rounded-lg flex items-center justify-center">
            <p className="text-slate-400">My Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- LATEST PRODUCTS COMPONENTS ---
const Title = ({ text1, text2 }) => {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
      {text1}{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        {text2}
      </span>
    </h2>
  );
};

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <div className="relative flex flex-col rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-white/20 transform hover:-translate-y-1">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
        onError={(e) => {
          e.target.src = 'https://placehold.co/600x400/1e293b/93c5fd?text=Image+Error';
        }}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-white mb-1 truncate">
          {name}
        </h3>
        <p className="text-blue-300 text-xl font-bold mb-4">
          {currency}
          {price}
        </p>
        <button className="mt-auto w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 ease-in-out">
          View
        </button>
      </div>
    </div>
  );
};

const LatestProducts = () => {
  const { products } = useContext(ShopContext);
  const latestProducts = products.slice(0, 3);

  return (
    <div className="my-10">
      <div className="text-center py-8">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-full sm:w-3/4 md:w-1/2 mx-auto text-sm sm:text-base text-slate-400 mt-4">
          Check out the newest guitar tabs. All tabs are carefully transcribed
          and easy to read.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={item._id || index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

// --- PAGE COMPONENTS (Home + Placeholders) ---
const Home = () => {
  return (
    <>
      <Hero />
      <LatestProducts />
    </>
  );
};

const Page = ({ title }) => (
  <div className="my-10 p-10 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-lg">
    <h1 className="text-4xl font-bold text-white">{title}</h1>
    <p className="text-slate-300 mt-4">
      Content for the {title} page will go here.
    </p>
  </div>
);

const Products = () => <Page title="Products" />;
const About = () => <Page title="About" />;
const Product = () => <Page title="Product Details" />;
const Contact = () => <Page title="Contact" />;
const Cart = () => <Page title="Shopping Cart" />;
const PlaceOrder = () => <Page title="Place Order" />;
const Orders = () => <Page title="My Orders" />;

// --- MAIN APP COMPONENT ---
const App = () => {
  return (
    <ShopContextProvider>
      {/* Main background */}
      <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 to-indigo-950 text-slate-200">
        {/* Main container with padding */}
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] max-w-screen-2xl mx-auto">
          <Navbar />
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
        </div>
      </div>
    </ShopContextProvider>
  );
};

export default App;