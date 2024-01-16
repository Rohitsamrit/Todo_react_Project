import React from "react";
function Todolist({text,onSelect,id}){
return(
    <><div className="todo_style">
    <i className="fa fa-times" aria-hidden="true" onClick={()=>{
        onSelect(id)
    }}/>

        <li>{text}</li>
        </div>
    </>
)
}
export default Todolist;