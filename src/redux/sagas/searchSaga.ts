
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { FETCH_SEARCH_REQUEST } from '../actionTypes';
import { searchSuccess, searchFailure } from '../actions/searchActions';
import { fetchSearchSuggestionApi } from '../../services/apis/api'


interface SearchAction {
  type: typeof FETCH_SEARCH_REQUEST;
  payload: string;
}

function* searchSaga(action:any):any {
  try {
    const response:any = yield call(fetchSearchSuggestionApi, action.payload);
    
    yield put(searchSuccess(response.data));
  } catch (error: any) {
    yield put(searchFailure(error.message));
  }
}

export default function* watchSearchSaga() {
  yield debounce(1000,FETCH_SEARCH_REQUEST, searchSaga);
}
