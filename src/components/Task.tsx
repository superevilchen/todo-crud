import axios from 'axios';
import React from 'react'
import { Link, Routes } from 'react-router-dom';
import store from '../redux/Store';
import { tasksDeletedAction } from '../redux/TaskAppState';
import { formatDate } from '../utils/DateFormatter';
import { deleteTask } from '../utils/Networking/TasksApi';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';
import DeleteTask from './DeleteTask';
import { TaskModel } from './TaskModel'
import UpdateTask from './UpdateTask';
import YesNoDialog from './YesNoDialog';


function Task({task}: {task: TaskModel}) {

  const onDelete = () => {
    deleteTask(task.id)
        .then(() => {
            notify.success(SccMsg.DELETED_TASK)
            store.dispatch(tasksDeletedAction(task.id))
            // navigate('/')
        })
    .catch(() => notify.error(ErrMsg.NETWORK_ERROR))
  }

  return (
      <tr>
          <td>{ task.title }</td>
          <td>{ task.description }</td>
          <td>{ formatDate(task.when) }</td>
      <td>{task.group}</td>
      <td><Link to={`/update/${task.id}`}>edit</Link></td>

      {/* <td><Link to={`/delete/${task.id}`}>delete</Link></td> */}

      <DeleteTask id={task.id}/>

    </tr>
  )
}

export default Task