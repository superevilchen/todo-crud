import React, { useEffect, useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { TaskModel } from "./TaskModel";
import { yupResolver } from "@hookform/resolvers/yup";
import notify, { ErrMsg, SccMsg } from "../utils/Notification";
import * as yup from "yup";
import { schema } from "./AddTask";
import { updateTask } from "../utils/Networking/TasksApi";
import { useNavigate, useParams } from "react-router-dom";
import store from "../redux/Store";
import { tasksUpdatedAction } from "../redux/TaskAppState";
import { useAuthorizedUser } from "../utils/CustomHooks/useAuthorizedUser";

function UpdateTask({ task }: { task: TaskModel }) {
  useAuthorizedUser();

  let defaultValuesObj = { ...task };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: defaultValuesObj,
    resolver: yupResolver(schema),
    mode: "all",
  });

  const update = (taskToUpdate: any) => {
    updateTask(task.id, taskToUpdate)
      .then((response) => {
        notify.success(SccMsg.UPDATED_TASK);
        store.dispatch(tasksUpdatedAction(response.data));
        navigate("/list");
      })
      .catch(() => notify.error(ErrMsg.UPDATE_FAILED));
  };

  return (
    <div className="window-body">
      <form onSubmit={handleSubmit(update)}>
        <label htmlFor="text10" className="Container">
          Update an existing task
        </label>
        <fieldset>
          <div className="field-row-stacked">
            <label htmlFor="text21">Title</label>
            <input
              id="text21"
              type="text"
              placeholder={`${task?.title}`}
              {...register("title")}
            />
            <label htmlFor="text24">{errors.title?.message}</label>
          </div>

          <div className="field-row-stacked">
            <label htmlFor="text21">Description</label>
            <input
              id="text21"
              type="text"
              placeholder={`${task?.description}`}
              {...register("description")}
            />
            <label htmlFor="text24">{errors.description?.message}</label>
          </div>

          <div className="field-row-stacked">
            <label htmlFor="text21">When</label>
            <input
              id="text21"
              type="date"
              placeholder={`${task?.when}`}
              {...register("when")}
              style={{ width: "100px" }}
            />
            <label htmlFor="text24">{errors.when?.message}</label>
          </div>

          <div className="field-row-stacked">
            <label htmlFor="text21">Type of task</label>
            <select {...register("group")}>
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
          </div>
        </fieldset>

        <div className="Container">
          <button disabled={!isDirty || !isValid}>yalla</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTask;
