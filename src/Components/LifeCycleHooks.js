import React, { Component } from 'react'
import Child from './Child';

export default class LifeCycleHooks extends Component {

    constructor()
    {
        super();
        this.state={
            data:null,
        }
        console.log("Constructor called");
    }
     componentDidMount()
     {
         console.log("ComponentDidMount called");
         alert("Component Mounted");  
     }
     componentDidUpdate()
     {
        console.log("ComponentDidUpdate called");
        alert("Component Updated");  
     }

    render() {
        console.log("Render in LifeCycle called");
        return (
            <div>
                <h1>Life Cycle methods</h1>
                <button onClick={()=>{this.setState({data:"Updated"})}}>Call Me
            </button>
            {/* below data goes to Child */}
            <Child data={this.state.data}/> 
          
            </div>
        )
    }
}
