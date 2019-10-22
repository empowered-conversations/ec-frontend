import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Consent = () =>{
const[consent, setConsent] = useState([])
    useEffect(()=> {
        axios.get('https://empowered-conversations-bw.herokuapp.com/text')
        .then(response => {
            console.log(response)
        })
    })


    return(

        <div className= 'consentContainerClass'>

            <Form>
                <label htmlFor= "consentBox">Please Check Box</label>
            <Field type="checkbox" name= "consentBox" checked={props.consentBox}/>
            </Form>


        </div>
    )
};

export default Consent;