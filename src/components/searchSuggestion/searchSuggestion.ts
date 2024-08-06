export interface searchs {
  data: suggestion[];
  error: null | string;
  loading: boolean;
}
export interface search {
  search: searchs;
}

export interface suggestion {
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
