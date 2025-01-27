// import React, { useState } from 'react'

// function Task1() {
//     const [color,setColor]=useState('black')

//   return (
//     <div className="row m-5 "style={{height:'100vh',width:'100vw',backgroundColor:color}}>
//         <div className='col-2'>
//             <div className='card bg-dark m-'>
//             <button className='btn btn-primary btn-sm 'onClick={()=>{setColor('rgb(0,0,255)')}}>blue</button>
//             <button className='btn btn-success btn-sm 'onClick={()=>{setColor('rgb(0,255,0)')}}>Green</button>
//             <button className='btn btn-danger btn-sm 'onClick={()=>{setColor('rgb(255,0,0)')}}>Red</button>
//             <button className='btn btn-secondary btn-sm 'onClick={()=>{
//                 let value1=Math.trunc(Math.random()*255)
//                 let value2=Math.trunc(Math.random()*255)
//                 let value3=Math.trunc(Math.random()*255)
//                 setColor(`rgb(${value1},${value2},${value3})`)
//             }}>Random Color</button>
//             </div>
//     </div>

//     </div>
//   )
// }

// export default Task1

import React, { useState } from "react";

const Task1 = () => {
  const [color, setColor] = useState("black");
  return (
    <div style={{ background: color, height: "100vh" }}>
      <button
        onClick={() => {
          setColor(`rgb(255,0,0)`);
        }}
      >
        RED
      </button>
      <button
        onClick={() => {
          setColor(`rgb(0,255,0)`);
        }}
      >
        GREEN
      </button>
      <button
        onClick={() => {
          setColor(`rgb(0,0,255)`);
        }}
      >
        BLUE
      </button>
      <button
        onClick={() => {
          let value1 = Math.trunc(Math.random() * 255);
          let value2 = Math.trunc(Math.random() * 255);
          let value3 = Math.trunc(Math.random() * 255);
          setColor(`rgb(${value1},${value2},${value3})`);
        }}
      >
        RANDOM
      </button>
    </div>
  );
};

export default Task1;
