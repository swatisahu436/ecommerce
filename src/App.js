import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Body from './Component/Body';
import PhoneDetail from './Component/PhoneDetail';
import Header from './Component/Header';
import './App.css';
import { CartProvider } from './Component/CartContext';
import CartPage from './Component/CartPage';
import Footer from './Component/Footer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/phone/:id" element={<PhoneDetail />} />
          <Route path='/cart' element={<CartPage/>}></Route>
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
