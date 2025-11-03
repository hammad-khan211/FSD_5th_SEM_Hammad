import React from 'react'
import "./Book.css"
function Book(props){
    return(
    <div id='book'>
        <img src={props.src} alt="" />
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>
    </div>
    )
}

export default Book;