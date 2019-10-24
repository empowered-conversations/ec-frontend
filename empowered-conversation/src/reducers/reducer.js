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
  error: false,
  errMsg: "",
  token: ""
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case REGISTRATION_START:
      return {
        ...state,
        isRegistering: true,
        error: false,
        errMsg: ""
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        register: {
          username: action.payload.user.username
        },
        isRegistering: false,
        error: false,
        errMsg: ""
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        isRegistering: false,
        error: true,
        errMsg: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        isLogining: true,
        errMsg: "",
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          username: action.payload.user.username
        },
        token: action.payload.token,
        isLogining: false,
        error: false,
        errMsg: ""
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLogining: false,
        errMsg: action.payload,
        error: true
      };
  }
  return state;
};
