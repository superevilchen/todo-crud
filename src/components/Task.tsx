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
import YesNoDialog from "./YesNoDialog";
import "xp.css/dist/XP.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

//

function Task({ task }: { task: TaskModel }) {
  return (
    <fieldset>
      <div className="Container">
        <table>
          <thead>
            <th></th>
            <th></th>
          </thead>
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

// <div classNameName="window" style={{width: "400px"}}>
//   <div classNameName="title-bar">
//     <div classNameName="title-bar-text">A Window With Tabs and Groups</div>
//     <div classNameName="title-bar-controls">
//       <button aria-label="Minimize"></button>
//       <button aria-label="Maximize"></button>
//       <button aria-label="Close"></button>
//     </div>
//   </div>
//   <div classNameName="window-body">
//   <section classNameName="tabs" style={{maxWidth: "500px"}}>
//   <menu role="tablist" aria-label="Sample Tabs">
//     <button role="tab" aria-selected="true" aria-controls="tab-A">Tab A</button>
//     <button role="tab" aria-controls="tab-B">Tab B</button>
//     <button role="tab" aria-controls="tab-C">Tab C</button>
//   </menu>
//   <article role="tabpanel" id="tab-A">
//     <h3>Tab Content</h3>
//     <p>
//       You create the tabs, you would use a <code>menu role="tablist"</code> element then htmlhtmlhtmlFor the tab titles you use a <code>button</code> with the <code>aria-controls</code> parameter set to match the relative <code>role="tabpanel"</code>'s element.
//     </p>
//     <p>
//       Read more at <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role" target="_blank">MDN Web docs - ARIA: tab role</a>
//     </p>
//   </article>
//   <article role="tabpanel" hidden id="tab-B">
//     <h3>More...</h3>
//     <p>This tab contains a GroupBox</p>
//     <fieldset>
//       <legend>Today's mood</legend>
//       <div classNameName="field-row">
//         <input id="radio10" type="radio" name="fieldset-example2"/>
//         <label htmlhtmlhtmlFor="radio10">Claire Saffitz</label>
//       </div>
//       <div classNameName="field-row">
//         <input id="radio11" type="radio" name="fieldset-example2"/>
//         <label htmlhtmlhtmlFor="radio11">Brad Leone</label>
//       </div>
//       <div classNameName="field-row">
//         <input id="radio12" type="radio" name="fieldset-example2"/>
//         <label htmlhtmlhtmlFor="radio12">Chris Morocco</label>
//       </div>
//       <div classNameName="field-row">
//         <input id="radio13" type="radio" name="fieldset-example2"/>
//         <label htmlhtmlhtmlFor="radio13">Carla Lalli Music</label>
//       </div>
//     </fieldset>
//   </article>
//   <article role="tabpanel" hidden id="tab-C">
//     <h3>Tab 3</h3>
//     <p>Lorem Ipsum Dolor Sit</p>
//   </article>
// </section>
//   </div>
//       </div>
