import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { getTasks } from '../utils/Networking/TasksApi';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';
import EmptyTaskList from './EmptyTaskList';
import Task from './Task';
import { TaskModel } from './TaskModel';


function TaskList() {

    const [tasks, tasksSet] = useState<TaskModel[]>([]);

    useEffect(() => {
        getTasks()
            .then(response => {
                tasksSet(response.data)
                notify.success(SccMsg.GOT_TASKS);
            })
            .catch(error => {
            notify.error(ErrMsg.NETWORK_ERROR);
        });
    }, [])

  return (
      <div>
          <table>
              <thead>
                  <tr>
                  <th>title</th>
                  <th>description</th>
                  <th>when</th>
                  <th>group</th>
                      </tr>
              </thead>
              <tbody>
                  {tasks.length == 0 ? <EmptyTaskList/> : tasks.map((task) => (
                      <Task task={task} key={ task.id }/>
                  ))}
                  {/* {tasks.map((task) => (
                      <Task task={task} key={ task.id }/>
                  ))} */}
              </tbody>
          </table>
    </div>
  )
}

export default TaskList