import "./App.css";
import ProductDetails from "./components/Products Details/ProductDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Signup from "./components/Signup/Signup";
import Cart from "./components/Cart/Cart";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
