import React, { useReducer, useState } from 'react'
import Mycolor from './reducer/ColorReducer'
function ColorReducer() {
    const [color,dispatch]=useReducer(Mycolor,'black')
    const [input,setInput]=useState('');
  return (
    <div style={{height:"100vh",width:'100vw',backgroundColor:color}}>
     <input onChange={(e)=>{setInput(e.target.value)}} type="text" />
     <button onClick={()=>{dispatch({type:"yellow"})}}>yellow</button>
     <button onClick={()=>{dispatch({type:"blue"})}}>blue</button>
     <button onClick={()=>{dispatch({type:"green"})}}>green</button>
     <button onClick={()=>{dispatch({type:"red"})}}>red</button> 
     <button onClick={()=>{dispatch({type:"random"})}}>Random</button>
    </div>
  )
}

export default ColorReducer
