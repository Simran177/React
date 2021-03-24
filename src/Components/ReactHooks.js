import React,{useState,useEffect} from 'react'

export default function ReactHooks() {

    const [name,setName]= useState("Simran") ;  //name is tate, useState holds initial value
    const [roll,setRoll]= useState(0); 

    useEffect(()=>{                                   //lifecycle methods called which was earlier done using class component
        alert("Hook effect called");
        console.log("Hook effect called");
    });
    return (
        <div>
            <h1>This is a React Hook</h1>
            <h2>Student roll: {roll}</h2>
            <h2>Student name: {name}</h2>
            <button onClick={()=>{
                setName("Simran Maurya");
                setRoll("76");
            }}>Click Me</button>
        </div>
    )
}
