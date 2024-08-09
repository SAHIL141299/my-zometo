
import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from '../ActionTypes';

interface RestaurantState {
  data: any[];
  loading: boolean;
  error: any;
}

const initialState: RestaurantState = {
  data: [],
  loading: false,
  error: null,
};

export default function restaurantReducer(state = initialState, action: any) {
  
  switch (action.type) {
    case FETCH_RESTAURANTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_RESTAURANTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_RESTAURANTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}



