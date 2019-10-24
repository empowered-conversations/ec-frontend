import React from "react";

const MessageConfirm = props => {
  const clickHandler = () => {
    props.history.push("/home");
  };
  return (
    <div className="confirm_page">
      <div className="confirm_container">
        <h2>Confirmed !</h2>
        <p>Your message has been sent successfully!</p>
        <p>Your will hear back soon...</p>
        <button className="confirm_btn" onClick={clickHandler}>
          Go Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default MessageConfirm;
