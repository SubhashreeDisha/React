import React from 'react'

function Comp1() {
    let msg='hello';
    let number=500;
    let isUpdated=true;
    let fruits=['apple','grapes','mango','banana']
    let displayFruits=[];
    for(let i=0;i<fruits.length;i++){
    // let jsx=<h2>{fruits[i]}</h2>
    // displayFruits.push(jsx);
    displayFruits.push(<h2> {fruits[i]} </h2>)
    }

    let Student={name:"virat",age:35,address:"delhi"}
    
    let displayStudents=[]

    for(let key in Student){
      let jsx=<h3>{key}:{Student[key]}</h3>
      displayStudents.push(jsx);

    }
    
    
  return (
    <div>
      <h1>{msg}</h1>
      <h1>{number}</h1>
      <h1>{isUpdated ? "hello":"Bye"}</h1>
      <h1>{fruits}</h1>
      <h1>{fruits[0]}</h1>
      <h1>{fruits[1]}</h1>
      
      {/* {displayFruits} */}
        {/*for loop we cant write so map is used and its for array*/}
      {
      fruits.map((ele,i)=>{
        return <li>{i}.{ele}</li>

      })
      }

      


      {/* <h1>Name:{Student.name}</h1>
      <h1>Age:{Student.address}</h1> */}


      {/*map for object */}

      {Object.keys(Student).map((value)=>{
        return <li>{value}:{Student[value]}</li>
      })}

      {/* {displayStudents}  */}
    </div>
  )
}

export default Comp1
