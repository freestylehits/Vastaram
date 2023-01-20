import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Footer from "./Componenets/Footer/Footer";
import Gallery from "./Componenets/Gallery/Gallery";
import Home from "./Componenets/Home/Home";
import Navbar from "./Componenets/Navbar/Navbar";
import Cart from "./Componenets/Cart/Cart";

const App = () => {
  return (
    <div className="mainapp">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
