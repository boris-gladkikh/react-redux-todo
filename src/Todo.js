import React from "react";
import "./Todo.css";


/*
Renders Todo item, with button to remove and task text.
*/
function Todo({ task = "Make Music", removeTask, id }) {


  return (
    <div>
      <p>
        {task}
        <button onClick={() => removeTask(id)}>
          Remove
        </button>
      </p>



    </div>)

}

export default Todo 