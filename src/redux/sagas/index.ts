import { all } from 'redux-saga/effects';
import watchSearchSaga from './searchSaga'
import restaurantSaga from './restaurantSaga';

export default function* rootSaga() {
  yield all([watchSearchSaga(), restaurantSaga()]);
}
