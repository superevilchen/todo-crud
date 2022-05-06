import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { TaskModel } from "./TaskModel";
import notify, { ErrMsg, SccMsg } from "../utils/Notification";
import { addTask } from "../utils/Networking/TasksApi";
import { useNavigate } from "react-router-dom";
import store from "../redux/Store";
import { tasksAddedAction } from "../redux/TaskAppState";
import "xp.css/dist/XP.css";
import { useAuthorizedUser } from "../utils/CustomHooks/useAuthorizedUser";

export const schema = yup.object().shape({
  title: yup.string().required("Please insert a title"),
  description: yup.string().required("Please insert a description"),
  when: yup.date().required("Please insert a date"),
  group: yup.string().required("Please select a group"),
});

function AddTask() {
 
  useAuthorizedUser();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const add = (task: TaskModel | any) => {
    addTask(task)
      .then((response) => {
        console.log(response.data.id);
        notify.success(SccMsg.ADDED_TASK);
        store.dispatch(tasksAddedAction(response.data));
        navigate("/");
      })
      .catch(() => notify.error(ErrMsg.FAILED_ADDING));
  };

  return (
    <div className="Center">
      <div className="window" style={{ width: "300px" }}>
        <div
          className="title-bar"
          style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem" }}
        >
          <div className="title-bar-text">Add a new task</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
         
          <label htmlFor="text10" className="Container">Add a new task</label>
          
          <form onSubmit={handleSubmit(add)}>
          
          <fieldset>
              <div className="field-row-stacked">
                <label htmlFor="text21">Title</label>
                <input id="text21" type="text" {...register("title")} />
                <label htmlFor="text24">{errors.title?.message}</label>
              </div>

              <div className="field-row-stacked">
                <label htmlFor="text21">Description</label>
                <input id="text21" type="text" {...register("description")} />
                <label htmlFor="text24">{errors.description?.message}</label>
              </div>

              <div className="field-row-stacked">
                <label htmlFor="text21">When</label>
                <input
                  id="text21"
                  type="date"
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
              <button disabled={!isDirty || !isValid} type="submit">
                yalla
              </button>
              </div>
            </form>
          
        </div>
      </div>
    </div>
  );
}

export default AddTask;

{
  /* <form onSubmit={handleSubmit(add)}>
<input type="text" placeholder="title" {...register('title')}/>
<p>{ errors.title?.message }</p>
<input type="text" placeholder="description" {...register('description')}/>
<p>{ errors.description?.message }</p>
<input type="date" placeholder="when" {...register('when')}/>
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
<button disabled={!isDirty || !isValid} type="submit">yalla</button>
  </form> */
}
