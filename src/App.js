import { Component } from "react";
import FC from "./Components/functionalComponent";  //single component import from dafault of that file
import {ClassComponent,ClassComponent1} from "./Components/ClassComponent"; //multilpe imports
import SnippetsComponent from "./Components/SnippetsComponent";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FC />
      <ClassComponent/>
      <ClassComponent1/>
      <SnippetsComponent/>

     
    </div>
  );
}

export default App;
