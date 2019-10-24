import React from "react";

const UserCard = props => {
  return (
    <h2 className="user_card">
      Welcome to Empowered Conversation {props.name} !
    </h2>
  );
};
export default UserCard;
