import React from 'react';

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

function FunctionalComponent()
{
    return(
    <>
        <h1>This is Functional Component</h1>
        <h3><span style={cssStyle2}>created by:</span><span style={cssStyle1}>Beta-Labs </span></h3>
    </>
        );
    
}


export default FunctionalComponent;