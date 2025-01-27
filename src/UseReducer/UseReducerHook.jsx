import React, { useReducer } from 'react'
import myReducer from './reducer/reducer';
function UseReducerHook() {
    const [count,dispatch]=useReducer(myReducer,0);
  return (
    <>
    {count}
    {/* dispatch function take object as argument and that object{type:000,payload:} is stored in action */}
    <button onClick={()=>{dispatch({type:'inc1'})}}></button>
    <button onClick={()=>{dispatch({type:'dec1'})}}></button>
    </>
  )
}

export default UseReducerHook
