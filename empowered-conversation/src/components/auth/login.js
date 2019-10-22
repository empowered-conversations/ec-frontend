import React, { useState, useEffect } from "react";

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const changeHandler = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log("submit login");
  };

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

export default Login;
