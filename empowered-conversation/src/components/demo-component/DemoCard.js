import React, { useState, useEffect } from "react";
import styled from "styled-components"





const DemoCard = (props) =>{

    const CardStyle = styled.div `
    margin: 5% 25% 5% 25%;
    border: solid 5px #594157;
    display: flex;
    justify-content: center;
    background-color: #BEE7E8;
    `

   const Header = styled.h2 `
   margin: 5% 5% 5% 10%;
   font-size: 240%;
   color: #594157;
   `
    
return(
    <div>
    
        <CardStyle>

        <Header>{props.name}</Header>
        <p>{props.number}</p>

        </CardStyle>


    </div>
)

}
export default DemoCard;