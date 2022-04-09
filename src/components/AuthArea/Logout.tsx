import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../redux/AuthAppState';
import store from '../../redux/Store';
import { tasksClearedAction } from '../../redux/TaskAppState';
import notify, { SccMsg } from '../../utils/Notification';

function Logout() {

    const navigate = useNavigate();

    useEffect(() => {
        notify.success(SccMsg.LOGOUT_SUCCESS);
        store.dispatch(logoutAction());
        store.dispatch(tasksClearedAction());
        navigate("/");
    });

    return (
        <></>
    );
}


export default Logout