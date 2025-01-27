//create context

import { createContext, useContext, useState } from "react";


const studentcontext=createContext();


//wrapping----provide

export const StudentcontextWrapper=({children})=>{
const [student,setStudent]=useState({name:"Subhashree",
    address:"odisha"
})
return <studentcontext.Provider value={{a:student,b:setStudent}}>
{children}
</studentcontext.Provider>
}
//custom hook
export const useStudent=()=>{
    return useContext(studentcontext);
}




// import React from 'react'

// export function StudentcontextWrapper({children}) {
//     const [student,setStudent]=useState('ram');
//   return (
//    <studentcontext.Provider value={{student,setStudent}}>
//     {children}
//    </studentcontext.Provider>
//   )
// }

// export function useStudent(){
//     return useContext(studentcontext);
// }



