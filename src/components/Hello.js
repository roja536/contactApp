import React from 'react';
const greet = (props) => {
    return (
        <center>
            <h1>Hello{props.name}</h1>
            {props.children}
        </center>
    )
}
export default greet;