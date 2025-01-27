// import React, { useState } from "react";

// function ColorChange() {
//   const [red, setred] = useState(0);
//   const [green, setgreen] = useState(0);
//   const [blue, setblue] = useState(0);

//   return (
//     <div>
//       <input
//         type="text"
//         value={red}
//         onChange={(e) => {
//           if (e.target.value < 0 || e.target.value > 255) {
//             return alert("pls type valid number");
//           }
//           setred(e.target.value);
//         }}
//       />

//       <input
//         type="text"
//         value={green}
//         onChange={(e) => {
//           if (e.target.value < 0 || e.target.value > 255) {
//             return alert("pls type valid number");
//           }
//           setgreen(e.target.value);
//         }}
//       />

//       <input
//         type="text"
//         value={blue}
//         onChange={(e) => {
//           if (e.target.value < 0 || e.target.value > 255) {
//             return alert("pls type valid number");
//           }
//           setblue(e.target.value);
//         }}
//       />
//       <div
//         style={{
//           height: "500px",
//           width: "500px",
//           margin: "10px",
//           backgroundColor: `rgb(${red},${blue},${green})`,
//         }}
//       ></div>
//     </div>
//   );
// }

// export default ColorChange;
