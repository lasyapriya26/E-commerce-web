import { useReducer, useEffect } from "react";
import { loginReducer } from "../reducers/loginReducer";
import { LoginContext } from "./contexts";

export const LoginProvider = ({ children }) => {
  const initialToken = localStorage.getItem("login_token") || "";

  const initialState = {
    email: "",
    password: "",
    token: initialToken,
  };
  
  const [{ email, password, token }, loginDispatch] = useReducer(
    loginReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem("login_token", token);
  }, [token]);


  return (
    <LoginContext.Provider value={{ email, password, token, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};