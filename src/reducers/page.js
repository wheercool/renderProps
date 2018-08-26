import {
  GET_PHOTOS_FAIL,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCEES,
  GET_YEARS_REQUEST,
  GET_YEARS_SUCCESS
} from '../actions/pageActions';

const initialState = {
  isFetching: false,
  year: '',
  years: [],
  photos: [],
  error: ''
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_YEARS_REQUEST:
      return {
        ...state
      };

    case GET_YEARS_SUCCESS:
      return {
        ...state,
        years: action.payload
      };
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        year: action.payload,
        isFetching: true,
        error: ''
      };
    case GET_PHOTOS_SUCCEES:
      return {
        ...state,
        isFetching: false,
        photos: action.payload
      };

    case GET_PHOTOS_FAIL:
      return {
        ...state,
        isFetching: false,
        photos: [],
        error: action.payload.message
      };
    default:
      return state;
  }
}
