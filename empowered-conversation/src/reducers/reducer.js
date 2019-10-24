import {
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/action";

const initialState = {
  login: { username: "" },
  register: { username: "" },
  isLogining: false,
  isRegistering: false,
  error: "",
  token: ""
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case REGISTRATION_START:
      return {
        ...state,
        isRegistering: true,
        error: false
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        register: {
          username: action.payload.user.username
        },
        isRegistering: false
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        isLogining: true,
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          username: action.payload.user.username
        },
        token: action.payload.token,
        isLogining: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLogining: false,
        error: action.payload
      };
  }
  return state;
};
