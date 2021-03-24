import React, { Component } from 'react'

export default class User extends Component {

    componentWillUnmount(){
        alert("User Deleted");
        console.log("componentWillUnmount called");
    }
    render() {
        return (
            <div>
                <ul>
                <li>Name: Simran</li>
                <li>Address: Chandigarh</li>
                <li>Mobile: 8953410258</li>
                </ul>
            </div>
        )
    }
}
