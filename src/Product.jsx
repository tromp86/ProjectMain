import React from "react";
import "./product.css";

function Product(props) {
    const { title, icon, description, rating, recipeLink, descriptionMain, blockIcons } = props;
  
    return (
      <div>
        <div className="card flip-2-ver-left-fwd">
          <div className="icon">{icon}</div>
          <div className="card-pading">
          <div className="title-card">{title}</div>
          <div className="blockIcons">{blockIcons}</div>
          <p className="description">{description}</p>
          <span className="descriptionMain">{descriptionMain}</span>
          <div className="rating">{rating}</div>
          <a href={recipeLink} className="link">see in the github</a>
          </div>
        </div>
      </div>
    );
  }

export default Product;
