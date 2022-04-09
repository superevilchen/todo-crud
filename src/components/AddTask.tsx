import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios';
import { TaskModel } from './TaskModel';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';
import Task from './Task';
import { addTask } from '../utils/Networking/TasksApi';
import { useNavigate } from 'react-router-dom';
import store from '../redux/Store';
import { tasksAddedAction } from '../redux/TaskAppState';

export const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    when: yup.date().required(),
    group: yup.string().required(),
})

function AddTask() {

    useEffect(() => {
        // If we don't have a user object - we are not logged in
        if (!store.getState().authState.user.token) {
            notify.error(ErrMsg.LOGIN_NEEDED);
            navigate('/login');
        }
    },[])

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
    });

    const add = (task: TaskModel | any) => {
        addTask(task)
            .then((response) => {
            console.log(response.data.id)
            notify.success(SccMsg.ADDED_TASK);
            store.dispatch(tasksAddedAction(response.data))
            navigate('/');
        })
        .catch(() => notify.error(ErrMsg.FAILED_ADDING))
    }

  return (
      <form onSubmit={handleSubmit(add)}>
          <input type="text" placeholder="title" {...register('title')}/>
          <p>{ errors.title?.message }</p>
          <input type="text" placeholder="description" {...register('description')}/>
          <p>{ errors.description?.message }</p>
          <input type="date" placeholder="when" {...register('when')}/>
          <p>{ errors.when?.message }</p>
          <select {...register('group')}>
              <option>REACT</option>
              <option>HTML</option>
              <option>CSS</option>
              <option>ANGULAR</option>
              <option>JAVASCRIPT</option>
              <option>VUE</option>
              <option>SQL</option>
              <option>JAVA</option>
              <option>SPRING</option>
          </select>
          <button disabled={!isDirty || !isValid} type="submit">yalla</button>
    </form>
  )
}

export default AddTask

function taskAdded(data: TaskModel): any {
    throw new Error('Function not implemented.');
}
