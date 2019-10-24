import React from "react";
import styled from "styled-components";

const UserCard = props => {
  const CardStyle = styled.div`
    margin: 5% 25% 5% 25%;
    border: 5px lightgrey solid;
    display: flex;
    justify-content: center;
    background-color: lightsalmon;
  `;

  const Header = styled.h2`
    margin: 5% 5% 5% 10%;
    font-size: 240%;
    color: white;
  `;

  return (
    <div>
      <CardStyle>
        <Header>Welcome to Empowered Conversation {props.name} !</Header>
      </CardStyle>
    </div>
  );
};
export default UserCard;
