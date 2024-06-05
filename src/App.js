import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compenent/Home';
import Cart from './compenent/cart/cart';


function App() {

  const handleClick = () => {
    console.log('ajoute to pannier');
  };


  const message = "Hello from the App component!";
  return (
    <>
      <Routes>
        <Route path="/" element={<Home  onButtonClick={handleClick} message={message} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
