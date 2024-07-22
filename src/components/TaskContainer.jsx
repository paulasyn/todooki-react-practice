import './TaskContainer.css';
import TaskCard from '../components/TaskCard';
import { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

function TaskContainer(){
    const [newTask, setNewTask] = useState("");
    const { taskData, setTaskData } = useContext(TaskContext);

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    function addTask(){
        taskData.push(newTask)
        setTaskData(taskData);
        setNewTask("");
    }
    
    const deleteTask = (index) => {
        let tempList = [...taskData];
        tempList.splice(index, 1);
        setTaskData(tempList);
        console.log(tempList)
    }

    return (
        <>
            <h2>Task Container</h2>
            <div className='add-container'>
                <input className="add-todo-input" placeholder='Enter a task' value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}> + </button>
            </div>
            <div>
                <ul>
                    {taskData.map((task, index) => 
                        <li key={index}>
                            <span className="task-card">
                                <TaskCard taskData={task}></TaskCard>    
                            </span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>

                
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default TaskContainer