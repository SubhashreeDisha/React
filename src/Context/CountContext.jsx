import { createContext, useContext, useReducer } from "react";
import myReducer from "../../../myapp/src/reducer/reducer";
const context1=createContext();

//wrapper
export function CountContextWrapper({children}) {
  const [state,dispatch]=useReducer(myReducer,{count:0})//here it taken initial value as an object
  return (
   <context1.Provider value={{state,dispatch}}>
    {children}
   </context1.Provider>
  )
}

export function useCount(){
  return useContext(context1);
}



