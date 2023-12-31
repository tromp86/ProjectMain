import React from "react";
import "./product.css";
import Accordion from "./stayProps/components/Accordion.jsx";

function Product(props) {
  const {
    title,
    icon,
    description,
    rating,
    recipeLink,
    descriptionMain,
    blockIcons,
  } = props;

  return (
    <div>
      <div className="card">
        <div className="icon">{icon}</div>
        <div className="card-pading">
          <div className="title-card">{title}</div>
          <Accordion title={title} content={descriptionMain} />
          <div className="blockIcons">{blockIcons}</div>
          <p className="description">{description}</p>
          
          <div className="rating">{rating}</div>
          <a href={recipeLink} className="link">
            see in the github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
