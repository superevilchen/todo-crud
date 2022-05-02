import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import Task from './Task'
import { TaskModel } from './TaskModel'
import UpdateTask from './UpdateTask'

function TaskTabs({ task }: { task: TaskModel }) {
    
  return (
      <div className="BoxTask">
          
          <div className="window" style={{ width: "400px" }}>
      <div className="title-bar" style={{paddingTop: "0.9rem", paddingBottom: "0.9rem"}}>
     <div className="title-bar-text" >{task.title}</div>
     <div className="title-bar-controls">
       <button aria-label="Minimize"></button>
       <button aria-label="Maximize"></button>
       <button aria-label="Close"></button>
     </div>
        </div>
<Tabs className="window-body">
    <TabList style={{marginBottom: "-2px"}}>
      <Tab>Details</Tab>
      <Tab>Update</Tab>
      <Tab>Delete</Tab>
    </TabList>

    <TabPanel >
      <Task task={task}/>
    </TabPanel>
    <TabPanel>
      <UpdateTask task={task}/>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
        </Tabs>
        </div>

    </div>
  )
}

export default TaskTabs