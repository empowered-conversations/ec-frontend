import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable, TweenMax } from "gsap/all"; 





const DemoCard = (props) =>{

    const CardStyle = styled.div `
    margin: 5% 25% 5% 25%;
    border: solid 5px #594157;
    display: flex;
    justify-content: center;
    background-color: #BEE7E8;
    `

   const Header = styled.h2 `
   margin: 5% 5% 5% 5%;
   font-size: 240%;
   color: #594157;
   `

   const Para = styled.p `
   margin: 7% 5% 5% 5%;
   `
   const CardContstyle = styled.div `
   width: 60%;
   margin: 5% 5% 5% 20%;
   `


   let cardContainer = useRef(null);
   let ParaStyle = useRef(null)
   

   useEffect(() => {
        TweenMax.to(
        cardContainer,
        1,
        {x:0, opacity:50, scale:1.5 } )


        TweenMax.to(
            ParaStyle, 
            1,
            {x:0, scale:1, skewX:5, rotation:360});
   })

   
    


    
return(
    <CardContstyle className= "CardCont"  ref={el => {cardContainer = el}}>
    
        <CardStyle>

        <Header>{props.name}</Header>
        <Para  ref={el => {ParaStyle = el}}>{props.number}</Para>

        </CardStyle>


    </CardContstyle>
)

}
export default DemoCard;