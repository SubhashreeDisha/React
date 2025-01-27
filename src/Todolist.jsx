// import React, { useState } from 'react'

// function Todolist() {
//   const [input,setInput]=useState('');
//   const [todo,setTodo]=useState([]);
//   const [isEdit,setisEdit]=useState(false);
//   const [eindex,setEindex]=useState(-1);

//   function deleteHandler(id){
//     let temparr=todo.filter((value)=>{
//       return value.id !=id
//     })
//     setTodo(temparr);

//   }

//   function EditHandler(id){
//     let index=todo.findIndex((ele)=>{
//         return ele.id==id;
//     })
//     setEindex(index);
//    setInput(todo[index].task);

//    setisEdit(true);

//   }

//   return (
//     <div>
//       <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input}/>
//       <button onClick={()=>{
//         if(isEdit==false){
//           let temparr=[...todo,{
//             id:Math.trunc(Math.random()*1000000),
//             task:input,
//           }]
//           setTodo(temparr);
//           setInput("");
//         }
//         else{
//           const temparr=[...todo]
//           temparr[eindex].task=input;// i csnt get id
//           setisEdit(false);
//           setInput('')
//           setEindex(-1);
//           setTodo(temparr);
//         }
//       }}>{isEdit?'save':'add'}</button>

//       {todo.map((value)=>{
//         return <div>
//           {value.task}
//           <button onClick={()=>{
//             deleteHandler(value.id)
//           }}>Delete</button>

//           <button onClick={()=>{
//             EditHandler(value.id)
//           }}>Edit</button>

//           </div>
//       })}

//     </div>
//   )
// }

// export default Todolist

// import React, { useState } from 'react'

// function Todolist() {
//   const [input,setInput]=useState('');
//   const [todo,setTodo]=useState([]);
//   const [eindex,setEindex]=useState(-1);

//   function addHandler(){
//   const temparr=[...todo,{
//     id:Math.trunc(Math.random()*100000),
//     task:input
//   }];

//   setTodo(temparr);
//   setInput('');

//   }
//   function editHandler(id){

//    const index= todo.findIndex((ele)=>{
//       return ele.id=id;
//     })
//     setEindex(index);
//     setInput(todo[index].task);
//    }

//    function saveHandler(){
//     const temparr=[...todo];

//     temparr[eindex].task=input;
//     setTodo(temparr);

//    }

//   return (
//     <div>
//       <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input} />
//       <button onClick={addHandler}>ADD</button>
//       {/* <button onClick={saveHandler}>Save</button> */}

//       {todo.map((value)=>{
//       return <div>
//           {value.task}
//          <button>Delete</button>
//          <button onClick={()=>{editHandler(value.id)}}>Edit</button>
//         </div>
//     })}
//     </div>
//   )
// }

// export default Todolist
