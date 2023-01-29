import Navigation from "./Components/Navigation";
import {
   Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./Components/Products";
import Cart from "./pages/Cart";
import SingleProduct from './pages/SingleProduct';
import {CartContext} from "./CartContext";
import { useEffect, useState } from "react";

const App = () => {
  const [cart,setCart] = useState({});
  
  useEffect(()=>{
    const cart = window.localStorage.getItem('cart');
    setCart(JSON.parse(cart));
  },[]);

  useEffect(()=>{
    window.localStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);

  return (
    <>
      <CartContext.Provider value={{cart,setCart}}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="products/:_id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </>
  )
}

export default App;