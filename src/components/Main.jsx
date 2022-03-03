import React, { Component } from 'react'
import ChildComp from "./ChildComp"

export default class Main extends Component {
  state={name:"-erkannn"}

  constructor(props) {
    super(props)
    console.log("const. RUNNED")
    // console.log("const. prop:::",props)
    this.state = { name:"-furkann"
    }
  }
  componentWillMount(){
    console.log("COP.WİLLMOUNT RUNNED...")
    this.setState({name:"-Ayşe"})

  }
  componentDidMount() { 
    console.log("COP.DİDMOUNT RUNNED...");
    this.setState({name:"-CANER"})
    console.log("SETSTATE RUNNED İN COP.DİDMOUNT");

   }

   changeName=()=>{
     this.setState({name:"NEW FURKAN"})
   }


  render() {
   
    console.log(".RENDER")
    return (
      <div>Main

      <h5>{this.state.name} </h5>
      <ChildComp newname={this.state.name} changeName={this.changeName} />
      </div>
      


    )
  }
}
