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
    /*deleteTask(taskId: string) {
        return instance.delete<TaskType[]>(`/${taskId}`)
    }*/
    /*me(){
        return instance.post<LoginResponseType>( '/auth/me',{})
    },
    logoutUser() {
        return instance.delete<UnLoginResponseType>(`/auth/me`)
    },*/
}




//types
type LoginRequestDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type UnLoginResponseType = {
    info: string
    error?: string
}

