import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Content1 from "./pages/content1";
import Book from "./pages/ebooksandpdf"; 
import Navbar from "./components/Navbar"; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content1" element={<Content1 />} />
          <Route path="/book" element={<Book />} /> 
        </Routes>
        {/* Add a link to navigate to the Content1 component */}
        <Link to="/content1">Go to Content1</Link>
      </Router>
      <Footer />
    </div>
  );
}

export default App;



