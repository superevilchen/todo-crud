import React, { useEffect, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form';
import { TaskModel } from './TaskModel';
import { yupResolver } from '@hookform/resolvers/yup'
import notify, { ErrMsg, SccMsg } from '../utils/Notification';
import * as yup from 'yup'
import { schema } from './AddTask';
import { updateTask } from '../utils/Networking/TasksApi';
import { useNavigate, useParams } from 'react-router-dom';
import store from '../redux/Store';
import { tasksUpdatedAction } from '../redux/TaskAppState';

function UpdateTask() {

    useEffect(() => {
        // If we don't have a user object - we are not logged in
        if (!store.getState().authState.user.token) {
            notify.error(ErrMsg.LOGIN_NEEDED);
            navigate('/login');
        }
    },[])

    const navigate = useNavigate();
    const params = useParams();
    const id = +(params.id || '');

    const [task, setTask] = useState<TaskModel>();

    useEffect(() => {
        setTask(store.getState().taskState.tasks.filter(t => t.id === id)[0])
    }, [])

    // define default so that if it's not changed, there wont be a call to database
    let defaultValuesObj = { ...task };

    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } } = useForm({
        defaultValues: defaultValuesObj, 
        resolver: yupResolver(schema),
        mode: 'all'
    });

    // const { dirtyFields } = useFormState({
    //     control
    // });

    const update = (task: any) => {
        updateTask(id, task)
            .then((response) => {
                notify.success(SccMsg.UPDATED_TASK)
                store.dispatch(tasksUpdatedAction(response.data))
                navigate('/')
            })
        .catch(() => notify.error(ErrMsg.NETWORK_ERROR));
    }

  return (
    <form onSubmit={handleSubmit(update)}>
    <input type="text" placeholder={`${task?.title}`} {...register('title')}/>
    <p>{ errors.title?.message }</p>
    <input type="text" placeholder={`${task?.description}`} {...register('description')}/>
    <p>{ errors.description?.message }</p>
    <input type="date" placeholder={`${task?.when}`} {...register('when')}/>
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
    <button disabled={!isDirty || !isValid} >yalla</button>
</form>
  )
}

export default UpdateTask