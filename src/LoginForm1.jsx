import React, { useState } from 'react'

function LoginForm1() {
    const [phoneno,setPhoneno]=useState('')
    const[isValidphno,setisvalidPhno]=useState(false)
    const [password,setPassword]=useState('');
    const [isValidpassword,setisvalidPassword]=useState(false)
  return (
    <div>
      <input type="number" value={phoneno} onChange={(e)=>{
        if(e.target.value.length != 10 ){
            setisvalidPhno(false)
        }
        else{
            setisvalidPhno(true)
        }

            setPhoneno(e.target.value)
        }}/>
        
      {isValidphno||<div>invalid phoneno</div>}

      <input type="password" value={password} onChange={(e)=>{
        if(e.target.value.length<6){
            setisvalidPassword(false)
        }
        else{
            setisvalidPassword(true)  
        }
        setPassword(e.target.value)
      }}/>
        {isValidpassword || <div>invalid Password</div>}
      <button>Login</button>
    </div>
  )
}

export default LoginForm1
