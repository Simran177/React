import './App.css';
import ClassComponent from './Practical-7/ClassComponent';
import FunctionalComponent from './Practical-7/FunctionalComponent';
import ReactFragment from './Practical-7/ReactFragment';
import ReactState from './ReactState';



function App() {
  return (
    <div className="App">
      <ReactState roll={11} name="Manish"/>
    </div>
  ); 
}
export default App;