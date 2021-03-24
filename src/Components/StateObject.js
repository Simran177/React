import React,{useState,useEffect} from 'react'

export default function StateObject() {
    
      const[name,setName] = useState({firstName:"",lastName:""});
       
        return (
            <div>
                {/* ....name is used to keep previous state i.e firstname update kr rhe to lastname ka content retain rhe gayab na ho and vice versa
                ...name is spread operator */}
                <input type="text" value={name.firstName} onChange=
                {(e)=>setName({...name, firstName:e.target.value})}/>
                
                
                <input type="text" value={name.lastName} onChange=
                {(e)=>setName({...name,lastName:e.target.value})}/>
               
               <h2>First Name :{name.firstName}</h2>
               <h2>Last Name :{name.lastName}</h2>
               {/* ek time par ek hi state update ho rha either firstName or lastName that's why we used spread operator */}
               <h2>{JSON.stringify(name)}</h2>
            </div>
        );
    };
    