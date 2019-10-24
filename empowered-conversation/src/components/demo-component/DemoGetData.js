import React, { useState, useEffect } from "react";
import axios from "axios";
import DemoCard from "./DemoCard";
import styled from "styled-components"

function DemoGetData(){
    const[userData, setUserData] =useState([])

    useEffect(()=> {
        axios
        .get('https://empowered-conversations-bw.herokuapp.com/text')
        .then(response =>{
            console.log(response.data)
            setUserData(response.data)
        })

    }, [])

    const Header = styled.h1 `
    display: flex;
    margin: 2% 5% 5% 5%;
    `

    return (
        <section>
            
            <div>
                {userData.map((item) => {
                return <div> <DemoCard name= {item["yourName"]} number= {item["yourNumber"]}/> </div>
                })}

            </div>
        </section>
        
    )
}
export default DemoGetData;


