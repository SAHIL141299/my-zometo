import axios from "axios";

const SEARCH_BASE_API_URL = "http://192.168.1.32:5500";
const SEARCH_API_ENDPOINTS = {
  SEARCH: "/search",
};

export const fetchSearchSuggestionApi = (search: string) => {
  const response = axios.post<any>(
    `${SEARCH_BASE_API_URL}${SEARCH_API_ENDPOINTS.SEARCH}`,
    { search }
  );
  return response;
};

const RESTAURANT_API_ENDPOINTS = {
  RESTAURANT: "/restaurant",
};

export const fetchRestaurantDataApi = () => {
  const response = axios.get<any>(
    `${SEARCH_BASE_API_URL}${RESTAURANT_API_ENDPOINTS.RESTAURANT}`
  );
  return response;
};
