import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import store from "../redux/Store";
import { tasksDeletedAction } from "../redux/TaskAppState";
import { useAuthorizedUser } from "../utils/CustomHooks/useAuthorizedUser";
import { deleteTask } from "../utils/Networking/TasksApi";
import notify, { ErrMsg, SccMsg } from "../utils/Notification";

function DeleteTask({ id }: { id: number }) {

  useAuthorizedUser();
  const navigate = useNavigate();


  const onDelete = () => {
    deleteTask(id)
      .then(() => {
        notify.success(SccMsg.DELETED_TASK);
        store.dispatch(tasksDeletedAction(id));
        navigate("/list");
      })
      .catch(() => notify.error(ErrMsg.DELETE_FAILED));
  };

  return (
    <div>
      <fieldset className="Container">
      <label>Delete task {id}?</label><br/>
        <button type="button" onClick={onDelete}>
          Yes
        </button>
      </fieldset>
    </div>
  );
}

export default DeleteTask;
