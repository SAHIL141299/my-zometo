
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_SEARCH_REQUEST } from '../actions/actionTypes';
import { searchSuccess, searchFailure } from '../actions/searchActions';


interface SearchResponse {
  data: any[];
}

interface SearchAction {
  type: typeof FETCH_SEARCH_REQUEST;
  payload: string;
}

function* searchSaga(action: SearchAction) {
  try {
    const response: SearchResponse = yield call(axios.get, `/your-search-api-endpoint?q=${action.payload}`);
    yield put(searchSuccess(response.data));
  } catch (error: any) {
    yield put(searchFailure(error.message));
  }
}

export default function* watchSearchSaga() {
  yield takeLatest(FETCH_SEARCH_REQUEST, searchSaga);
}
