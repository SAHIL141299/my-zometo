
import { FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE } from '../ActionTypes';
import { SearchState } from './Reducer';

const initialState: SearchState = {
  data: [],
  loading: false,
  error: null,
};

export default function searchReducer(state = initialState, action: any): SearchState {
  switch (action.type) {
    case FETCH_SEARCH_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SEARCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_SEARCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
