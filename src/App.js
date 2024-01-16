import { useState } from "react";
import "./App.css";
import Todolist from "./todolist/Todolist";
function App() {
  const [list, setList] = useState("");
  const [Printlist, setPrintlist] = useState([]);
  function Change(event) {
    setList(event.target.value);
  }
  function Print() {
    setPrintlist((olddata) => {
      return [...olddata, list];
    });
    setList("");
  }

  function deletItem(index1){
    setPrintlist((olddata)=>{
      return olddata.filter((arr,index)=>{
        return index!==index1;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            onChange={Change}
            value={list}
          />
          <button onClick={Print}>+</button>
          <ol>
            {Printlist.map((value, index) => {
              return <Todolist key={index} id={index} text={value}  onSelect={deletItem}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
