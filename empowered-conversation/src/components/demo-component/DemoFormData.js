import React, { useState,} from "react";
// import styled from "styled-components"
import { withFormik, Form, Field } from "formik";

const DemoFormData = props => {
    const[formData, setFormData] = useState({
     name: "",
     number: "",   

     
    });

    const changeHandler = event => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewPost(formData)
        setFormData({name:"", number:""})
    }
    return(
        <div>
            <form onSubmit={submitForm}>
                <input type= 'text' name='name' value={formData.name} placeholder= 'name' onChange={changeHandler}/>
                <input type= 'text' name='number' value={formData.number} placeholder= 'number' onChange={changeHandler}/>

                <button type= 'submit'>submit</button>    
            </form>

        </div>
    )
};

export default DemoFormData;

