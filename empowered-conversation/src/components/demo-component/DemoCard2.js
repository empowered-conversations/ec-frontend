import React from 'react';
import styled from "styled-components"
import DemoCard from "./DemoCard";




const DemoCard2 = props => {   
    return(
        <div>
            {props.item.map((post) => {
                return(
                    <div> <DemoCard name= {post.name} number= {post.number}/> </div>
                )
            })}


        </div>

    )
}

export default DemoCard2;