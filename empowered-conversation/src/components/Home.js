import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = props => {
  const [info, setInfo] = useState({
    userName: "",
    userPhone: "",
    otherName: "",
    otherPhone: ""
  });

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
      .post(`https://empowered-conversations-bw.herokuapp.com/text`, info)
      .then(res => console.log(res));
  };

  console.log(checked);

  return (
    <div>
      <h1>Home Page</h1>
      <form>
        <div>
          <label>
            Please input your name:
            <input
              type="text"
              name="userName"
              value={info.userName}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Please input your phone number:
            <input
              type="tel"
              name="userPhone"
              value={info.userPhone}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Please input your friend or family member name:
            <input
              type="text"
              name="otherName"
              value={info.otherName}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Please input your friend or family member phone number:
            <input
              type="tel"
              name="otherPhone"
              value={info.otherPhone}
              onChange={changeHandler}
            />
          </label>
        </div>
        <button onClick={continueHandler}>Continue</button>
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

export default Home;
