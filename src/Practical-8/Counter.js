import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props)
    {
        super(props);   // for inheritance phle parent ka constructor call hoga

        this.state={
            counter:this.props.counter,
            
        };
        this.Increment= this.Increment.bind(this);  //Event Handler binding
        this.Decrement= this.Decrement.bind(this); 
        this.Reset= this.Reset.bind(this); 
    }
    Increment(){ //event binding without arrow function
        this.setState({
            counter: this.state.counter + 1,
        });
    };
    Decrement(){ //event binding without arrow function
        this.setState({
        
            counter:  (this.state.counter) ? (this.state.counter-1):(this.state.counter)  ,
        });
    };
    Reset(){
        this.setState({
            counter: 0,
        });
    };
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
             
                {/* Event generation */}
                <button onClick={this.Increment} className="btn1">Increase</button> 
                <button onClick={this.Reset} className="btn2">Reset</button> 
                <button onClick={this.Decrement} className="btn3">Decrease</button> 
                
                 {/*UpdateMe is function, render method is called everytime we click button  */}
            </div>
        )
    }
}