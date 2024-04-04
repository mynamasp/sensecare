import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./routes/Products";
import Home from "./routes/Home";
import Reports from "./routes/Reports";
import Navbar from "./components/Navbar";
import Login from "./routes/Login";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<WithNavbar><Products /></WithNavbar>} />
      <Route path="/reports" element={<WithNavbar><Reports /></WithNavbar>} />
      <Route path="/home" element={<WithNavbar><Home /></WithNavbar>} />
    </Routes>
  </BrowserRouter>
);

const WithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

createRoot(document.getElementById("root")).render(<App />);
