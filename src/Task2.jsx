// import React, { useState } from "react";

// function Task2() {
//   const [color, setColor] = useState("blue");
//   const [count, setCount] = useState(0);
//   function countHandler() {
//     setCount((pre) => {
//       let next = pre + 1;
//       console.log(next);
//       if (next < 0) {
//         setColor("black");
//       } else if (next == 0) {
//         setColor("white");
//       } else if (next > 0 && next < 5) {
//         setColor("purple");
//       } else if (next == 5) {
//         setColor("yellow");
//       } else if (next >= 6 && next < 10) {
//         setColor("brown");
//       } else if (next >= 10) {
//         setColor("red");
//       }
//       return next;
//     });
//   }
//   function countHandler1() {
//     setCount((pre) => {
//       let next = pre - 1;
//       console.log(next);
//       if (next < 0) {
//         setColor("black");
//       } else if (next == 0) {
//         setColor("white");
//       } else if (next > 0 && next < 5) {
//         setColor("purple");
//       } else if (next == 5) {
//         setColor("yellow");
//       } else if (next >= 6 && next < 10) {
//         setColor("brown");
//       } else if (next >= 10) {
//         setColor("red");
//       }
//       return next;
//     });
//   }
//   return (
//     <div style={{ background: color }}>
//       <h1>background</h1>
//       <button onClick={countHandler1}>-</button>
//       {count}
//       <button onClick={countHandler}>+</button>
//     </div>
//   );
// }

// export default Task2;
