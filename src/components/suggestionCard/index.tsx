import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import './SuggestionCard.css'; 
import { SuggestionCardProps } from "./SuggestionCard";



const SuggestionCards: React.FC<SuggestionCardProps> = ({
  id,
  image,
  title,
  description,
  foodType,
  categories,
  linkTo,
}) => {
  return (
    <NavLink to={linkTo} key={id} className="suggestion-card-link">
      <Card className="suggestion-card" >
        <div className="card-content">
          <Card.Img variant="top" src={image} className="card-image" loading="lazy" />
          <div className="card-details">
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Text className="card-description">{description}</Card.Text>
            {categories && (
              <Card.Text className="card-categories">
                {categories.join(", ")}
              </Card.Text>
            )}
            {foodType && <Card.Text className="card-food-type">{foodType}</Card.Text>}
          </div>
        </div>
      </Card>
    </NavLink>
  );
};

export default SuggestionCards;
