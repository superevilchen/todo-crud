import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { TaskModel } from './TaskModel';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import notify, { SccMsg } from '../utils/Notification';
import { TaskProps } from './Task';
import { schema } from './AddTask';

function UpdateTask({task} : TaskProps) {

    const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const updateTask = async (data: any | TaskProps) => {
        await axios.put(`http://localhost:8080/api/v1/todolist/${task.id}`, {
            id: task.id,
            title: data.title,
            description: data.description,
            whenToDo: data.whenToDo,
            groupType: data.groupType
        })
            .then(response => notify.success(SccMsg.UPDATED_TASK))
        .catch(err => notify.error(err));
    }

  return (
      <form onSubmit={handleSubmit(updateTask)}>
          <input type="text" placeholder={task.title} {...register("title")} />
          <p>{ errors.title?.message}</p>
          <input type="text" placeholder={task.description} {...register("description")} />
          <p>{ errors.description?.message}</p>
          <input type="date" {...register("date")} />
          <p>{ errors.whenToDo?.message}</p>
          <select {...register("groupType")}>
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
          <button type="submit" disabled={ !isDirty || !isValid }>yalla update</button>
      </form>
  )
}

export default UpdateTask