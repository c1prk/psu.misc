import { createContext } from 'react';
import { products } from '../assets/assets';

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};