import React ,{FC} from 'react';
import './App.css';
import { useState } from 'react';
import { ITask } from './Interfaces';
import { TodoTask } from './components/todoTask';
const  App: FC = () => {
  const [ task, setTask ] = useState<string>( '' );
  const [ deadline, setDeadline ] = useState<number>(0);
  const [ todoList, setTodoList ] = useState<ITask[]>( [] );
  
  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
    if ( event.target.name === 'task' ) {
      setTask( event.target.value );
    } else if ( event.target.name === 'deadline' ) {
      setDeadline( +event.target.value );
    }
  }
  const addTask = (): void => {
    const newTask:ITask = {
      taskName: task,
      deadline: deadline
    }
    if ( task&&deadline  ) {
      setTodoList( [ ...todoList, newTask ] );
      setTask( '' );
      setDeadline( 0 );
    }
  }
  
  const completeTask = (taskNameToDelete:string): void => {
    setTodoList( todoList.filter( ( task ) => {
      return task.taskName!== taskNameToDelete;
    }))
  }
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type="text" value={task} name='task' placeholder='Task...' onChange={handleChange} />
          <input type="number" value={deadline} name='deadline' placeholder='Deadline ...' onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        <>
        {
          todoList.map( ( task:ITask, key:number ) => {
            return (
              <TodoTask completeTask={completeTask} task={task} key={key} />
            )
          })
          }
        </>
      </div>
    </div>
    
  );
}

export default App;
