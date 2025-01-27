import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
const Child = () => {
    const data=useSelector((state)=>{ return state.countReducer});
    const dispatch=useDispatch();
    const data1=useSelector((state)=>{ return state.colorReducer});
  return (
    <div style={{backgroundColor:data1}}>
        <h1>{data}</h1>
        <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
        <button onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
        <button onClick={()=>{dispatch({type:'blue'})}}>Blue</button>
        <button onClick={()=>{dispatch({type:'red'})}}>Red</button>
    </div>
  )
}

export default Child
