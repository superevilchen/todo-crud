import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios';
import { TaskModel } from './TaskModel';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';
import Task, { TaskProps } from './Task';
import { addToTaskList } from '../utils/Networking/TasksApi';

export const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    whenToDo: yup.date().required(),
    groupType: yup.string().required(),
})

function AddTask() {

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
    });

    const add = (task: TaskModel | any) => {
        addToTaskList(task)
        .then(response => {
            notify.success(SccMsg.ADDED_TASK);
        })
        .catch(error => notify.error(ErrMsg.FAILED_ADDING))
    }

  return (
      <form onSubmit={handleSubmit(add)}>
          <input type="text" placeholder="title" {...register('title')}/>
          <p>{ errors.title?.message }</p>
          <input type="text" placeholder="description" {...register('description')}/>
          <p>{ errors.description?.message }</p>
          <input type="date" placeholder="when" {...register('whenToDo')}/>
          <p>{ errors.whenToDo?.message }</p>
          <select {...register('groupType')}>
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