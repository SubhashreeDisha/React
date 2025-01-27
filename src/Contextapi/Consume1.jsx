// import React from 'react'
// import { useContext } from 'react'
// import { Context1 } from './context'

// function Consume1() {
//     const {a,b}=useContext(Context1);
//   return (
//     <div>
//     <div>{a}</div>
//     <button onClick={()=>{b((pre)=>{ return pre+10})}}></button>
//     </div>
//   )
// }

// export default Consume1


// import React, { useContext } from 'react'
// import { useContext1 } from './context';

// function Consume1() {
//   const {a,b}=useContext1();
//   // console.log(data);
  
//   return (
//     <div>
//      {a}
//     </div>
//   )
// }

// export default Consume1



import React from 'react'
import { useStudent } from './StudentContext';

function Consume1() {
  const {a,b}=useStudent();
  return (
    <div>
      <h1>{a.name}</h1>
      <h1>{a.address}</h1>
    </div>
  )
}

export default Consume1



// import React from 'react'
// import { useStudent } from './StudentContext';

// function Consume1() {
//   // const data= useStudent();
//   // console.log(data);
//   const {student}=useStudent()
  
//   return (
//     <div>
//      {student}
     
//     </div>
//   )
// }

// export default Consume1

