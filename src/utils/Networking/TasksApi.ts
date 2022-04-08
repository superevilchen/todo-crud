import axios from "axios"
import { TaskModel } from "../../components/TaskModel"
import globals from "../Globals/Globals"

export const addTask = async (task: TaskModel) => {
    return await axios.post<TaskModel>(`${globals.urls.tasks}`, task)
}

export const getTasks = async () => {
    return await axios.get<TaskModel[]>(`${globals.urls.tasks}`)
}
    
export const updateTask = async (id: number, task: TaskModel) => {
    return await axios.put<any>(`${globals.urls.tasks}${id}`, task)
}

export const deleteTask = async (id: number) => {
    return await axios.delete<any>(`${globals.urls.tasks}${id}`)
}