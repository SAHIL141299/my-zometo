import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from '../actionTypes';

export const fetchRestaurantsRequest = () => ({
  type: FETCH_RESTAURANTS_REQUEST,
});

export const fetchRestaurantsSuccess = (data: any[]) => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  payload: data,
});

export const fetchRestaurantsFailure = (error: string) => ({
  type: FETCH_RESTAURANTS_FAILURE,
  payload: error,
});




