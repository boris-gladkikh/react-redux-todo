import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";


function AddTodoForm({addTask}){
  const initialData = {
    task: ""
  }
  const [formData, setFormData] = useState({...initialData});
  

  function handleSubmit(evt){
    evt.preventDefault();
    addTask({...formData, id:uuidv4()})
    setFormData(initialData);
  }

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }



  return (
  <div>
    <h2>Add A Task!</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input onChange={handleChange} name="task" value={formData.task}></input>
      <button>Add</button>
    </form>
  </div>
  )
  
}

export default AddTodoForm 