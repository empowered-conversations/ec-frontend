import React, {useState} from 'react';
import DemoFormData from "./DemoFormData"
import DemoCard2 from "./DemoCard2"



function DemoApp() {
  const[posts, setPost] = useState([{}])

  const addNewPost = post => {
    setPost([...posts, post])
  }
  return (
    <div>
    

      <DemoFormData addNewPost={addNewPost}/>
      <DemoCard2 item ={posts}/>
      
    </div>
  );
}

export default DemoApp;
