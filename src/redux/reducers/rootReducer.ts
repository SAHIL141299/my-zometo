
import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import searchReducer from './searchReducer';


const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  search: searchReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
