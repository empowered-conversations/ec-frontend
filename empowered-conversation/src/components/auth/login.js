import React, { useState, useEffect } from "react";
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
    props.history.push("/home");
    console.log("submit login");
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(props.token));
  }, [props.token]);

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <div>
        <label>
          username:
          <input
            type="text"
            name="username"
            value={login.username}
            onChange={changeHandler}
          />
        </label>
      </div>
      <div>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={changeHandler}
          />
        </label>
      </div>
      <button>Login</button>
    </form>
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
