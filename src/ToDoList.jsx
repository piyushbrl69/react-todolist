

import React, { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [doneTasks, setDoneTasks] = useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function markTaskDone(index) {
    const completed = tasks[index];
    setDoneTasks(d => [...d, completed]);
    deleteTask(index); 
  }

    return(
    <div className="to-do-list">

        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>
        <div className="tasks">
            <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>
  <i className="fa-solid fa-trash"></i>
</button>

<button className="done-button" onClick={() => markTaskDone(index)}>
  <i className="fa-solid fa-check"></i>
</button>

<button className="move-button" onClick={() => moveTaskUp(index)}>
  <i className="fa-solid fa-arrow-up"></i>
</button>

<button className="move-button" onClick={() => moveTaskDown(index)}>
  <i className="fa-solid fa-arrow-down"></i>
</button>
                </li>
            )}
        </ol>
        </div>
        <h2 className='Complete_txt'>Completed Tasks</h2>
      <ul>
        {doneTasks.map((task, index) =>
          <li key={index} className="completed">
            <span style={{ textDecoration: "line-through" }}>{task}</span>
          </li>
        )}
      </ul>
    </div>);
}

export default ToDoList

