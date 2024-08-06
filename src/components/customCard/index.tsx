import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

interface CustomCardProps {
  id: string | number;
  image: string;
  title: string;
  description: string;
  categories?: string[];
  foodType?: string;
  linkTo: string;
  style?: React.CSSProperties ;
}


const CustomCard: React.FC<CustomCardProps> = ({
  id,
  image,
  title,
  description,
  foodType,
  categories,
  linkTo,
  style
}) => {
  return (
    <NavLink to={linkTo} key={id} className="custom-card-link">
      <Card className="custom-card">
        <Card.Img variant="top" src={image}  style={style}/>
        <Card.Body>
          <Card.Title className="left-align">{title}</Card.Title>
          <Card.Text className="left-align">{description}</Card.Text>
          {categories && (
            <Card.Text className="right-align">
              {categories.join(", ")}
            </Card.Text>
          )}
          {foodType && <Card.Text className="right-align">{foodType}</Card.Text>}
        </Card.Body>
      </Card>
    </NavLink>
  );
};

export default CustomCard;