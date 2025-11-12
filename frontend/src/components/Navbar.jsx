import React from 'react';
// import { assets } from '../assets/assets'; // Removed this line to fix the import error
import { Link, NavLink } from 'react-router-dom';

// --- Inline SVG Icons ---
// Replaced assets.search_icon
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

// Replaced assets.cart
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

// Replaced assets.menu_icon
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

// Replaced assets.dropdown_icon (and rotated it)
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
    className="h-6 w-6" // Was h-6 rotate-90
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);
// --- End of SVG Icons ---

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);

  // This function conditionally applies classes for the active NavLink
  const getNavLinkClass = ({ isActive }) => {
    return `flex flex-col items-center gap-1 group ${
      isActive
        ? 'text-white font-semibold'
        : 'text-slate-300 hover:text-blue-400 transition-colors'
    }`;
  };

  // This function conditionally applies classes for the active NavLink's underline
  const getHrClass = (isActive) => {
    return `w-2/4 border-none h-[2px] transition-all ${
      isActive
        ? 'bg-blue-500'
        : 'bg-transparent group-hover:bg-blue-400/50'
    }`;
  };

  return (
    // Main navbar container: Added a subtle bottom border and a blue glow shadow
    <div className="flex items-center justify-between py-5 font-medium bg-slate-900 px-4 md:px-8 shadow-lg shadow-blue-500/10 border-b border-slate-700/50">
      {/* Replaced img src={assets.logo} with a text logo */}
      <Link to="/" className="text-white text-2xl font-bold tracking-tight">
        LOGO
      </Link>

      {/* Desktop Navigation Links */}
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

      {/* Icons Section */}
      <div className="flex items-center gap-6 text-slate-300">
        {/* Replaced img with SVG component */}
        <button className="cursor-pointer hover:text-blue-400 transition-colors">
          <SearchIcon />
        </button>

        <Link
          to="/cart"
          className="relative hover:text-blue-400 transition-colors"
        >
          {/* Replaced img with SVG component */}
          <CartIcon />
          {/* Updated badge to use the blue accent color */}
          <p className="absolute right-[-8px] bottom-[-8px] w-5 h-5 flex items-center justify-center bg-blue-600 text-white rounded-full text-[10px] font-bold">
            10
          </p>
        </Link>

        {/* Mobile menu icon */}
        <button
          onClick={() => setVisible(true)}
          className="cursor-pointer sm:hidden hover:text-blue-400 transition-colors"
        >
          {/* Replaced img with SVG component */}
          <MenuIcon />
        </button>
      </div>

      {/* Sidebar for mobile view */}
      {/* Updated to a dark theme with a subtle border */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-slate-900 transition-all duration-300 ease-in-out border-l border-slate-700 ${
          visible ? 'w-full max-w-xs' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-slate-200 pt-5">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center justify-between gap-4 p-4 cursor-pointer text-slate-300 hover:text-white"
          >
            <p className="font-semibold">CLOSE</p>
            {/* Replaced img with SVG component and adjusted rotation */}
            <BackIcon />
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-8 hover:bg-slate-800 transition-colors"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-8 hover:bg-slate-800 transition-colors"
            to="/products"
          >
            PRODUCTS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-8 hover:bg-slate-800 transition-colors"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-8 hover:bg-slate-800 transition-colors"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

