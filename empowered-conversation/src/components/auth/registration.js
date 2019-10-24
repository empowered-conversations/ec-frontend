import React, { useState } from "react";

import { connect } from "react-redux";
import { postRegistration } from "../../actions/action";

const Registration = props => {
  console.log(props.registration);
  const [user, setUser] = useState({ username: "", password: "" });

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log("submit registration");
    // axios
    //   .post(
    //     `https://empowered-conversations-bw.herokuapp.com/api/auth/register`,
    //     user
    //   )
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
    props.postRegistration(user);
    props.history.push("/login");
  };

  return (
    <div className="regis_form_container">
      <h2>Registration</h2>
      <form className="regis_form" onSubmit={submitHandler}>
        <div className="username_container">
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="username"
            onChange={changeHandler}
          />
        </div>
        <div className="password_container">
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="password"
            onChange={changeHandler}
          />
        </div>
        <button className="regis_btn">Register</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    registration: state
  };
};

export default connect(
  mapStateToProps,
  { postRegistration }
)(Registration);
