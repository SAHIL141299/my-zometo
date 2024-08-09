import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRestaurantsRequest } from "../../Redux/Actions/RestaurantActions";
import { Navbar } from "../../Components/ComponentIndex";
import { data } from "./RestaurantData";
import "./RestaurantData.css";

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const restaurantData = useSelector(
    (state: { restaurant: { data: data[] } }) => state.restaurant.data
  );

  const restaurant = restaurantData.find((rest) => rest.id.toString() === id);

  useEffect(() => {
    if (!restaurantData.length) {
      dispatch(fetchRestaurantsRequest());
    }
  }, [dispatch, restaurantData]);

  return (
    <>
      <Navbar />
      <div className="restaurant-detail">
        {restaurant ? (
          <div className="restaurant-detail-container">
            <h1>{restaurant.restaurantName}</h1>
            <div className="restaurant-image-container">
              <div className="restaurant-image-div">
                <img
                  src={restaurant.image}
                  alt={restaurant.restaurantName}
                  className="restaurant-image"
                  loading="lazy"
                />
              </div>
              <div className="restaurant-image-div-parent">
                <div className="restaurant-image2-div">
                  <img
                    src={restaurant.image2}
                    alt={restaurant.restaurantName}
                    className="restaurant-image"
                    loading="lazy"
                  />
                </div>
                <div className="restaurant-image3-div">
                  <img
                    src={restaurant.image3}
                    alt={restaurant.restaurantName}
                    className="restaurant-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="restaurant-image4-div">
                <img
                  src={restaurant.image4}
                  alt={restaurant.restaurantName}
                  className="restaurant-image"
                  loading="lazy"
                />
              </div>
            </div>
            <p>
              <strong>Food Type:</strong> {restaurant.foodType}
            </p>
            <p>
              <strong>Rating:</strong> {restaurant.rating}
            </p>
            <p>
              <strong>Categories:</strong> {restaurant.categories.join(", ")}
            </p>
            <h2>Menu Items</h2>
            <ul className="menu-items-list">
              {restaurant.items.map((item, index) => (
                <li key={index} className="menu-item">
                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>
                  <p>
                    <strong>Price:</strong> {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default RestaurantDetail;
