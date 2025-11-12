import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';

const App = () => {
  return (
    <>
      {/* Main background - cute minimalist pastels */}
      <div className="min-h-screen w-full bg-gradient-to-b from-violet-50 via-purple-50 to-blue-50 text-gray-700">
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
        {/* Footer is placed outside the main padded container so its width is 100% */}
        <Footer />
      </div>
    </>
  );
};

export default App;
