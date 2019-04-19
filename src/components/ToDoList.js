import React from "react";

function ToDoList(props) {
  return (
    <div className="form-check">
      <input 
        className="form-check-input" 
        type="checkbox" 
        checked={props.text.completed}
        onChange={(event) => props.handleChange(props.text.id)}
      />
      <span>{props.text.toDo}</span>
    </div>
  )
}

export default ToDoList;