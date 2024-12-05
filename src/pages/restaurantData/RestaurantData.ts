 export interface Item {
    name: string;
    description: string;
    price: number;
  }
  
 export interface data {
    id: number;
    restaurantName: string;
    description: string;
    image: string;
    image2: string;
    image3: string;
    image4: string;
    rating: string;
    categories: string[];
    foodType: string;
    items: Item[];
  }