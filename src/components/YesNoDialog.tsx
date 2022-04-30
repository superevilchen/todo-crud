import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import store from '../redux/Store';
import { tasksDeletedAction } from '../redux/TaskAppState';
import { deleteTask } from '../utils/Networking/TasksApi';
import notify, { ErrMsg, SccMsg } from '../utils/Notification';

interface YesNoDialogProps {
    onYes: () => void;
    text: string;
    param?: number;
}

function YesNoDialog(props: YesNoDialogProps) {

    const navigate = useNavigate();

    useEffect(() => {
        // If we don't have a user object - we are not logged in
        if (!store.getState().authState.user.token) {
            notify.error(ErrMsg.LOGIN_NEEDED);
            navigate('/login');
        }
    },[])
    
  return (
    <div>
    <h2>{props.text}</h2>
          <button type="button" className="btn btn-primary" onClick={props.onYes} data-bs-dismiss="modal">yes</button>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
  )
}

export default YesNoDialog