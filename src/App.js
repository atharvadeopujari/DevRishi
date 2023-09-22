import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Content1 from "./pages/content1";
import Content2 from "./pages/content2";
import Content3 from "./pages/content3";
import Content4 from "./pages/content4";
import Book from "./pages/ebooksandpdf"; 
import Navbar from "./components/Navbar"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router> {/* Wrap your entire app with the Router */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content1" element={<Content1 />} />
          <Route path="/content2" element={<Content2 />} />
          <Route path="/content3" element={<Content3 />} />
          <Route path="/content4" element={<Content4 />} />
          <Route path="/book" element={<Book />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



