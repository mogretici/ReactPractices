import React from 'react'
import {useState} from 'react'


function Counter() {
    const [value, setValue]= useState(0);

    const increase = ()=>{
        setValue(value+1);
    }
    const decrease = ()=>{
        setValue(value-1);
    }

  return (
    <div align='center'>
        <h1>Counter</h1>
       
        <h3>Value: {value}</h3>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
    
  )
}

export default Counter;