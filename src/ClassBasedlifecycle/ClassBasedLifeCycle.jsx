import React, { Component } from 'react'

class ClassBasedLifeCycle extends Component {
    constructor(){
        super();
        this.state={count:0,color:"green"}
        this.name='Virat'
    }
  render(){
    return (
        <div>
            <h1 style={{backgroundColor:this.state.color}}>ClassBasedsLifeCycle</h1>
            <h2>{this.state.count}</h2>
            <h3>{this.name}</h3>
        </div>
      )
  }
}

export default ClassBasedLifeCycle