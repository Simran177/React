import React, { Component } from 'react'

export default class ReactState extends Component {
    constructor()
    {
        super();   // for inheritance phle parent ka constructor call hoga

        this.state={
            roll:1,
            name:"Simran",
        };
    }
    UpdateMe=()=>{ //event binding using arrow function
        this.setState({
            roll:10,
            name:"Shiv",
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.roll}</h1>
                <h1>{this.state.name}</h1>
                {/* Event generation */}
                <button onClick={this.UpdateMe}>Click Me</button> 
                 {/*UpdateMe is function, render method is called everytime we click button  */}
            </div>
        )
    }
}



///////////////////////////////////////////// DATA SENT USING PROPS  ////////////////////////////////////////////////////////////
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
    UpdateMe=()=>{ //event binding
        this.setState({
            roll:10,
            name:"Shiv",
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.roll}</h1>
                <h1>{this.state.name}</h1>
                {/* Event generation */}
                <button onClick={this.UpdateMe}>Click Me</button> 
                 {/*UpdateMe is function, render method is called everytime we click button  */}
            </div>
        )
    }
}

/////////////////////////////////  WITHOUT ARROW FUNCTION ///////////////////////////
export default class ReactState extends Component {
    constructor()
    {
        super();   // for inheritance phle parent ka constructor call hoga

        this.state={
            roll:1,
            name:"Simran",
        };
        this.UpdateMe= this.UpdateMe.bind(this);  //Event Handler binding
    }
    UpdateMe(){ //event binding without arrow function
        this.setState({
            roll:10,
            name:"Shiv",
        });
    }

//////////////////////////////////////////////////////   ANONYMOUS FUNCTIOn  ////////////////////////////////////////////////

    render() {
        return (
            <div>
                <h1>{this.state.roll}</h1>
                <h1>{this.state.name}</h1>
                {/* Event generation */}
                <button onClick={()=>{this.setState({roll:0,name:"null"})}}>Click Me</button> 
                 {/*UpdateMe is function, render method is called everytime we click button  */}
            </div>
        )
    }
}