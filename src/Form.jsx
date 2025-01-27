// import React, { useState } from 'react'

// function Form() {
//   const [input,setInput]=useState('');

//   return (
//     <div>
//       {/* control form component */}
//       <form action="">
//         <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input}/>
//         <button type='submit' onClick={(e)=>{e.preventDefault()
//           setInput('')}}>Click</button>
//         <div>
//           {input}
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Form
import React, { useState } from 'react'

function Form() {
  const [input,setInput]=useState('');
  return (
    <div>
      <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input}/>
      <button onClick={()=>{alert(input);setInput('')}}>Click</button>
      <div>{input}</div>
    </div>
  )
}

export default Form
