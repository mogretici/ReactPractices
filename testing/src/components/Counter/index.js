import React , {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h1>COUNTER</h1>
        <p>{count}</p>
        <button style={{marginRight:100}} onClick={()=>{setCount(count-1)} }>Decrease</button>

        <button style={{marginLeft:100}} onClick={()=>{setCount(count+1)}}>Increase</button> 
    </div>
  )
}

export default Counter