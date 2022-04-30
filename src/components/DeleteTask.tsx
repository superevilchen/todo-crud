import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import store from '../redux/Store';
import { tasksDeletedAction } from '../redux/TaskAppState';
import { deleteTask } from '../utils/Networking/TasksApi';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';
import YesNoDialog from './YesNoDialog';



function DeleteTask({id}: {id: number}) {

    const onDelete = () => {
        deleteTask(id)
            .then(() => {
                notify.success(SccMsg.DELETED_TASK)
                store.dispatch(tasksDeletedAction(id))
            })
        .catch(() => notify.error(ErrMsg.NETWORK_ERROR))
      }

  return (
      <div>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  delete
</button>

<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
        <YesNoDialog onYes={onDelete} text={'Delete task?'}/>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default DeleteTask
