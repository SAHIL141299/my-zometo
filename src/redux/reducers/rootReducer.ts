
import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import searchReducer from './searchReducer';


const rootReducer = combineReducers<any>({
  restaurant: restaurantReducer,
  search: searchReducer,
});

export default rootReducer;

