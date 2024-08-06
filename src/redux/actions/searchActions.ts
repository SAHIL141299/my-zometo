
import { FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE } from '../actionTypes';

export const searchRequest = (query: string) => ({
  type: FETCH_SEARCH_REQUEST,
  payload: query,
});

export const searchSuccess = (data: any[]) => ({
  type: FETCH_SEARCH_SUCCESS,
  payload: data,
});

export const searchFailure = (error: string) => ({
  type: FETCH_SEARCH_FAILURE,
  payload: error,
});
