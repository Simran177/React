import React, { Component } from 'react'

export default class Child8 extends Component {
//receivinng props from LifeCycle
    constructor(props)
    {
        super(props);
    }
   componentWillReceiveProps(props)
   {
       console.log("componentWillReceiveProps called")
   }
    render() {
        console.log("render called in child");
        return (
            <div>
                <h1>{this.props.data}</h1>
                <button>Show Less</button>
            </div>
        )
    }
}
