import React, {useState} from 'react';
import styled from "styled-components";
import DemoFormData from "./DemoFormData";
import DemoCard2 from "./DemoCard2";
import DemoGetData from "./DemoGetData";
import "../../../../empowered-conversation/src/App.css"



function DemoApp() {
  const[posts, setPost] = useState([])

  const addNewPost = post => {
    setPost([...posts, post])
  }
  const FormStyle = styled.form `
    margin: 5% 0% 5% 39%;
    font-size: 500%;
    `
  const Header = styled.h1 `
  display: flex;
  margin: 2% 5% 5% 40%;
  font-size: 400%;
  color: lightsalmon;
  `
  const Appstyle = styled.div `
  background-color: black;
  border: 5px lightgrey solid;
  `
  return (
    <Appstyle>
      <Header>Demo Page</Header>
      
      <FormStyle>
        <DemoFormData addNewPost={addNewPost}/>
      </FormStyle>
      <div>
          <DemoCard2 item ={posts}/>
      </div>
      <div>
        <DemoGetData/>
      </div>
  </Appstyle>
  );
}

export default DemoApp;
