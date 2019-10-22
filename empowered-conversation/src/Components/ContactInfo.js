import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";


const ContactInfo = ({values, status, touched, errors}) => {

const [contact, setContact] = useState([])

useEffect(() => {
    status && setContact(contact => [...contact, status])
},[status])

    return(

    <div>
        <Form className= "fromClass">
            <label htmlFor="friendName"> Firend's Name </label>
            <Field type= 'text' name= 'friendName'  value= {values.friendName} placeholder = "friend's name"/>{touched.friendName && errors.friendName}

            <label htmlFor="friendNumber"> Firend's Number </label>
            <Field type= 'text' name= 'friendNumber' value= {values.friendNumber}  placeholder = "firend's number"/>
            {touched.friendNumber && errors.namfriendNumbere}

            <label htmlFor="yourName"> Your Name </label>
            <Field type= 'text' name= 'yourName' value= {values.yourName}   placeholder = "your name"/>
            {touched.yourName && errors.yourName}

            <label htmlFor="yourNumber"> Your Number </label>
            <Field type= 'text' name= 'yourNumber' value= {values.yourNumber}  placeholder = "your number"/>
            {touched.yourNumber && errors.yourNumber}

            <button type= 'submit'> Submit</button>
        </Form>
        
    </div>

    )
}

const FormikContactForm = withFormik({

    mapPropsToValues({yourName, yourNumber, friendName, friendNumber}){
        return{
            yourName: yourName || "",
            yourNumber: yourNumber || "",
            friendName: friendName || "",
            friendNumber: friendNumber || "",   
        };
       
    },

})(ContactInfo)

export default FormikContactForm;