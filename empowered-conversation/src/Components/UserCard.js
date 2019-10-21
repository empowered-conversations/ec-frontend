import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";


const UserCard = ({values, touched, errore, status}) => {
    const [user, setUser] = useState([])

    useEffect(() => {
status && setUser(user => [...user, status])
    }, [status])


    return(

    <div>
        <Form className= "fromClass">
            <Field type= 'text' name= 'userName' placeholder = "User Name"/>
            <Field type= 'text' name= 'email' placeholder = "E-Mail"/>
            <Field type= 'password' name= 'password' placeholder = "Password"/>
            <Field type= 'checkbox' name= 'consent' checked= {values.consent}/>

            <button type= 'submit'> Submit</button>
        </Form>
    </div>

    )
}