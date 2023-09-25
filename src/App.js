import React from "react";
import {Helmet} from "react-helmet";
import "./App.css";
 // Import Home from the first code
 // Import Login from the first code
 import Login from "./components/login";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Content1 from "./pages/content1";
import Content2 from "./pages/content2";
import Content3 from "./pages/content3";
import Content4 from "./pages/content4";
import Content5 from "./pages/content5";
import Content6 from "./pages/content6";
import Content7 from "./pages/content7";
import Content8 from "./pages/content8";
import Book from "./pages/ebooksandpdf"; 
import Navbar from "./components/Navbar"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router> {/* Wrap your entire app with the Router */}
      <div className="App">
        <Helmet>
                <meta charSet="utf-8" />
                <title>DevRishi</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content1" element={<Content1 />} />
          <Route path="/content2" element={<Content2 />} />
          <Route path="/content3" element={<Content3 />} />
          <Route path="/content4" element={<Content4 />} />
          <Route path="/content5" element={<Content5 />} />
          <Route path="/content6" element={<Content6 />} />
          <Route path="/content7" element={<Content7 />} />
          <Route path="/content8" element={<Content8 />} />
       
          <Route path="/login" element={<Login />} />
         
          <Route path="/book" element={<Book />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



