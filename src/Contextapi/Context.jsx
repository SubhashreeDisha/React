// import { createContext } from "react";

import { createContext, useContext, useState } from "react";

//  export const Context1=createContext();
//  export const Context2=createContext();





const Context1=createContext();




export function Context1Wrapper({children}) {
    const [count,setCount]=useState(0);
  return (
    <Context1.Provider value={{a:count,b:setCount}}>
        {children}
    </Context1.Provider>
  )
}

export function useContext1(){
    return useContext(Context1)
}


