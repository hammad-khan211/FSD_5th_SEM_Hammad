import React from 'react'
import "./usestate.css";

function Usestate(){


    function change(){
        document.write("Hello");

    }
    return (
        <div>
            <button onClick={ change }>Click</button>
        </div>
    )
}

export default Usestate;