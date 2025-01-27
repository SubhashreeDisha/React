import React, { Component } from 'react'

export class ClassState extends Component {
    constructor(){
        super();
        this.state={
            number:100,
            msg:'Class State'
        }
    }
    ChangeNumber=()=>{
        this.setState({number:this.state.number+10})
    }
  render() {
    console.log("render");
    return (
      <div>
        <h1>State in class Component</h1>
        <h1>{this.state.number}</h1>
        <h1>{this.state.msg}</h1>
        <button onClick={this.ChangeNumber}>Click</button>
        <button onClick={()=>{this.state.msg==='hello'?this.setState({msg:'bye'}):this.setState({msg:'hello'})}}>ChangeMsg</button>
      </div>
    )
  }
}

export default ClassState
