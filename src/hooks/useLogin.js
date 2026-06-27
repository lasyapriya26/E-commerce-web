import { useContext } from "react";
import { LoginContext } from "../context/contexts";

export const useLogin = () => useContext(LoginContext);
