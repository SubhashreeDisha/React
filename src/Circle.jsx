// import React, { useState } from "react";

// function Circle() {
//   const [circle, setCircle] = useState([]);

//   function addHandler() {
//     let temparr = [
//       ...circle,
//       {
//         id: Math.trunc(Math.random() * 1000000),
//         isSelected: false,
//       },
//     ];
//     setCircle(temparr);
//   }

//   function selectHandler(id) {
//     let temparr = [...circle];
//     let index = temparr.findIndex((ele) => {
//       return ele.id == id;
//     });
//     if (temparr[index].isSelected == false) {
//       temparr[index].isSelected = true;
//     } else {
//       temparr[index].isSelected = false;
//     }

//     setCircle(temparr);
//   }
//   function deleteHandler() {
//     let temparr = circle.filter((value) => {
//       return value.isSelected == false;
//     });
//     setCircle(temparr);
//   }
//   return (
//     <div>
//       <button onClick={addHandler}>Click</button>
//       <button onClick={deleteHandler}>Delete</button>
//       {circle.map((value) => {
//         return (
//           <div
//             onClick={() => {
//               selectHandler(value.id);
//             }}
//             style={{
//               height: "200px",
//               width: "200px",
//               borderRadius: "100px",
//               backgroundColor: value.isSelected ? "red" : "green",
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default Circle;
import React, { useState } from "react";

const Circle = () => {
  const [circle, setCircle] = useState([]);
  function AddHandler() {
    let temparr = [
      ...circle,
      {
        id: Math.trunc(Math.random() * 10000),
        isSelected: false,
      },
    ];
    setCircle(temparr);
  }
  function selectHandler(id) {
    let temparr = [...circle];
    const index = temparr.findIndex((value) => {
      return value.id == id;
    });
    if (temparr[index].isSelected == false) {
      temparr[index].isSelected = true;
    } else {
      temparr[index].isSelected = false;
    }
    setCircle(temparr);
  }
  function DeleteHandler() {
    const temparr = circle.filter((value) => {
      return (value.isSelected = false);
    });
    setCircle(temparr);
  }
  return (
    <div>
      <button onClick={AddHandler}>Click</button>
      <button onClick={DeleteHandler}>Delete</button>
      {circle.map((value) => {
        return (
          <div
            onClick={() => {
              selectHandler(value.id);
            }}
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "100%",
              backgroundColor: value.isSelected ? "red" : "green",
            }}
          />
        );
      })}
    </div>
  );
};

export default Circle;
