import axios from "axios"
import { TaskProps } from "../../components/Task"
import { TaskModel } from "../../components/TaskModel"

export const addToTaskList = (task: TaskModel) => {
    return axios.post('http://localhost:8080/api/v1/todolist/', {
        id: 0,
        title: task.title,
        description: task.description,
        whenToDo: task.whenToDo,
        groupType: task.groupType,
    })
}

export const getTasks = async () => {
    return await axios.get('http://localhost:8080/api/v1/todolist/')
}
    
export const updateTask = async (task: TaskModel) => {
    await axios.put(`http://localhost:8080/api/v1/todolist/${task.id}`, {
        id: task.id,
        title: task.title,
        description: task.description,
        whenToDo: task.whenToDo,
        groupType: task.groupType
    })
}

export const deleteTask = async (id: number) => {
    await axios.delete(`http://localhost:8080/api/v1/todolist/${id}`)
}