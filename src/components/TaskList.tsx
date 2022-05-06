import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../redux/Store";
import { tasksDownloadedAction } from "../redux/TaskAppState";
import { useAuthorizedUser } from "../utils/CustomHooks/useAuthorizedUser";
import { getTasks } from "../utils/Networking/TasksApi";
import notify, { ErrMsg, SccMsg } from "../utils/Notification";
import EmptyTaskList from "./EmptyTaskList";
import Task from "./Task";
import { TaskModel } from "./TaskModel";
import TaskTabs from "./TaskTabs";

function TaskList() {
  useAuthorizedUser();

  const [tasks, tasksSet] = useState<TaskModel[]>(
    store.getState().taskState.tasks
  );

  useEffect(() => {
    if (tasks.length === 0) {
      getTasks()
        .then((response) => {
          tasksSet(response.data);
          store.dispatch(tasksDownloadedAction(response.data));
          notify.success(SccMsg.GOT_TASKS);
        })
        .catch(() => {
          notify.error(ErrMsg.NETWORK_ERROR);
        });
    }

    return store.subscribe(() => {
      tasksSet(store.getState().taskState.tasks);
    });
  }, []);

  return (
    <div>
      {tasks.length === 0 ? (
        <EmptyTaskList />
      ) : (
        <div className="TaskListBack">
          {tasks.map((task) => (
            <TaskTabs task={task} key={task.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
