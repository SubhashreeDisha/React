import React, { useState } from 'react'

function Child1() {
    const [count,setCount]=useState(0);
    const increment1=(value)=>{
        setCount(count+1)
    }
    const decrement1=()=>{
        setCount(count-1)
    }
    const increment2=(value)=>{
        setCount(count+21)
    }
    const decrement2=()=>{
        setCount(count-31)
    }
    
  return (
   <>
   <h1>{count}</h1>
   <button onClick={increment1}>+1</button>
   <button onClick={decrement1}>-1</button>
   <button onClick={increment2}>21</button>
   <button onClick={decrement2}>31</button>
   </>
  )
}

export default Child1
