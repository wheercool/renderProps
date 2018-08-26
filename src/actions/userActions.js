import { getYears } from './pageActions';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAILE';

export function login() {
  const PHOTO_PERMISSIONS = 4;
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    });

    VK.Auth.login(r => {
      if (r.session) {
        let userName = r.session.user.first_name;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: userName
        });
        dispatch(getYears());
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Cannot login')
        });
      }
    }, PHOTO_PERMISSIONS);
  };
}
