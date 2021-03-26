import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Table,Button} from 'react-bootstrap';

{/*
export default function DisplayData() {
    const arr=[5,10,15,20,25];
    //map iterates array and makes a new array
    const newArr= arr.map(function(num){
        return <li>{num*2}</li>
    })
    return (
        <div>
            <ul>
                {newArr}
            </ul>
        </div>
    );
}

*/}

{/*
export default function DisplayData() {
    const arr=[5,10,15,20,25];
    
    return (
        <div>
            <ul>
               {arr.map(num => <li>{num}</li>)}
            </ul>
        </div>
    );
}
*/}

//to display array of objects
//To link bootstrap to rect
// Method1: link of bootstrap cdn code added to index.html
// Method2: exit terminal and write npm install bootstrap 

{/*
export default function DisplayData() {
    const arr=[
        {
            username:"simran",
            password:"simran123",
            email:"simran@gmail.com"
        },
        {
            username:"aishu",
            password:"aish123",
            email:"tigress@gmail.com"
        },
        {
            username:"ankit",
            password:"ankit123",
            email:"ankit@gmail.com"
        },
        {
            username:"divya",
            password:"divya321",
            email:"divya321@gmail.com"
        },
        {
            username:"shivangi",
            password:"shivu456",
            email:"shivu456@gmail.com"
        },
    ];

    const showData=(num,index)=>{

        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{num.username}</td>
                <td>{num.password}</td>
                <td>{num.email}</td>
            </tr>
        )
    }
    
    return (
        <div className="container">
            <table class="table">
  <thead className="table-dark"> 
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">EmailId</th>
    </tr>
  </thead>
  <tbody>
  {arr.map(showData)}
  </tbody>
</table>
        </div>
    );
}

*/}

// Using react-bootstrap
//  npm install react-bootstrap bootstrap
// Since Table and Button are components, we need to import them
export default function DisplayData() {
    const arr=[
        {
            username:"simran",
            password:"simran123",
            email:"simran@gmail.com"
        },
        {
            username:"aishu",
            password:"aish123",
            email:"tigress@gmail.com"
        },
        {
            username:"ankit",
            password:"ankit123",
            email:"ankit@gmail.com"
        },
        {
            username:"divya",
            password:"divya321",
            email:"divya321@gmail.com"
        },
        {
            username:"shivangi",
            password:"shivu456",
            email:"shivu456@gmail.com"
        },
    ];

    const showData=(num,index)=>{

        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{num.username}</td>
                <td>{num.password}</td>
                <td>{num.email}</td>
            </tr>
        )
    }
    
    return (
        <div className="container">
            <Table striped bordered hover>
  <thead className="table-dark"> 
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">EmailId</th>
    </tr>
  </thead>
  <tbody>
  {arr.map(showData)}
  </tbody>
</Table>

<Button variant="primary">React Bootstrap button</Button>
<br/>
<br/>
<button className="btn btn-primary">Normal button</button>
        </div>
    );
}
