import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions/action";

const Login = props => {
  console.log(props.token);
  const [login, setLogin] = useState({ username: "", password: "" });

  const changeHandler = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.userLogin(login);
    localStorage.setItem("token", JSON.stringify(props.token));
    props.history.push("/home");
    console.log("submit login");
  };

  return (
    <div className="login_form_container">
      <h2>Login</h2>
      <form className="login_form" onSubmit={submitHandler}>
        <div className="login_username_container">
          <input
            type="text"
            name="username"
            value={login.username}
            onChange={changeHandler}
            placeholder="username"
          />
        </div>
        <div className="login_password_container">
          <input
            type="password"
            name="password"
            value={login.password}
            placeholder="password"
            onChange={changeHandler}
          />
        </div>
        <button
          disabled={login.username.length === 0 || login.password.length === 0}
          className="login_btn"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  { userLogin }
)(Login);
