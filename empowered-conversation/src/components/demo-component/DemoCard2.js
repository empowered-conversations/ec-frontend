import React from 'react';
import ReactDOM from 'react-dom';




const DemoCard2 = props => {   
    return(
        <div>
            {props.item.map((post, index) => {
                return(
                    <div key={index}>
                        <h1>{post.name}</h1>
                        <p>{post.number}</p>
                        </div>
                )
            })}


        </div>

    )
}

export default DemoCard2;