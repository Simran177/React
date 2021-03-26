import React,{useState} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
export default function FormHandling() {

    const[data,addData]=useState([
        {
            username:"simran",
            password:"simran123",
            email:"simran@gmail.com"
        },
        {
            username:"simran",
            password:"simran123",
            email:"simran@gmail.com"
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
    ]
        
    );
    const[newUser,setNewUser]=useState({
        
            username:"",
            password:"",
            email:"",
        
    });
    return (
        <div>
            
        </div>
    )
}
