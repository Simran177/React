import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Table,Button} from 'react-bootstrap'

export default function DynamicTable(){
    const [data,setData]=useState([
        {username:"abc",password:"abc123",email:"abc@gmail.com"},
        {username:"xyz",password:"xyz123456",email:"xyz@gmail.com"},
        {username:"user",password:"user",email:"user@gmail.com"}
    ]);

    const displayUser=(user,index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
            </tr>
        );
    };

    const add=(e)=>{
        e.preventDefault();
        const el={
            username:e.target.username.value,password:e.target.password.value,email:e.target.email.value
        }
        setData([...data,el]);
        e.target.username.value=""
        e.target.password.value=""
        e.target.email.value=""
    }

    return(
        <div className="container">
            <h1 className="text-center my-3">React Dynamic Table</h1>
            <form class="form-inline my-4 justify-content-center" onSubmit={add}>
                <label className="mr-3 mb-2" for="username">Username</label>
                <input type="text" className="form-control mb-2 mr-sm-2" id="username" placeholder="Username"/>
                <label  className="mr-3 mb-2" for="password">Password</label>
                <input type="password" className="form-control mb-2 mr-sm-2" id="password" placeholder="Password"/>
                <label  className="mr-3 mb-2" for="email">Email</label>
                <input type="email" className="form-control mb-2 mr-sm-2" id="email" placeholder="Email Id"/>
                <Button type="submit" className="btn btn-primary mb-2 ml-2">Add User</Button>
            </form>
            <Table hover className="text-center" > 
                <thead>
                    <tr className="bg-warning">
                        <th>SNo.</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(displayUser)}
                </tbody>
            </Table>            
        </div>
    );
}