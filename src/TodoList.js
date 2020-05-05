import React from "react";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import {useSelector, useDispatch} from "react-redux";
import "./TodoList.css";


//renders a list of all tasks in the tasks state. 

function TodoList(){

  let tasks = useSelector(st=> st.tasks)
  const dispatch = useDispatch();

  

  //uses dispatch to add a particular task to state, and appending it to DOM
  function addTask(data){
    dispatch({
      type:"ADD_TASK",
      task:data
    })
  }

  //uses dispatch to remove a particular task from state, thus removing it from DOM
  function removeTask(id){
    dispatch({
      type:"REMOVE_TASK",
      id:id
    })
  }

  return (
  <div>
    <h1>To Do List!</h1>
    <h4>Complete These Tasks, Or Die Trying</h4>
    <ul>
      {tasks.map(t => (
        <li><Todo task={t.task} id={t.id} removeTask={removeTask}/></li>
      ))}
    </ul>
    <AddTodoForm addTask={addTask}/>

  </div>)

}

export default TodoList 