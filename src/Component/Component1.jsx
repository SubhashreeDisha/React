import React from 'react'
import { useCount } from '../Context/CountContext'

function Component1() {
    const {state,dispatch}=useCount();
  return (
    <div>
       <h1 style={{textAlign:'center'}}> {state.count}</h1>
      <button onClick={()=>{dispatch({type:'inc1'})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'dec1'})}}>Decrement</button>
    </div>
  )
}

export default Component1
