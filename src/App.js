import './Practical-7/App1.css';
import ClassComponent from './Practical-7/ClassComponent';
import FunctionalComponent from './Practical-7/FunctionalComponent';
import ReactFragment from './Practical-7/ReactFragment';



function App() {
  return (
    <>
     
      <div className="function">
      <FunctionalComponent/>
      </div>
      <div className="class">
      <ClassComponent/>
      </div>

      </>
   
  ); 
}

export default App;