import TaskContainer from './components/TaskContainer';
import './App.css';
// import DummyData from './assets/DummyData';
import { useState } from 'react';
import { TaskContext } from './components/TaskContext';

function App() {

  const [taskData, setTaskData] = useState(["clean clothes", "wash dishes"]);

  return (
    <>
    <h1>ToDooki - The Task Managing App</h1>
    <TaskContext.Provider value={{ taskData, setTaskData }}>
      <TaskContainer></TaskContainer>
    </TaskContext.Provider>
    
    </>
  )
}

export default App
