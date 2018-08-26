import {
  FAKE_ACTION,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../actions/userActions';

const initialState = {
  isFetching: false,
  error: '',
  name: '',
  fakeCounter: 0
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        name: action.payload
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      };
    case FAKE_ACTION: {
      return {
        ...state,
        fakeCounter: state.fakeCounter + 1
      };
    }
    default:
      return state;
  }
}
