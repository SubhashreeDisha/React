import React from 'react'

function Counter() {
    let number=0;
    function Increment(){
        number+=1;
        console.log(number)


    }
    function Decrement(){
        number+=-1
        console.log(number)
    }
  return (
    <div>
        {console.log('render method')}
      <h1 style={{textAlign:'center'}} className='heading'>{number}</h1>
      <button onClick={Increment} style={{marginRight:'20px'}}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter
