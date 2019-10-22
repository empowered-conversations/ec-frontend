import React, {useState, useEffect} from "react";
import { Form, Field, withFormik, validateYupSchema } from "formik";


const UserForm = () => {

    return(

    <div>
        <Form className= "fromClass">
            <Field type= 'text' name= 'userName' placeholder = "username"/>
            <Field type= 'password' name= 'password' placeholder = "password"/>

            <button type= 'submit'> Submit</button>
        </Form>
    </div>

    )
}

const FormikUserForm = withFormik({
})(UserForm)

export default FormikUserForm;