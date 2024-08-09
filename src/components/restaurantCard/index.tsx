import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsRequest } from "../../Redux/Actions/RestaurantActions";
import { CustomCard } from "../ComponentIndex";
import { RestaurantCardProps, data } from "./Card";


const RestaurantCard: React.FC<RestaurantCardProps> = ({ filter }) => {
  const dispatch = useDispatch();

  const restaurantData = useSelector(
    (state: { restaurant: { data: data[] } }) => state.restaurant.data
  );

  useEffect(() => {
    dispatch(fetchRestaurantsRequest());
  }, [dispatch]);

  const filteredData = restaurantData.filter((restaurant: data) => {
    if (filter === "all") return true;
    return filter === "veg"
      ? restaurant.foodType === "Veg"
      : restaurant.foodType === "No-Veg";
  });

  return (
    <div className="cards-container">
      {filteredData.map((restaurant) => (
        <CustomCard
          key={restaurant.id}
          id={restaurant.id}
          image={restaurant.image}
          title={restaurant.restaurantName}
          description={restaurant.rating.toString()}
          categories={restaurant.categories}
          foodType={restaurant.foodType}
          linkTo={`/restaurant/${restaurant.id}`}
        />
      ))}
    </div>
  );
};

export default RestaurantCard;
