import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Book from "./pages/ebooksandpdf"; 
import Navbar from "./components/Navbar"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} /> 
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;



