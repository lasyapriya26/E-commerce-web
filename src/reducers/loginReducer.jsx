export const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return {
        ...state,
        email: payload.value,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload.value,
      };
    case "TOKEN":
      return {
        ...state,
        token: payload.token,
      };
    case "LOGOUT":
      localStorage.removeItem("login_token");
      localStorage.removeItem("cart_items");
      localStorage.removeItem("wishlist_items");
      return {
        ...state,
        email: "",
        password: "",
        token: "",
      };
    default:
      return state;
  }
};