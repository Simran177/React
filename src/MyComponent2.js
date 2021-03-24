import React, { Component } from 'react'

export default class MyComponent2 extends Component {

    //constructor is used to initialize class data
     //we will pass pops in constructor
     constructor(props)
     {
         super(props);
     }
    render() {
        return (
            <div className="Box">
            {/* this keyword used for receiving props in class components */}
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                
            </div>
        );
    }
}
