import axios from 'axios'
import {TaskType} from "../components/TodolistTasks/TodolistTasks";


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos',
    withCredentials: true
})


//api
export const appAPI = {
    getTasks() {
        return instance.get<TaskType[]>('/')
    },
    createTask(data: CreateTaskRequestDataType) {
        return instance.post<TaskType>( '/', data)
    },
    deleteTask(taskId: number) {
        return instance.delete<{}>(`/${taskId}`)
    },
    updateTask(taskId: number, data: UpdateTaskRequestDataType) {
        return instance.put<TaskType>( `/${taskId}`, data)
    }
}


//types
type CreateTaskRequestDataType = {
    userId: number
    title: string
    completed: boolean
}

export type UpdateTaskRequestDataType = {
    title?: string
    completed?: boolean
}





