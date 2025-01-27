// import React, { useState } from "react";

// function InputField() {
//   const [input, setInput] = useState("");
//   const [field, setField] = useState([]);
//   const [select, setSelect] = useState("test");

//   function AddHandler() {
//     const temparr = [...field, { label: input, type: select }];
//     setField(temparr);
//     setInput("");
//   }
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <div style={{ marginBottom: "15px" }}>
//         <label
//           htmlFor=""
//           style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}
//         >
//           Label
//         </label>
//         <input
//           type="text"
//           placeholder="write the label"
//           style={{
//             width: "100%",
//             padding: "8px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//             boxSizing: "border-box",
//           }}
//           value={input}
//           onChange={(e) => {
//             setInput(e.target.value);
//           }}
//         />
//       </div>

//       <div style={{ marginBottom: "15px" }}>
//         <label
//           htmlFor=""
//           style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}
//         >
//           Input
//         </label>
//         <select
//           style={{
//             width: "100%",
//             padding: "8px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//             boxSizing: "border-box",
//             backgroundColor: "#fff",
//           }}
//           onChange={(e) => {
//             setSelect(e.target.value);
//           }}
//           value={select}
//         >
//           <option value="text">text</option>
//           <option value="number">number</option>
//           <option value="radio">radio</option>
//           <option value="checkbox">checkbox</option>
//           <option value="email">email</option>
//           <option value="password">password</option>
//         </select>
//       </div>

//       <button
//         style={{
//           padding: "10px 15px",
//           backgroundColor: "#007BFF",
//           color: "#fff",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//           fontWeight: "bold",
//         }}
//         onClick={() => {
//           AddHandler();
//         }}
//       >
//         Generate
//       </button>
//       <h1>form</h1>

//       {field.map((value) => {
//         return (
//           <div>
//             <label htmlFor="">{value.label}</label>
//             <input type={value.type} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default InputField;
import React, { useState } from "react";

const InputField = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [todo, setTodo] = useState([]);
  function AddHandler() {
    let temparr = [
      ...todo,
      {
        task: input,
        type: select,
      },
    ];
    setTodo(temparr);
    setInput("");
  }
  return (
    <div>
      <label htmlFor="">Label</label>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <option value="text">text</option>
        <option value="password">password</option>
        <option value="checkbox">checkbox</option>
        <option value="radio">radio</option>
        <option value="email">email</option>
      </select>
      <button onClick={AddHandler}>Generate</button>
      {todo.map((value) => {
        return (
          <div>
            {value.task}
            <input type={value.type} />
          </div>
        );
      })}
    </div>
  );
};

export default InputField;
