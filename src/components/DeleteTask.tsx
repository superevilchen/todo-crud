import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTask } from '../utils/Networking/TasksApi';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';

function DeleteTask() {

    const navigate = useNavigate();
    const params = useParams();
    const id = +(params.id || '');
    
    const onDelete = () => {
        deleteTask(id)
            .then(() => {
                notify.success(SccMsg.DELETED_TASK)
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