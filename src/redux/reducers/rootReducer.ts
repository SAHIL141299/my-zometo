
import { combineReducers } from 'redux';
import restaurantReducer from './RestaurantReducer';
import searchReducer from './SearchReducer';


const rootReducer = combineReducers<any>({
  restaurant: restaurantReducer,
  search: searchReducer,
});

export default rootReducer;

