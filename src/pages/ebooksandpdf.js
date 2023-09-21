import React from "react";

import { MenuList } from "../helpers/articlelist";
import MultiplePizzas from "../assets/img1.jpeg";
import MenuItem from "../components/article";
import "../styles/book.css";

function Ab() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ARTICLES</h1>
        <div className="menu">
         
          <div className="menuList">
            {MenuList.map((menuItem, key) => {
              return (
                <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  author={menuItem.author}
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

