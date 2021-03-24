import React,{useState} from 'react'
{/*
export default function ReactEvents() {
    return (
        <div>
            <button onClick={()=> console.log("Button Clidked")}>Click Me</button>
        </div>
    );
};
*/}

{/*

export default function ReactEvents() {

    function myFun()
    {
        console.log("Button clicked");
    }

    return (
        <div>
            <button onClick={myFun}>Click Me</button>
        </div>
    );
};
*/}



{/*
export default function ReactEvents() {
// Arrow function
    const myFun=()=>
    {
        console.log("Button clicked");
    }

    return (
        <div>
            <button onClick={myFun}>Click Me</button>
        </div>
    );
};
*/}
{/*}
export default function ReactEvents() {
    // Arrow function
        const myFun=(e)=>
        {
            console.log(e.target.value);
        }
    
        return (
            <div>
                <input type="text" onChange={myFun} />
            </div>
        );
    };

*/}

{/*
    export default function ReactEvents() {
        // Arrow function
          const[data,setData] = useState("Simran");
            const myFun=(e)=>
            {
                setData(e.target.value);
            }
        
            return (
                <div>
                    <input type="text" value={data} onChange={myFun}/>
                    <h2>{data}</h2>
                </div>
            );
        };
    */}
    
    {/*
    export default function ReactEvents() {
        // Arrow function
          const[data,setData] = useState("");
            const myFun=(e)=>
            {
                setData(e.target.value);
            }
        const upload=()=>{
            alert(data);
            //data gets refreshed, back to previous state after uploading(pressing ok in alert box)
        }
            return (
                <div>
                    <form action="" onSubmit={upload}>
                    <input type="text" value={data} onChange={myFun}/>
                    <h2>{data}</h2>
                    <input type="submit" value="Upload data" />
                    </form>
                </div>
            );
        };
    */}

{/*
    export default function ReactEvents() {
        // Arrow function
          const[data,setData] = useState("");
            const myFun=(e)=>
            {
                setData(e.target.value);
            }
        const upload=(e)=>{
            e.preventDefault();  // now data doesn't get refreshed , button acts as normal button and not submit button
            alert(data);
            
        }
            return (
                <div>
                    <form action="" onSubmit={upload}>
                    <input type="text" value={data} onChange={myFun}/>
                    <h2>{data}</h2>
                    <input type="submit" value="Upload data" />
                    </form>
                </div>
            );
        };
    */} 

  