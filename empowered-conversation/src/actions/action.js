export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAIL = "REGISTRATION_FAIL";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const postRegistration = newUser => dispatch => {
  dispatch({ type: Registration_START });
  axios
    .post(
      "https://empowered-conversations-bw.herokuapp.com/api/auth/register",
      newUser
    )
    .then(res => dispatch({ type: REGISTRATION_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: REGISTRATION_FAIL, payload: err }));
};
