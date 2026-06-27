import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/index.jsx"));
const AuthLogin = lazy(() => import("./pages/AuthLogin/index.jsx"));
const Cart = lazy(() => import("./pages/Cart/index.jsx"));
const Whislist = lazy(() => import("./pages/Whislist/index.jsx"));

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Whislist />} />
            <Route path="/auth/login" element={<AuthLogin />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
