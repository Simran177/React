import React from 'react'
const cssStyle1= {
    color:'blue',
    backgroundColor:"yellow",
    display:'inlineBlock',
    padding: '10px',
    borderRadius: '10px',
  }
const cssStyle2= {
    color:'red',
}

class ClassComponent extends React.Component
{
    render(){
        return(
            <>
            <h1>This is my Class Component</h1>
            <h3><span style={cssStyle2}>created by:</span><span style={cssStyle1}>Pankaj Kapoor </span></h3>
            </>
        );
    }
}

export default ClassComponent;