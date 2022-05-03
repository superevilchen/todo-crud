import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import store from "../redux/Store";
import { tasksDeletedAction } from "../redux/TaskAppState";
import { deleteTask } from "../utils/Networking/TasksApi";
import notify, { ErrMsg, SccMsg } from "../utils/Notification";
import YesNoDialog from "./YesNoDialog";

function DeleteTask({ id }: { id: number }) {
  const onDelete = () => {
    deleteTask(id)
      .then(() => {
        notify.success(SccMsg.DELETED_TASK);
        store.dispatch(tasksDeletedAction(id));
      })
      .catch(() => notify.error(ErrMsg.NETWORK_ERROR));
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
