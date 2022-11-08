import * as React from 'react';
import { ITask } from '../Interfaces';
import { FC } from 'react';

export interface Props {
  task: ITask,
  completeTask (taskNameToDelete:string): void;
}

export const TodoTask:FC<Props> =({task,completeTask}: Props)=> {
  return (
    <div className='task'>
      <div className='content'>
        <span>
          { task.taskName }
        </span>
        <span>
          { task.deadline }
        </span>
      </div>
      <button onClick={(e)=>completeTask(task.taskName)}>X</button>
    </div>
  );
}
