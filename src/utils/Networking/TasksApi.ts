import axios from "axios"
import { TaskModel } from "../../components/TaskModel"
import { CredentialsModel } from "../../models/CredentialsModel"
import { RegisterModel } from "../../models/RegisterModel"
import globals from "../Globals/Globals"
import tokenAxios from "./AxiosInterceptor"

export const addTask = async (task: TaskModel) => {
    return await tokenAxios.post<TaskModel>(`${globals.urls.tasks}`, task)
}

export const getTasks = async () => {
    return await tokenAxios.get<TaskModel[]>(`${globals.urls.tasks}`)
}
    
export const updateTask = async (id: number, task: TaskModel) => {
    return await tokenAxios.put<any>(`${globals.urls.tasks}${id}`, task)
}

export const deleteTask = async (id: number) => {
    return await tokenAxios.delete<any>(`${globals.urls.tasks}${id}`)
}

export const login = async (credentials: CredentialsModel) => {
    return await tokenAxios.post<any>(`${globals.urls.users}login`, credentials)
}

export const registerNew = async (credentials: CredentialsModel) => {
    return await tokenAxios.post<any>(`${globals.urls.users}register`, credentials)
}