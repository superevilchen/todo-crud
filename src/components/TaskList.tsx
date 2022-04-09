import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../redux/Store';
import { tasksDownloadedAction } from '../redux/TaskAppState';
import { getTasks } from '../utils/Networking/TasksApi';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';
import EmptyTaskList from './EmptyTaskList';
import Task from './Task';
import { TaskModel } from './TaskModel';


function TaskList() {

    const navigate = useNavigate();

    useEffect(() => {
        // If we don't have a user object - we are not logged in
        if (!store.getState().authState.user.token) {
            notify.error(ErrMsg.LOGIN_NEEDED);
            navigate('/login');
        }
    },[])

    const [tasks, tasksSet] = useState<TaskModel[]>(store.getState().taskState.tasks);

    useEffect(() => {
        
        if (tasks.length === 0) {
            getTasks()
            .then(response => {
                tasksSet(response.data)
                store.dispatch(tasksDownloadedAction(response.data))
                notify.success(SccMsg.GOT_TASKS);
            })
            .catch(() => {
            notify.error(ErrMsg.NETWORK_ERROR);
        })
        }

    }, [])

  return (

      <>   

          {tasks.length === 0 ? 
              <EmptyTaskList /> :
          
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
                      {tasks.map((task) => (
                          <Task task={task} key={ task.id }/>
                      ))}
                      {/* {tasks.map((task) => (
                          <Task task={task} key={ task.id }/>
                      ))} */}
                  </tbody>
              </table>
              </div>

          }

          </>

  )
}

export default TaskList