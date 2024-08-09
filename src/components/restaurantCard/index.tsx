import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsRequest } from "../../Redux/Actions/RestaurantActions";
import { CustomCard } from "../ComponentIndex";

interface data {
  id: number;
  restaurantName: string;
  description: string;
  image: string;
  rating: string;
  categories: string[];
  foodType: string;
  className?: string;
  cardBodyClassName?: string;
}

interface RestaurantCardProps {
  filter: string;
}

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
          description={restaurant.rating}
          categories={restaurant.categories}
          foodType={restaurant.foodType}
          linkTo={`/restaurant/${restaurant.id}`}
        />
      ))}
    </div>
  );
};

export default RestaurantCard;
