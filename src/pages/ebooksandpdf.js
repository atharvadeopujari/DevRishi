import React from "react";
import { Link } from "react-router-dom";
import Log from "../assets/image9.jpg";
import "../styles/book.css";

export const MenuList = [
  {
    name: "Secrets of Indian Medicine Ayurveda",
    author: "Dr. R. S. Agarwal",
    link: "https://drive.google.com/file/d/1UWl7qT6d7v_o-J6c4T7Bg6qBKwJq5YHj/view",
    image: require("../assets/image1.jpg"), // Use the imported image variable
  },
  {
    name: "The Magic of Ayurveda",
    author: "Sanjay Dixit, Deep Narayan Pandey",
    link: "https://drive.google.com/file/d/1C2S0y9XSRaK-6-3uRafe4SugArOsow7X/view",
    image: require("../assets/image2.jpg"), // Use the imported image variable
  },
  {
    name: "Shushrutha samhita",
    author: "K.L Bhishagratna",
    link: "https://drive.google.com/file/d/14gst5YTpt-zNdaMEizv_0rMcHNA2r4xT/view",
    image: require("../assets/image3.jpg"), // Use the imported image variable
  },
];

function MenuItem({ image, name, author, link }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image.default})` }}> </div>
      <h1> {name} </h1>
      <h3>{author}</h3> 
      <div className="button-container">
        <a href={link} target="_blank" rel="noopener noreferrer" className="button-link">
          Go to Page
        </a>
      </div>
    </div>
  );
}

function Ab() {
  return (
    <div className="about" style={{ backgroundImage: `url(${Log})` }}>
      <div className="aboutBottom">
        <h1>E-Books</h1>
        <div className="menu">
          <div className="menuList">
            {MenuList.map((menuItem, key) => {
              return (
                <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  author={menuItem.author}
                  link={menuItem.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ab;

