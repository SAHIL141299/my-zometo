import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_RESTAURANTS_REQUEST } from '../ActionTypes';
import { fetchRestaurantsSuccess, fetchRestaurantsFailure } from '../Actions/RestaurantActions';
import { fetchRestaurantDataApi } from '../../Services/Apis/Api';
import { FetchRestaurantsResponse } from './Sagas';


function* fetchRestaurantsSaga() {
  try {
    const response: FetchRestaurantsResponse = yield call(fetchRestaurantDataApi);
    
    yield put(fetchRestaurantsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchRestaurantsFailure(error.message));
  }
}


export default function* restaurantSaga() {
  yield takeLatest(FETCH_RESTAURANTS_REQUEST, fetchRestaurantsSaga);
}
