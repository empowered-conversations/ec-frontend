import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import UserCard from "./UserCard";

const Home = props => {
  const [info, setInfo] = useState({
    userName: "",
    userPhone: "",
    otherName: "",
    otherPhone: ""
  });

  console.log(props.username, props.token);

  const [displayModal, setDisplayModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const changeHandler = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const continueHandler = e => {
    e.preventDefault();
    setDisplayModal(true);
  };

  const cancelHandler = () => {
    setDisplayModal(false);
  };

  const checkHandler = () => {
    setChecked(!checked);
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(`submit`);
    axios
      .post(`https://empowered-conversations-bw.herokuapp.com/text`, {
        "friend's name": info.otherName,
        "friend's number": info.otherPhone,
        "your name": info.userName,
        "your number": info.userPhone
      })

      .then(res => console.log(res))
      .then(props.history.push("/confirmed"));

    setDisplayModal(false);
    setInfo({
      userName: "",
      userPhone: "",
      otherName: "",
      otherPhone: ""
    });
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(props.token));
  }, [props.token]);

  return (
    <div className="home_container">
      <UserCard name={props.username} />

      <form className="home_form_container">
        <p>
          Fill up the form below and we will take care of the rest ! A message
          will be sent to your friend and family member once your submit the
          form.
        </p>
        <div className="input_el">
          <input
            type="text"
            name="userName"
            placeholder="your name"
            value={info.userName}
            onChange={changeHandler}
          />
        </div>
        <div className="input_el">
          <input
            type="tel"
            name="userPhone"
            placeholder="your phone number"
            value={info.userPhone}
            onChange={changeHandler}
          />
        </div>
        <div className="input_el">
          <input
            type="text"
            name="otherName"
            value={info.otherName}
            placeholder="your friend or family member name"
            onChange={changeHandler}
          />
        </div>
        <div className="input_el">
          <input
            type="tel"
            name="otherPhone"
            placeholder="your friend or family member phone number"
            value={info.otherPhone}
            onChange={changeHandler}
          />
        </div>
        <button
          disabled={
            info.userName.length === 0 ||
            info.userPhone.length === 0 ||
            info.otherName.length === 0 ||
            info.otherPhone.length === 0
          }
          className="conti_btn"
          onClick={continueHandler}
        >
          Continue
        </button>
      </form>

      <div id="myModal" className={displayModal ? `modal_diplay` : `modal`}>
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={cancelHandler} className="close">
              &times;
            </span>
            <h4>
              Check the box and continue
              <input
                type="checkbox"
                name="agree"
                value={checked}
                onChange={checkHandler}
              />
            </h4>
          </div>
          <div className="modal-footer">
            <button disabled={!checked} onClick={submitHandler}>
              Submit
            </button>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.login.username,
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  {}
)(Home);
