import axios from "axios";
import React from "react";
import { Link, Routes } from "react-router-dom";
import store from "../redux/Store";
import { tasksDeletedAction } from "../redux/TaskAppState";
import { deleteTask } from "../utils/Networking/TasksApi";
import notify, { ErrMsg, SccMsg } from "../utils/Notification";
import DeleteTask from "./DeleteTask";
import { TaskModel } from "./TaskModel";
import UpdateTask from "./UpdateTask";
import "xp.css/dist/XP.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

//

function Task({ task }: { task: TaskModel }) {
  return (
    <fieldset>
      <div className="Container">
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="text21">Title</label>
              </td>
              <td>
                <input
                  id="text21"
                  type="text"
                  placeholder={task.title}
                  className="InputShort"
                  disabled={true}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="text21">Description</label>
              </td>
              <td>
                {" "}
                <input
                  id="text21"
                  type="text"
                  placeholder={task.description}
                  className="InputShort"
                  disabled={true}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="text21">When</label>
              </td>
              <td>
                <input
                  id="text21"
                  type="text"
                  placeholder={"" + task.when}
                  className="InputShort"
                  disabled={true}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="text21">Group type</label>
              </td>
              <td>
                <input
                  id="text21"
                  type="text"
                  placeholder={task.group}
                  className="InputShort"
                  disabled={true}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </fieldset>
  );
}

export default Task;
