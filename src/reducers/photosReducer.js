import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      console.log('case FETCH_DATA_LOADING');
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      console.log('case FETCH_DATA_SUCCESS');
      console.log('action.payload', action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      console.log('case FETCH_DATA_FAILURE');
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default photosReducer;
