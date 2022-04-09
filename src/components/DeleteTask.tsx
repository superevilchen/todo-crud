import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import store from '../redux/Store';
import { tasksDeletedAction } from '../redux/TaskAppState';
import { deleteTask } from '../utils/Networking/TasksApi';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';

function DeleteTask() {

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
    
    const onDelete = () => {
        deleteTask(id)
            .then(() => {
                notify.success(SccMsg.DELETED_TASK)
                store.dispatch(tasksDeletedAction(id))
                navigate('/')
            })
        .catch(() => notify.error(ErrMsg.NETWORK_ERROR))
    }

    const noDelete = () => {
        navigate('/')
    }

  return (
      <div>
          <h2>delete task {id}?</h2>
          <button onClick={onDelete}>yes</button>
          <button onClick={noDelete}>no</button>
    </div>
  )
}

export default DeleteTask

function taskDelete(id: number): any {
    throw new Error('Function not implemented.');
}
