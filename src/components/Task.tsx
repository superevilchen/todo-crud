import axios from 'axios';
import React from 'react'
import { Link, Routes } from 'react-router-dom';
import { formatDate } from '../utils/DateFormatter';
import notify, { SccMsg } from '../utils/Notification';
import { TaskModel } from './TaskModel'
import UpdateTask from './UpdateTask';

export interface TaskProps{ 
    task: TaskModel;
}

const onDelete = async (id: number) => {
  await axios.delete(`http://localhost:8080/api/v1/todolist/${id}`)
    .then(response => {
    notify.success(SccMsg.DELETED_TASK)
    })
    .catch(error => {
      notify.error(error);
  })
}

function Task({task}: TaskProps) {
  return (
      <tr>
          <td>{ task.title }</td>
          <td>{ task.description }</td>
          <td>{ formatDate(task.whenToDo) }</td>
      <td>{task.groupType}</td>
      <td><button onClick={() => onDelete(task.id)}>delete</button></td>
      {/* <Link to= {`/shop/${task.id}`}><Item data={task} key={task.id} /></Link>  */}
      <td>
        <button onClick={() => <UpdateTask task={task}/>}>update</button>
      </td>
    </tr>
  )
}

export default Task