import './TaskContainer.css';


const TaskCard = ({taskData}) => {    
    return (
        <span className='task-card'>
            This is a new task: {taskData}
        </span>
    );
}
export default TaskCard