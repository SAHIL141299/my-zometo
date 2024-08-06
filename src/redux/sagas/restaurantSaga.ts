import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_RESTAURANTS_REQUEST } from '../actionTypes';
import { fetchRestaurantsSuccess, fetchRestaurantsFailure } from '../actions/restaurantActions';
import { fetchRestaurantDataApi } from '../../services/apis/api';

interface Restaurant {
  id: any;
  name: any;
 
}

interface FetchRestaurantsResponse {
  data: Restaurant[];
}

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
