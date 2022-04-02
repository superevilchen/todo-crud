import React from 'react'
import { useForm } from 'react-hook-form';
import { TaskModel } from './TaskModel';
import { yupResolver } from '@hookform/resolvers/yup'
import notify, { ErrMsg, SccMsg } from '../utils/Notification';
import { schema } from './AddTask';
import { updateTask } from '../utils/Networking/TasksApi';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateTask() {

    const navigate = useNavigate();
    const params = useParams();
    const id = +(params.id || '');

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const update = (task: TaskModel | any) => {
        updateTask(id, task)
            .then(() => {
                notify.success(SccMsg.UPDATED_TASK)
                navigate('/')
            })
        .catch(() => notify.error(ErrMsg.NETWORK_ERROR));
    }

  return (
    <form onSubmit={handleSubmit(update)}>
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

export default UpdateTask