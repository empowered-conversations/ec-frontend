import React, { useState, useEffect } from "react";
import axios from "axios";

const Registration = props => {
  const [user, setUser] = useState({ username: "", password: "" });

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log("submit registration");
    axios
      .post(
        `https://empowered-conversations-bw.herokuapp.com/api/auth/register`,
        user
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
    props.history.push("/login");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Register</h2>
      <div>
        <label>
          username:
          <input
            type="text"
            name="username"
            value={user.username}
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
            value={user.password}
            onChange={changeHandler}
          />
        </label>
      </div>
      <button>Register</button>
    </form>
  );
};

export default Registration;
