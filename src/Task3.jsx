import React, { useState } from 'react'

function Task3() {
    const [count,setCount]=useState(0);
    let countHandler=()=>{
        setCount(count+1);

    }
  return (
    <div>
     <h1 style={{textAlign:'center'}}>{count}</h1>
     <button className='btn btn-primary btn-sm ' style={{marginLeft:'750px'}} onClick={countHandler}>Click</button>
    </div>
  )
}

export default Task3
