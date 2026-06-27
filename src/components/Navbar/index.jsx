import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useCart } from "../../hooks/useCart";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const { token, loginDispatch } = useLogin();
  const { cartDispatch } = useCart();

  const onLoginClick = () => {
    if (token) {
      loginDispatch({
        type: "LOGOUT",
      });
      cartDispatch({
        type: "CLEAR_CART_AND_WISHLIST",
      });
      navigate("/");
    } else {
      navigate("/auth/login");
    }
    setIsAccountDropDownOpen(false);
  };

  return (
    <header className="flex bg-green-500 justify-between h-15 align-middle items-center font-extrabold p-2">
      <h1
        onClick={() => navigate("/")}
        className="text-slate-100 text-3xl cursor-pointer"
      >
        Online Store
      </h1>
      <nav className="flex gap-6 cursor-pointer text-2xl px-6">
        <i
          onClick={() => navigate("/wishlist")}
          className="bi bi-heart-fill"
        ></i>
        <i onClick={() => navigate("/cart")} className="bi bi-cart"></i>
        <div className="relative">
          <i
            onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)}
            className="bi bi-person-circle"
          ></i>
          {isAccountDropDownOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg p-2 text-black text-base">
              <button onClick={onLoginClick} className="w-full text-left">
                {token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};