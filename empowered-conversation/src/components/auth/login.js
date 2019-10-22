import React, { useState, useEffect } from "react";
import styled from "styled-components"

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const changeHandler = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log("submit login");
  };

 const LoginFormCont = styled.div `
 margin: 5% 5% 5% 5%;
 border: solid 5px #594157;
 display: flex;
 justify-content: center;
 background-color: #BEE7E8
 `

const StyledForm= styled.form `
margin: 2% 2% 2% 2%;


`
const Header = styled.h2 `
margin: 5% 5% 5% 30%;
font-size: 240%;
color: #594157;
`
const StyledButton = styled.button `
margin: 5% 5% 5% 30%;
`


  return (
    <LoginFormCont>
    <StyledForm onSubmit={submitHandler}>
      <Header>Login</Header>
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
      <StyledButton>Login</StyledButton>
    </StyledForm>
    </LoginFormCont>
  );
};

export default Login;
