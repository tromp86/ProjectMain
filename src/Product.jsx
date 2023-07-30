import React from "react";
import "./product.css";

function Product(props) {
    const { title, icon, description, rating, recipeLink, descriptionMain, blockIcons } = props;
  
    return (
      <div>
        <div className="card">
          <div className="icon">{icon}</div>
          <div className="title-card">{title}</div>
          <div className="blockIcons">{blockIcons}</div>
          <p className="description">{description}</p>
          <span className="descriptionMain">{descriptionMain}</span>
          <div className="rating">{rating}</div>
          <a href={recipeLink} className="link">See the recipe</a>
        </div>
      </div>
    );
  }

export default Product;
