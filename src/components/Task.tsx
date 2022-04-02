import axios from 'axios';
import React from 'react'
import { Link, Routes } from 'react-router-dom';
import { formatDate } from '../utils/DateFormatter';
import { deleteTask } from '../utils/Networking/TasksApi';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';
import { TaskModel } from './TaskModel'
import UpdateTask from './UpdateTask';

// export interface TaskProps{
//     task: TaskModel;
// }


const onDelete = (id: number) => {
  deleteTask(id)
    .then(() => {
    notify.success(SccMsg.DELETED_TASK)
    })
    .catch(() => {
      notify.error(ErrMsg.NETWORK_ERROR);
  })
}

function Task({task}: {task: TaskModel}) {
  return (
      <tr>
          <td>{ task.title }</td>
          <td>{ task.description }</td>
          <td>{ formatDate(task.when) }</td>
      <td>{task.group}</td>
      <td><Link to={`/update/${task.id}`}>edit</Link></td>
      <td><Link to={`/delete/${task.id}`}>delete</Link></td>
    </tr>
  )
}

export default Task