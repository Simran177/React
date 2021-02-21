import React, { Component } from 'react'

 
 export default class Snippets extends Component {
     render() {
         return (
             // now extra div will not be created
             <React.Fragment>
                 <h1>This component from react fragment</h1>
             </React.Fragment>
         )
     }
 }
 