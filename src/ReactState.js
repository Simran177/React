import React, { Component } from 'react'
export default class ReactState extends Component {
    constructor(props)
    {
        super(props);   // for inheritance phle parent ka constructor call hoga

        this.state={
            roll:this.props.roll,
            name:this.props.name,
        };
       
    }
  
    render() {
        return (
            <div>
                <h1>{this.state.roll}</h1>
                <h1>{this.state.name}</h1>
                {/* Event generation */}
                <button onClick={()=>{this.setState({roll:0,name:"Simran"})}}>Click Me</button> 
                 {/*UpdateMe is function, render method is called everytime we click button  */}
            </div>
        )
    }
}