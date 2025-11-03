import React, { Component } from 'react'
import { useState } from 'react';
import "./usestate.css"
export function Count(){
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    return (
      <div>
        <button onClick={increment
        
        }>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
      </div>
    )
}

export default Count