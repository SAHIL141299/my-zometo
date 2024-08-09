export interface restaurant {
  restaurant: data;
}

export interface data {
  categories: string[];
  foodType: string;
  id: number;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  items: dish[];
  location: string;
  rating: number;
  restaurantName: string;
}

export interface dish {
  id: number;
  name: string;
  price: number;
}

export interface RestaurantCardProps {
  filter: string;
}
