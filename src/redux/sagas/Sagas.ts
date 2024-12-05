import { FETCH_SEARCH_REQUEST } from "../ActionTypes";

export interface Restaurant {
    id: any;
    name: any;
   
  }
  
export  interface FetchRestaurantsResponse {
    data: Restaurant[];
  }
  

 export interface SearchAction {
    type: typeof FETCH_SEARCH_REQUEST;
    payload: string;
  }