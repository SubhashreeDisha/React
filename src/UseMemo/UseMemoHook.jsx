import React, { useMemo, useState } from 'react'

function UseMemoHook() {
    const [count,setCount]=useState(0);
    const [color,setColor]=useState('green');
    // function getNumber(){
    //     console.log('hello');
    //     for(let i=0;i<=1000000000;i++){}
    //     return count*10;   
    // }

    const getNumber=useMemo(()=>{
        for(let i=0;i<=1000000000;i++){}
        return count*10;    
    },[count])
  return (
    <>
    <h1>useMemo()</h1>
    <div style={{
        backgroundColor:color,height:'400px',width:'500px',
        alignContent:'center',textAlign:'center',color:'white'
        }}>
        <button onClick={()=>{setCount((prev)=>prev+1)}}>ChangeCount</button>
        <h1>{count}</h1>
        <button onClick={()=>{setColor((prev)=>prev=='green'?'red':'green')}}>ChangeColor</button>
        <p>{getNumber}</p>
    </div>
    </>
  )
}

export default UseMemoHook