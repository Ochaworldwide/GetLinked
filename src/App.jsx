import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./footer";
import Contact from "./contact";
import Register from "./register";
import Layout from "./Layout";

function App() {
  
  return (
    <div className="bg-[#150E28] w-full box-border">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>


    </div>

    
  );
}

export default App;
