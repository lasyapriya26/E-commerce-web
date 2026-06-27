export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload.product],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload.product.id),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        fav: [...state.fav, payload.product],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        fav: state.fav.filter((product) => product.id !== payload.product.id),
      };
    case "CLEAR_CART_AND_WISHLIST":
      return {
        ...state,
        cart: [],
        fav: [],
      };
    default:
      return state;
  }
};