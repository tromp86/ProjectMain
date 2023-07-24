import React from "react";
import "./product.css";

function Product(props) {
    const { title, icon, description, rating, recipeLink, descriptionMain } = props;
  
    return (
      <div id="portfolio">
        <h1>{title}</h1>
        <div className="card">
          <div className="icon">{icon}</div>
          <div className="title-card">{title}</div>
          <p className="description">{description}</p>
          <span className="descriptionMain">{descriptionMain}</span>
          <div className="rating">{rating}</div>
          <a href={recipeLink} className="link">See the recipe</a>
        </div>
      </div>
    );
  }

export default Product;
