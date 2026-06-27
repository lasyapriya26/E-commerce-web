import { useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { CartContext } from "./contexts";

const getInitialData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error parsing JSON from localStorage for key "${key}":`, error);
    return [];
  }
};


export const CartProvider = ({ children }) => {
  const initialState = {
    cart: getInitialData("cart_items"),
    fav: getInitialData("wishlist_items"),
  };

  const [{ cart, fav }, cartDispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist_items", JSON.stringify(fav));
  }, [fav]);


  return (
    <CartContext.Provider value={{ cart, fav, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};