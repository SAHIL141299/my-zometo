import { all } from 'redux-saga/effects';
import watchSearchSaga from './SearchSaga'
import restaurantSaga from './RestaurantSaga';

export default function* rootSaga() {
  yield all([watchSearchSaga(), restaurantSaga()]);
}
